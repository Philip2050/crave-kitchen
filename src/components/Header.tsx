"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";
import MiniCart from "./MiniCart";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-red-600 text-white shadow-md dark:bg-gray-800 dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CRAVE KITCHEN 🍔
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="space-x-6">
              <Link href="/" className="hover:text-orange-200 transition-colors">Home</Link>
              <Link href="/menu" className="hover:text-orange-200 transition-colors">Menu</Link>
              <Link href="/blog" className="hover:text-orange-200 transition-colors">Blog</Link>
              <Link href="/cart" className="hover:text-orange-200 transition-colors">Cart</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <MiniCart />
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-full bg-red-700 hover:bg-red-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>

              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm">Welcome, {user.name}</span>
                  <button
                    onClick={logout}
                    className="bg-red-700 hover:bg-red-800 dark:bg-gray-700 dark:hover:bg-gray-600 px-3 py-1 rounded transition-colors text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-red-700 hover:bg-red-800 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-red-700 dark:bg-gray-700 px-4 pb-4">
            <nav className="space-y-2 py-2">
              <Link href="/" className="block py-2 hover:text-orange-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/menu" className="block py-2 hover:text-orange-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link>
              <Link href="/blog" className="block py-2 hover:text-orange-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="/cart" className="block py-2 hover:text-orange-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Cart</Link>
            </nav>
            <div className="flex flex-col space-y-2 py-2 border-t border-red-600">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center space-x-2 p-2 rounded hover:bg-red-800 dark:hover:bg-gray-600 transition-colors"
              >
                <span>{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
              </button>
              {user ? (
                <>
                  <span className="py-2 text-sm">Welcome, {user.name}</span>
                  <button
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="bg-red-800 hover:bg-red-900 dark:bg-gray-600 dark:hover:bg-gray-500 px-4 py-2 rounded transition-colors text-sm text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setIsAuthModalOpen(true); setIsMenuOpen(false); }}
                  className="bg-red-800 hover:bg-red-900 dark:bg-gray-600 dark:hover:bg-gray-500 px-4 py-2 rounded transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}