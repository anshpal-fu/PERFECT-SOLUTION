export default function Hero() {
  return (
    <section className="bg-primary py-16 text-center relative overflow-hidden">
      {/* Decorative circular shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-secondary opacity-30"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-white opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-secondary opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-white opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="p-10 inline-block max-w-4xl balloon-cluster">
          <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-4">
            Every Perfect Idea Comes with
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            One Perfect Thought at a Time
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-white-400 font-medium">
            Empowering everyone to go after their dreams through education,
            services, and opportunity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="bg-white text-primary border-2 border-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-lg">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
