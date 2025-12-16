"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Hero Section with Parallax */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=800&fit=crop"
            alt="Delicious burger with fresh ingredients"
            width={1200}
            height={800}
            className="w-full h-screen object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </motion.div>

        {/* Floating elements for immersive visuals */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 text-6xl opacity-20"
        >
          🍔
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 text-6xl opacity-20"
        >
          🌶️
        </motion.div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
          >
            CRAVE KITCHEN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl"
          >
            Bold flavors, delivered hot. Customize your perfect meal with our Flavor Customizer.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            <Link href="/menu">Order Now - One Click Delivery</Link>
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
          >
            Why Choose Crave Kitchen?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <span className="text-2xl">🌶️</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Flavor Customizer</h3>
              <p className="text-gray-600 dark:text-gray-400">Adjust spice, swap proteins, add extras with visual cues before adding to cart.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow cursor-grab active:cursor-grabbing"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <span className="text-2xl">🚚</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Lightning Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">Track your order in real-time with our progress tracker. Hot and fresh every time.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-50 to-red-50 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <span className="text-2xl">📱</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Mobile Optimized</h3>
              <p className="text-gray-600 dark:text-gray-400">Designed for on-the-go ordering with giant food photos and playful, dynamic aesthetics.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto"
          >
            Crave Kitchen was born from a passion for bold flavors and exceptional dining experiences. Founded in 2020 by a team of culinary enthusiasts, we started as a small pop-up kitchen experimenting with fusion recipes.             Today, we&apos;re a delivery-only restaurant bringing crave-worthy meals right to your door. Our commitment to quality ingredients, innovative flavor combinations, and lightning-fast service has made us a favorite among food lovers everywhere.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
              alt="Chef preparing food"
              width={1200}
              height={800}
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">&ldquo;The best burgers I&apos;ve ever had! The flavor customizer is genius.&rdquo;</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">- Sarah J.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">&ldquo;Delivery is always on time, and the food arrives hot. Highly recommend!&rdquo;</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">- Mike T.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">&ldquo;Their spicy wings are addictive. Can&apos;t get enough!&rdquo;</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">- Emma R.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900 transition-colors">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200"
          >
            Our Commitment to Sustainability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto"
          >
            At Crave Kitchen, we believe great food goes hand-in-hand with environmental responsibility. We source ingredients from local farms, use eco-friendly packaging, and minimize food waste through our portion customization.             Our delivery fleet includes electric vehicles, and we&apos;re carbon-neutral in our operations.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"
                alt="Fresh local produce"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Local Sourcing</h3>
              <p className="text-gray-600 dark:text-gray-400">We partner with local farmers for the freshest, seasonal ingredients.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1532996122724-e3bc8a3334b6?w=400&h=300&fit=crop"
                alt="Eco-friendly packaging"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Green Packaging</h3>
              <p className="text-gray-600 dark:text-gray-400">All our packaging is recyclable and compostable.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                alt="Electric delivery vehicle"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Zero-Emission Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">Our fleet runs on electric vehicles for a cleaner future.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
          >
            From Our Kitchen
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop"
                alt="Spice mixing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">The Art of Spice Blending</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Learn how our chefs create the perfect flavor profiles for our signature dishes.</p>
              <Link href="#" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold">Read More →</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                alt="Healthy eating"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Balancing Flavor and Nutrition</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Discover how we make our meals both delicious and nutritious.</p>
              <Link href="#" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold">Read More →</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
                alt="Chef at work"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Meet Our Head Chef</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">An interview with the creative mind behind Crave Kitchen&apos;s menu.</p>
              <Link href="#" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold">Read More →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 bg-red-600 dark:bg-red-800 text-white text-center transition-colors"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Crave?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers. Your next favorite meal is just one click away.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-red-600 dark:text-red-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
        >
          <Link href="/menu">Browse Menu</Link>
        </motion.button>
      </motion.section>
    </div>
  );
}
