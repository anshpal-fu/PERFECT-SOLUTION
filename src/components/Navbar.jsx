import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold">PERFECT SOLUTION</h1>

      <div className="space-x-6 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/academy">Creditor Academy</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
