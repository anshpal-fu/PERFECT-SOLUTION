export default function Hero() {
  return (
    <section className="bg-primary py-12 sm:py-16 text-center relative overflow-hidden">
      {/* Decorative circular shapes */}
      <div className="absolute top-6 sm:top-10 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-secondary opacity-30"></div>
      <div className="absolute top-1/4 sm:top-1/3 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white opacity-40"></div>
      <div className="absolute bottom-12 sm:bottom-20 left-1/4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary opacity-20"></div>
      <div className="absolute bottom-1/4 sm:bottom-1/3 right-1/4 sm:right-1/3 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="p-6 sm:p-10 inline-block max-w-full sm:max-w-4xl balloon-cluster">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4">
            Every Perfect Idea Comes with
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            One Perfect Thought at a Time
          </h2>

          <p className="max-w-full sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white font-medium">
            Empowering everyone to go after their dreams through education,
            services, and opportunity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="bg-white text-primary border-2 border-secondary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-secondary  transition-all transform hover:scale-105 shadow-lg">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
