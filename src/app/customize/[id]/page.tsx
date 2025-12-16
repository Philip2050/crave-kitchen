"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ToastProvider";
import Slider3D from "@/components/Slider3D";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const dishData = {
  1: {
    name: "Ultimate Cheeseburger",
    basePrice: 12.99,
    images: {
      Beef: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
      Chicken: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
      Veggie: "https://images.unsplash.com/photo-1551782450-17144efb5723?w=600&h=400&fit=crop"
    },
    proteins: ["Beef", "Chicken", "Veggie"],
    extras: ["Extra Cheese", "Bacon", "Avocado"]
  },
  // Add more as needed
};

export default function Customize({ params }: { params: { id: string } }) {
  const [selectedSpice, setSelectedSpice] = useState(1); // 1-3 (mild to hot)
  const [selectedProtein, setSelectedProtein] = useState("Beef");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { addItem } = useCart();
  const { addToast } = useToast();

  const dish = dishData[Number(params.id) as keyof typeof dishData];

  if (!dish) return <div>Dish not found</div>;

  const totalPrice = dish.basePrice + selectedExtras.length * 2; // $2 per extra

  const toggleExtra = (extra: string) => {
    setSelectedExtras(prev =>
      prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
    );
  };

  const handlePan = (_event: unknown, info: PanInfo) => {
    if (info.offset.x > 50) {
      // Swipe right: previous protein
      const currentIndex = dish.proteins.indexOf(selectedProtein);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : dish.proteins.length - 1;
      setSelectedProtein(dish.proteins[prevIndex]);
    } else if (info.offset.x < -50) {
      // Swipe left: next protein
      const currentIndex = dish.proteins.indexOf(selectedProtein);
      const nextIndex = currentIndex < dish.proteins.length - 1 ? currentIndex + 1 : 0;
      setSelectedProtein(dish.proteins[nextIndex]);
    }
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    addItem({
      name: dish.name,
      basePrice: dish.basePrice,
      selectedProtein,
      selectedSpice,
      selectedExtras,
      totalPrice
    });
    addToast("success", `${dish.name} added to cart!`);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Customize Your {dish.name}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {isLoading ? (
              <LoadingSkeleton className="w-full h-64 rounded-lg" />
            ) : (
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handlePan}
                onPanEnd={handlePan}
                whileTap={{ scale: 0.95 }}
                className="cursor-grab active:cursor-grabbing overflow-hidden rounded-lg"
              >
                <Image
                  src={dish.images[selectedProtein as keyof typeof dish.images]}
                  alt={dish.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover shadow-md transition-all duration-300"
                />
              </motion.div>
            )}
            <p className="text-sm text-gray-500 mt-2 text-center">Swipe to change protein</p>
          </div>

          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {/* Spice Level */}
              <AccordionItem value="spice">
                <AccordionTrigger>Spice Level</AccordionTrigger>
                <AccordionContent>
                  <Slider3D
                    value={selectedSpice}
                    onChange={setSelectedSpice}
                    min={1}
                    max={3}
                    labels={["Mild 🌶️", "Medium 🌶️🌶️", "Hot 🌶️🌶️🌶️"]}
                  />
                </AccordionContent>
              </AccordionItem>

              {/* Protein Swap */}
              <AccordionItem value="protein">
                <AccordionTrigger>Protein</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-3 gap-2">
                    {dish.proteins.map((protein) => (
                      <button
                        key={protein}
                        onClick={() => setSelectedProtein(protein)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          selectedProtein === protein
                            ? "bg-orange-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        }`}
                      >
                        {protein}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Extras */}
              <AccordionItem value="extras">
                <AccordionTrigger>Add Extras (+$2 each)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {dish.extras.map((extra) => (
                      <label key={extra} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedExtras.includes(extra)}
                          onChange={() => toggleExtra(extra)}
                          className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{extra}</span>
                      </label>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Price and Add to Cart */}
            <div className="border-t pt-6 border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Total: ${totalPrice.toFixed(2)}</span>
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  {isLoading ? "Adding..." : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}