import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
        {
          ["Creditor Academy", "Business Services", "Kingdom Side Dishes"].map((item, i) => (
            <div
              key={i}
              className="bg-primary text-white p-8 rounded-xl text-center text-xl font-bold"
            >
              {item}
            </div>
          ))
        }
      </section>
    </>
  );
}