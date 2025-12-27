export default function Marketplace() {
  return (
    <section className="py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Marketplace
      </h1>

      <p className="max-w-xl mx-auto text-lg mb-6">
        Our products are also available on trusted platforms.
      </p>

      <div className="flex justify-center gap-6">
        <button className="bg-primary text-white px-6 py-3 rounded-full">
          Amazon Store
        </button>
        <button className="bg-dark text-white px-6 py-3 rounded-full">
          eBay Store
        </button>
      </div>
    </section>
  );
}