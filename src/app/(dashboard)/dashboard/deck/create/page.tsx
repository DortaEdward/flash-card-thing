
import { upDog } from "@/app/server/deck"
import { auth } from "@clerk/nextjs/server"
import Form from "./_components/form"

const initialState = {
  name: null
}

export default async function CreateBoardPage() {
  const user = auth()


  return (
    <div>
      <Form />
    </div>
  )
}
