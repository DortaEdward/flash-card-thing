"use server"

import { db } from "@/db/db"
import { auth } from "@clerk/nextjs/server"

// Create User in DB

export async function createDeck(formData: FormData) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error("Unauthorized")
    // find user in db
    const user = await db.user.findFirst({
      where:
      {
        clerkId: userId
      }
    })

    if (!user) throw new Error("Unauthorized")

    const newDeck = await db.deck.create({
      data: {
        name: formData.get("name") as string,
        userId: user.id
      }
    })

    return newDeck

  } catch (error) {
    if (error instanceof Error)
      throw new Error("Unauthorized")
  }


}

