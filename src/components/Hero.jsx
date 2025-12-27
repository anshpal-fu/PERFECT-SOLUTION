export default function Hero() {
  return (
    <section className="bg-secondary py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Every Perfect Idea Comes with
      </h1>

      <h2 className="text-4xl font-bold mb-6">
        One Perfect Thought at a Time
      </h2>

      <p className="max-w-2xl mx-auto text-lg mb-8">
        Empowering everyone to go after their dreams through education,
        services, and opportunity.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">
          Get Started
        </button>
        <button className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">
          Explore Services
        </button>
      </div>
    </section>
  );
}
