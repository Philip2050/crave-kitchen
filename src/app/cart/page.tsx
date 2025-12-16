"use client";

import { useState } from "react";

const progressStages = [
  { id: 1, name: "Ordered", icon: "📋", completed: true },
  { id: 2, name: "Preparing", icon: "👨‍🍳", completed: true },
  { id: 3, name: "Delivering", icon: "🚚", completed: false },
  { id: 4, name: "Delivered", icon: "✅", completed: false }
];

export default function Cart() {
  const [currentStage, setCurrentStage] = useState(2);

  const advanceStage = () => {
    if (currentStage < progressStages.length) {
      setCurrentStage(currentStage + 1);
      // In real app, this would be from API
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Order</h1>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Ultimate Cheeseburger (Spicy, Extra Cheese)</span>
              <span>$14.99</span>
            </div>
            <div className="flex justify-between">
              <span>Loaded Fries</span>
              <span>$7.99</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>$22.98</span>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Order Progress</h2>
          <div className="flex justify-between items-center">
            {progressStages.map((stage, index) => (
              <div key={stage.id} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 ${
                  stage.completed ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"
                }`}>
                  {stage.icon}
                </div>
                <span className={`text-sm font-medium ${
                  stage.completed ? "text-green-600" : "text-gray-400"
                }`}>
                  {stage.name}
                </span>
                {index < progressStages.length - 1 && (
                  <div className={`h-1 w-full mt-2 ${
                    progressStages[index + 1].completed ? "bg-green-500" : "bg-gray-200"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">Estimated delivery: 25 minutes</p>
            <button
              onClick={advanceStage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              disabled={currentStage >= progressStages.length}
            >
              Simulate Next Stage
            </button>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Delivery Address</h3>
              <p className="text-gray-600">123 Main St, Anytown, USA</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Driver</h3>
              <p className="text-gray-600">John Doe - (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}