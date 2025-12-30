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
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-2xl p-8 text-center balloon-cluster">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase">
              Our Services
            </h1>
            
            <p className="text-xl text-white max-w-3xl mx-auto mb-6 leading-relaxed font-medium">
              We provide a wide range of services designed to help individuals grow financially, personally, and professionally. Each service is delivered with transparency, education, and long-term value in mind.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 balloon-cluster">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-white rounded-2xl p-8  border-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 kiosk-card flex flex-col text-center h-full">
                <div className="text-4xl font-extrabold text-primary mb-4">{i + 1}</div>
                <h3 className="text-2xl font-bold text-primary mb-4 uppercase">{service}</h3>
                <p className="text-gray-800 mb-4 font-medium flex-grow">Comprehensive service with education and support.</p>
                <button className="w-full bg-secondary text-primary py-3 px-6 rounded-full font-bold uppercase hover:bg-white hover:text-primary transition">
                  Learn More
                </button>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl p-8 text-center balloon-cluster">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase">
              Ready to Get Started?
            </h2>
            
            <p className="text-lg text-white mb-6 font-medium">
              Choose the service that fits your needs and take the first step towards your financial goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Explore Services
              </button>
              <button className="bg-white text-primary border-2 border-secondary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-secondary hover:text-secondary transition-all transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}