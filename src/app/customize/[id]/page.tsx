"use client";

import { useState } from "react";
import Image from "next/image";

const dishData = {
  1: {
    name: "Ultimate Cheeseburger",
    basePrice: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    proteins: ["Beef", "Chicken", "Veggie"],
    extras: ["Extra Cheese", "Bacon", "Avocado"]
  },
  // Add more as needed
};

export default function Customize({ params }: { params: { id: string } }) {
  const [selectedSpice, setSelectedSpice] = useState(1); // 1-3 (mild to hot)
  const [selectedProtein, setSelectedProtein] = useState("Beef");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const dish = dishData[Number(params.id) as keyof typeof dishData];

  if (!dish) return <div>Dish not found</div>;

  const totalPrice = dish.basePrice + selectedExtras.length * 2; // $2 per extra

  const toggleExtra = (extra: string) => {
    setSelectedExtras(prev =>
      prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Customize Your {dish.name}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={dish.image}
              alt={dish.name}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            {/* Spice Level */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Spice Level</h3>
              <div className="flex gap-2">
                {[1, 2, 3].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedSpice(level)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedSpice === level
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {level === 1 ? "Mild" : level === 2 ? "Medium" : "Hot"} 🌶️
                  </button>
                ))}
              </div>
            </div>

            {/* Protein Swap */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Protein</h3>
              <div className="grid grid-cols-3 gap-2">
                {dish.proteins.map((protein) => (
                  <button
                    key={protein}
                    onClick={() => setSelectedProtein(protein)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedProtein === protein
                        ? "bg-orange-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {protein}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Add Extras (+$2 each)</h3>
              <div className="space-y-2">
                {dish.extras.map((extra) => (
                  <label key={extra} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedExtras.includes(extra)}
                      onChange={() => toggleExtra(extra)}
                      className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-gray-700">{extra}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price and Add to Cart */}
            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</span>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}