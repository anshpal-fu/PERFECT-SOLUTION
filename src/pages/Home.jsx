import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">One Platform. Many Opportunities.</h2>
          <p className="text-lg text-gray-700">
            Perfect Solution is built to empower individuals and families by providing trusted services, educational resources, and business opportunities—all in one place. Whether you're looking to improve your financial standing, start a business, or learn step-by-step, we're here to support your journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {
            ["Creditor Academy", "Business & Financial Services", "Kingdom Side Dishes"].map((item, i) => (
              <div
                key={i}
                className="bg-primary text-white p-8 rounded-xl text-center text-xl font-bold"
              >
                {item}
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}