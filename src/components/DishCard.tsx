import Image from "next/image";
import Link from "next/link";

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

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => <span key={i} className="text-yellow-500">★</span>)}
      {halfStar && <span className="text-yellow-500">☆</span>}
      {[...Array(emptyStars)].map((_, i) => <span key={i} className="text-gray-300">☆</span>)}
    </div>
  );
}

interface DishCardProps {
  dish: Dish;
  onShowNutrition: (dish: Dish) => void;
}

export default function DishCard({ dish, onShowNutrition }: DishCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={dish.image}
        alt={dish.name}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{dish.name}</h2>
        <p className="text-gray-600 mb-4">{dish.description}</p>
        <div className="mb-4">
          <StarRating rating={dish.reviews.rating} />
          <span className="text-sm text-gray-500 ml-2">({dish.reviews.count} reviews)</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-red-600">${dish.price}</span>
          <button
            onClick={() => onShowNutrition(dish)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm mr-2"
            aria-label={`View nutrition information for ${dish.name}`}
          >
            Nutrition
          </button>
        </div>
        <Link href={`/customize/${dish.id}`}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors w-full">
            Customize & Order
          </button>
        </Link>
      </div>
    </div>
  );
}