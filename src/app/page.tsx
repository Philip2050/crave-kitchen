import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <Image
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=800&fit=crop"
          alt="Delicious burger with fresh ingredients"
          width={1200}
          height={800}
          className="w-full h-[80vh] object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            CRAVE KITCHEN
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl">
            Bold flavors, delivered hot. Customize your perfect meal with our Flavor Customizer.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-in">
            Order Now - One Click Delivery
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Crave Kitchen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flavor Customizer</h3>
              <p className="text-gray-600">Adjust spice, swap proteins, add extras with visual cues before adding to cart.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast Delivery</h3>
              <p className="text-gray-600">Track your order in real-time with our progress tracker. Hot and fresh every time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
              <p className="text-gray-600">Designed for on-the-go ordering with giant food photos and playful, dynamic aesthetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Crave?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers. Your next favorite meal is just one click away.</p>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors">
          Browse Menu
        </button>
      </section>
    </div>
  );
}
