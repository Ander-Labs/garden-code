import Link from "next/link";
import dynamic from "next/dynamic";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const ThemeBtn = dynamic(() => import("./themeBtn"));

export default function Header() {
  return (
    <>
      <header className="flex justify-around items-center py-4 border-b">
        <Link href={"/"} className="text-xl font-bold">
          Garden Code
        </Link>

        <nav className="flex justify-around items-center gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>

          <Link href={"/roadmap"}>Roadmap</Link>

          <Link href={"/resources"}>Resources</Link>
        </nav>

        <div className="flex gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <ThemeBtn />
        </div>
      </header>
    </>
  );
}
