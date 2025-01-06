
import Link from "next/link";
import { Brain } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Brain className="h-6 w-6 text-indigo-600" />
        <span className="ml-2 text-2xl font-bold text-gray-900">MemoryMaster</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <SignedIn>
          <div className="flex items-center gap-4 justify-center">
            <Link href={"/dashboard"} className="text-white bg-indigo-600 px-4 py-1 rounded">Dashboard</Link>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </header>
  )
}

