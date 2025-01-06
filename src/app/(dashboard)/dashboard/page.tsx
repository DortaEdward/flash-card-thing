import { Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex-grow">
      <div className="flex gap-2 flex-wrap">
        <div className="w-64 h-32 border shadow rounded-md flex items-center justify-center cursor-pointer">
          <Link href={"/dashboard/deck/create"} className="flex flex-col gap-1 items-center">
            <p className="font-bold">Create Deck</p>
            <Plus className="font-bold" />
          </Link>
        </div>
      </div>
    </div>
  )
}
