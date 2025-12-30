import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = ["Kingdom Yams", "Kingdom Potato Salad", "Kingdom Mac & Cheese", "Kingdom Greens & String Beans"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="py-12 sm:py-16 balloon-cluster">
          <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-secondary kiosk-card">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 text-center uppercase">
            Kingdom Side Dishes
          </h1>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8 items-center">
            <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-100">
              <img 
                src="/IMG_20251226_181042.jpg" 
                alt="Kingdom Side Dishes" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6 font-medium">
                Our Kingdom Side Dishes are crafted with care and purpose. We believe food brings people together, and our dishes reflect quality, consistency, and community.
              </p>
              
              <button className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold uppercase hover:bg-white hover:text-primary transition">
                Order Now
              </button>
            </div>
          </div>
          </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-primary rounded-2xl p-6 sm:p-8  border-secondary  balloon-cluster mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 sm:mb-8 text-center uppercase">Our Menu</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-6  border-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 kiosk-card flex flex-col min-h-[200px] sm:min-h-[220px]">
                <h3 className="text-lg sm:text-xl font-bold text-center text-primary mb-2 uppercase">{item}</h3>
                <p className="text-gray-800 text-center text-xs sm:text-sm mb-3 sm:mb-4 flex-grow font-medium">Delicious and made with quality ingredients</p>
                <div className="text-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-secondary">${i === 0 || i === 1 ? '60' : i === 2 ? '8.99' : '7.99'}</span>
                </div>
                <button className="w-full bg-secondary text-primary py-2 sm:py-3 px-3 sm:px-4 rounded-full font-bold uppercase hover:bg-white hover:text-primary transition-all duration-300">
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className=" ">
          <div className="bg-primary p-8 text-center ">
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