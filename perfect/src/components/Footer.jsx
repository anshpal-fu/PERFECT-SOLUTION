import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);

  const openTermsModal = () => {
    setShowTermsModal(true);
  };

  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  return (
    <>
      <footer className="bg-white text-primary py-8 counter-base">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <div className="mb-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-secondary">PERFECT SOLUTION</h3>
                  <p className="text-primary text-sm">Every Perfect Idea Comes with One Perfect Thought at a Time</p>
                </div>
                <div className="mt-2 flex justify-left">
                  <img src="/PS3.png" alt="Perfect Solution Logo" className="h-55 w-60" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-secondary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-primary hover:text-secondary transition-colors block py-1">Home</Link></li>
                <li><Link to="/services" className="text-primary hover:text-secondary transition-colors block py-1">Services</Link></li>
                <li><Link to="/about" className="text-primary hover:text-secondary transition-colors block py-1">About</Link></li>
                <li><Link to="/contact" className="text-primary hover:text-secondary transition-colors block py-1">Contact</Link></li>
              </ul>
              
              <h4 className="text-lg font-bold text-secondary mt-6 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><button 
                  onClick={openTermsModal}
                  className="text-primary hover:text-secondary transition-colors block py-1 text-left w-full"
                >
                  Terms & Policy
                </button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary pt-6 text-center">
            <p className="text-sm font-bold text-primary">© 2025 Perfect Solution. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto balloon-cluster p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">Terms & Policy</h3>
              <button 
                onClick={closeTermsModal}
                className="text-primary hover:text-secondary text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="text-gray-800">
              <h4 className="text-lg font-bold text-primary mb-2">Effective Date: January 1, 2025</h4>
              <p className="mb-4">Welcome to Perfect Solution. These terms and conditions outline the rules and regulations for the use of our services.</p>
              
              <h5 className="font-bold text-primary mb-2">General Terms</h5>
              <p className="mb-4">By accessing this website, you agree to comply with these terms and conditions. The content of this website is for general information purposes only.</p>
              
              <h5 className="font-bold text-primary mb-2">Intellectual Property</h5>
              <p className="mb-4">Unless otherwise stated, Perfect Solution and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
              
              <h5 className="font-bold text-primary mb-2">Limitations of Liability</h5>
              <p className="mb-4">Perfect Solution shall not be held liable for any consequential, incidental, indirect, or special damages resulting from the use of our services.</p>
              
              <h5 className="font-bold text-primary mb-2">Governing Law</h5>
              <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              
              <h5 className="font-bold text-primary mb-2">Changes to Terms</h5>
              <p className="mb-4">Perfect Solution reserves the right to revise these terms at any time. Your continued use of our services constitutes acceptance of any revisions.</p>
              
              <div className="text-center mt-6">
                <button 
                  onClick={closeTermsModal}
                  className="bg-secondary text-primary px-6 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}