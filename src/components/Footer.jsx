export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 counter-base">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-2xl font-extrabold text-secondary mb-2">PERFECT SOLUTION</h3>
            <p className="text-white">Every Perfect Idea Comes with One Perfect Thought at a Time</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-secondary transition-colors block py-1">Home</a></li>
              <li><a href="/services" className="text-white hover:text-secondary transition-colors block py-1">Services</a></li>
              <li><a href="/about" className="text-white hover:text-secondary transition-colors block py-1">About</a></li>
              <li><a href="/contact" className="text-white hover:text-secondary transition-colors block py-1">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary pt-6 text-center">
          <p className="text-sm font-bold">© 2025 Perfect Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
