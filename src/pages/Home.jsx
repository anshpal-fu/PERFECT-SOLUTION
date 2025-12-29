import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-2xl shadow-xl p-12 border-2 border-secondary kiosk-card balloon-cluster">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
              One Platform. Many Opportunities.
            </h2>
            
            <p className="text-lg text-white max-w-4xl mx-auto mb-8 leading-relaxed text-center font-medium">
              Perfect Solution is built to empower individuals and families by providing trusted services, educational resources, and business opportunities—all in one place. Whether you're looking to improve your financial standing, start a business, or learn step-by-step, we're here to support your journey.
            </p>
            
            <div className="text-center">
              <button className="bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12 border-2 border-secondary kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-center text-secondary mb-12 uppercase">
              Our Core Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {
                ["Education Services", "Business & Financial Services", "Kingdom Side Dishes"].map((item, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-2xl p-10 shadow-xl border-2 border-secondary text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 kiosk-card"
                  >
                    <div className="text-4xl font-extrabold text-white mb-4">{i + 1}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 uppercase">{item}</h3>
                    <p className="text-white mb-4 font-medium">Comprehensive solution with education and support.</p>
                    <button className="w-full bg-secondary text-primary py-3 px-6 rounded-full font-bold uppercase hover:bg-white hover:text-primary transition">
                      Learn More
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl shadow-2xl p-12 text-center border-2 border-secondary kiosk-card balloon-cluster">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Transform Your Future?
            </h2>
            
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              Join thousands of satisfied customers who have taken control of their financial journey.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 min-w-[200px]">
                Start Now
              </button>
              <button className="bg-white text-primary border-2 border-secondary px-10 py-4 rounded-full font-bold text-lg uppercase hover:bg-secondary hover:text-white transition-all transform hover:scale-105 min-w-[200px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}