import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = ["Mac & Cheese", "Fried Rice", "Kingdom Greens"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 kiosk-card balloon-cluster">
          <h1 className="text-4xl font-bold text-secondary mb-6 text-center uppercase">
            Kingdom Side Dishes
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-100">
              <img 
                src="/IMG_20251226_181042.jpg" 
                alt="Kingdom Side Dishes" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-700 mb-6 font-medium">
                Our Kingdom Side Dishes are crafted with care and purpose. We believe food brings people together, and our dishes reflect quality, consistency, and community.
              </p>
              
              <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold uppercase hover:bg-white hover:text-primary transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
        
        <section className="mb-8 ">
          <h2 className="text-3xl font-bold text-secondary mb-6 text-center uppercase">Our Menu</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((item, i) => (
              <div key={i} className="bg-primary rounded-2xl shadow-lg p-6 border-2 border-secondary kiosk-card">
                <h3 className="text-xl font-bold text-center text-white mb-4 uppercase">{item}</h3>
                <p className="text-white text-center mb-4 font-medium">Delicious and made with quality ingredients</p>
                <button className="w-full bg-secondary text-primary py-2 px-4 rounded-xl font-bold uppercase hover:bg-white hover:text-primary transition">
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl shadow-xl p-8 text-center kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase">
              Order Today
            </h2>
            
            <p className="text-lg text-white mb-6 font-medium">
              Try our delicious Kingdom Side Dishes now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Order Now
              </button>
              <button className="bg-white text-primary border-2 border-secondary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-lg">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}