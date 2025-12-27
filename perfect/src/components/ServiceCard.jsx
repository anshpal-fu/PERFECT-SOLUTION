export default function ServiceCard({ title }) {
  return (
    <div className="border-2 border-[var(--primary)] p-6 rounded-xl text-center font-semibold hover:bg-secondary transition">
      {title}
    </div>
  );
}
