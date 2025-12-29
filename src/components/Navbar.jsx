import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg counter-top">
      <h1 className="text-2xl font-extrabold text-secondary">PERFECT SOLUTION</h1>

      <div className="space-x-6 font-bold">
        <Link to="/" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1">Home</Link>
        <Link to="/services" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1">Services</Link>
        <Link to="/shop" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1">Shop</Link>
        <Link to="/about" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1">About</Link>
        <Link to="/contact" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary transition-colors duration-300 pb-1">Contact</Link>
      </div>
    </nav>
  );
}
