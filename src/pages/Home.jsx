import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            One Platform. Many Opportunities.
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Perfect Solution is built to empower individuals and families by providing trusted services, educational resources, and business opportunities—all in one place. Whether you're looking to improve your financial standing, start a business, or learn step-by-step, we're here to support your journey.
          </p>
          
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Our Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {
              ["Creditor Academy", "Business & Financial Services", "Kingdom Side Dishes"].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl font-extrabold text-primary mb-4">{i + 1}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{item}</h3>
                  <p className="text-gray-600 mb-4">Comprehensive solution with education and support.</p>
                  <button className="w-full bg-primary text-white py-3 px-6 rounded-full font-bold hover:bg-opacity-90 transition">
                    Learn More
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who have taken control of their financial journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Start Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer Preview */}
      <footer className="py-8 bg-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-extrabold mb-2">PERFECT SOLUTION</h3>
          <p className="text-sm">Every Perfect Idea Comes with One Perfect Thought at a Time</p>
        </div>
      </footer>
    </div>
  );
}