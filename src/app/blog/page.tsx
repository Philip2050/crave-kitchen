import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Spice Blending",
    excerpt: "Learn how our chefs create the perfect flavor profiles for our signature dishes.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop",
    date: "December 15, 2025",
    author: "Chef Maria",
    content: "Spice blending is an art form that requires precision, creativity, and a deep understanding of flavor dynamics..."
  },
  {
    id: 2,
    title: "Balancing Flavor and Nutrition",
    excerpt: "Discover how we make our meals both delicious and nutritious.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    date: "December 10, 2025",
    author: "Nutritionist Alex",
    content: "At Crave Kitchen, we believe that healthy eating doesn't have to sacrifice flavor..."
  },
  {
    id: 3,
    title: "Meet Our Head Chef",
    excerpt: "An interview with the creative mind behind Crave Kitchen's menu.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    date: "December 5, 2025",
    author: "Editorial Team",
    content: "Chef Roberto has been at the helm of Crave Kitchen since day one..."
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">From Our Kitchen</h1>
        <div className="grid md:grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mb-4">By {post.author} on {post.date}</p>
                <p className="text-gray-700 mb-6">{post.content}</p>
                <Link href="/" className="text-red-600 hover:text-red-700 font-semibold">← Back to Home</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}