import Image from "next/image";
import Link from "next/link";

const dishes = [
  {
    id: 1,
    name: "Ultimate Cheeseburger",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "Burgers"
  },
  {
    id: 2,
    name: "Spicy Chicken Wings",
    description: "Crispy wings tossed in our signature spicy sauce",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
    category: "Wings"
  },
  {
    id: 3,
    name: "Loaded Fries",
    description: "Golden fries topped with cheese, bacon, and green onions",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    category: "Sides"
  },
  // Add more dishes as needed
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Menu</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={dish.image}
                alt={dish.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{dish.name}</h2>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">${dish.price}</span>
                  <Link href={`/customize/${dish.id}`}>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
                      Customize & Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}