import { upDog } from "@/app/server/deck";

export default function Form() {
  return (
    <form className="inline-flex flex-col gap-2" action={upDog}>
      <input placeholder="Deck name" name="deckName" className="border px-3 py-1 rounded text-xl focus:outline-none" />
      <button className="p-2 text-white bg-indigo-600 rounded">Create Board</button>
    </form>
  )
}
