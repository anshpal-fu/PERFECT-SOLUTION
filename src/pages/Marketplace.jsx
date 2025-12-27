export default function Marketplace() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Marketplace
        </h1>
        
        <p className="text-lg text-gray-700 mb-12">
          Perfect Solution products and services are also available through trusted online marketplaces. Shop with confidence on platforms you already know.
        </p>
        
        <div className="space-y-6">
          <button className="block bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition w-full max-w-xs mx-auto">
            Visit Our Amazon Store
          </button>
          <button className="block bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition w-full max-w-xs mx-auto">
            Visit Our eBay Store
          </button>
        </div>
      </div>
    </section>
  );
}