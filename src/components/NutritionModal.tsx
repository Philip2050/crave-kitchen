import { useEffect } from "react";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  nutrition: { calories: number; protein: number; carbs: number; fat: number };
  reviews: { rating: number; count: number };
  reviewComments: string[];
}

interface NutritionModalProps {
  dish: Dish | null;
  onClose: () => void;
}

export default function NutritionModal({ dish, onClose }: NutritionModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (dish) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <h3 className="text-lg font-bold mb-4">{dish.name} Nutrition</h3>
        <div className="space-y-2 mb-4">
          <p><strong>Calories:</strong> {dish.nutrition.calories}</p>
          <p><strong>Protein:</strong> {dish.nutrition.protein}g</p>
          <p><strong>Carbs:</strong> {dish.nutrition.carbs}g</p>
          <p><strong>Fat:</strong> {dish.nutrition.fat}g</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          aria-label="Close nutrition modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}