import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = ["Mac & Cheese", "Fried Rice", "Kingdom Greens"];

  return (
    <section className="py-16 px-6">
      <h1 className="text-4xl font-bold text-primary mb-10">
        Kingdom Side Dishes
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, i) => (
          <ProductCard key={i} name={item} />
        ))}
      </div>
    </section>
  );
}