"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function MiniCart() {
  const { items, total } = useCart();

  return (
    <div className="relative">
      <Link href="/cart" className="flex items-center space-x-2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
        <ShoppingBagIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          ({items.length}) ${total.toFixed(2)}
        </span>
      </Link>
      {items.length > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
          {items.length}
        </div>
      )}
    </div>
  );
}