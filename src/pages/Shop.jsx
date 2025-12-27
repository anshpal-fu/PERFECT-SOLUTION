import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = ["Mac & Cheese", "Fried Rice", "Kingdom Greens"];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Kingdom Side Dishes
        </h1>
        
        <p className="text-lg text-gray-700 mb-12">
          Our Kingdom Side Dishes are crafted with care and purpose. We believe food brings people together, and our dishes reflect quality, consistency, and community.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((item, i) => (
            <ProductCard key={i} name={item} />
          ))}
        </div>
        
        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition mt-4">
          Order Now
        </button>
      </div>
    </section>
  );
}