import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    "Hard Money Lending",
    "Tradelines",
    "Car Wholesaling",
    "Junk & Bulk Removal",
    "Buy & Sell Property",
    "Credit Repair Education",
    "Status Correction / SPC",
    "Passport Guidance",
  ];

  return (
    <section className="py-16 px-6">
      <h1 className="text-4xl font-bold text-primary mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} title={service} />
        ))}
      </div>
    </section>
  );
}