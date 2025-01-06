import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { db } from '@/db/db'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  if (evt.type === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;
    const user = {
      clerkId: id,
      email: email_addresses[0]!.email_address,
      username: username || "",
      firstName: first_name,
      lastName: last_name,
      profileImage: image_url,
    }
    try {
      const newUser = await db.user.create({ data: user })
      if (newUser) {
        const client = await clerkClient()
        await client.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser.id
          }
        })
      }
      console.log(`New user created: ${newUser.id}`)
      return NextResponse.json({ message: "OK" })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  // Update User in Db
  if (evt.type === "user.updated") {
    // updated user
  }

  // Delete User in Db
  if (evt.type === "user.deleted") {
    try {
      const deletedUser = await db.user.delete({
        where: {
          clerkId: evt.data.id,
        }
      })
      console.log("Deleted User: ", deletedUser.id)

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return new Response('Webhook received', { status: 200 })
}
