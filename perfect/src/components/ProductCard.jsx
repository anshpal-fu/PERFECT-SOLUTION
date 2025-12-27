export default function ProductCard({ name }) {
  return (
    <div className="border p-6 rounded-xl text-center">
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <button className="bg-primary text-white px-4 py-2 rounded-full">
        Buy Now
      </button>
    </div>
  );
}
