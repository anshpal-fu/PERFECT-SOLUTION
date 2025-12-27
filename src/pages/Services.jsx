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
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          Our Services
        </h1>
        
        <p className="text-lg text-gray-700 mb-12 text-center">
          We provide a wide range of services designed to help individuals grow financially, personally, and professionally. Each service is delivered with transparency, education, and long-term value in mind.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} title={service} />
          ))}
        </div>
      </div>
    </section>
  );
}