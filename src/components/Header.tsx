import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CRAVE KITCHEN 🍔
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-orange-200 transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-orange-200 transition-colors">Menu</Link>
          <Link href="/cart" className="hover:text-orange-200 transition-colors">Cart</Link>
        </nav>
      </div>
    </header>
  );
}