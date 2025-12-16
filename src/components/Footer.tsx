"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock subscription - in real app, this would call an API
    alert(`Thanks for subscribing! We'll send updates to ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white py-12 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-4">
              Get exclusive deals, new menu items, and crave-worthy updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/cart" className="text-gray-300 hover:text-white transition-colors">Cart</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-300 mb-4">
              Join our foodie community and share your Crave Kitchen experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-red-400 transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-red-400 transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-red-400 transition-colors">📷</a>
              <a href="#" className="text-2xl hover:text-red-400 transition-colors">🎥</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Crave Kitchen. All rights reserved. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  );
}