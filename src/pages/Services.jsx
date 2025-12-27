import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    "Hard Money Lending",
    "Tradelines",
    "Credit Repair Educational Information",
    "Status Correction & SPC Guidance",
    "Passport & Private Status Education",
    "Car Wholesaling",
    "Junk & Bulk Removal",
    "Buy & Sell Property Services",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
            Our Services
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            We provide a wide range of services designed to help individuals grow financially, personally, and professionally. Each service is delivered with transparency, education, and long-term value in mind.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-extrabold text-primary mb-4">{i + 1}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">Comprehensive service with education and support.</p>
                <button className="w-full bg-primary text-white py-3 px-6 rounded-full font-bold hover:bg-opacity-90 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Choose the service that fits your needs and take the first step towards your financial goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Explore Services
            </button>
            <button className="bg-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
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