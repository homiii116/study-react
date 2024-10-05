import Link from "next/link";

export function Header() {
  return (
      <header className="underline flex space-x-4">
        <Link href="/" className="">Index</Link>
        <Link href="/about" className="">About</Link>
      </header>
  );
}
