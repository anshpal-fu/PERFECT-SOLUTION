import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className="bg-white text-primary py-8 counter-base">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* 🔹 3 COLUMN GRID */}
          <div className="grid md:grid-cols-3 gap-8 mb-6 items-start">

            {/* LEFT COLUMN */}
            <div>
              <h3 className="text-2xl font-extrabold text-secondary">
                PERFECT SOLUTION
              </h3>
              <p className="text-primary text-sm">
                Every Perfect Idea Comes with One Perfect Thought at a Time
              </p>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="space-y-6 text-center">
              <h4 className="text-lg font-bold text-secondary mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-secondary">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-secondary">Services</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-secondary">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-secondary">Contact</Link>
                </li>
              </ul>

              <h4 className="text-lg font-bold text-secondary mt-6 mb-4">
                Legal
              </h4>
              <button
                onClick={() => setShowTermsModal(true)}
                className="hover:text-secondary"
              >
                Terms & Policy
              </button>
            </div>

            {/* RIGHT COLUMN — LOGO FIXED */}
            <div className="flex justify-end">
              <img
                src="/PS3-removebg-preview.png"
                alt="Perfect Solution Logo"
                className="h-60 w-65 p-4 rounded-xl "
              />
            </div>

          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-secondary pt-6 text-center">
            <p className="text-sm font-bold text-primary">
              © 2025 Perfect Solution. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* TERMS MODAL */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">
                Terms & Policy
              </h3>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <p className="mb-4">
              Welcome to Perfect Solution. These terms outline the rules for using our services.
            </p>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowTermsModal(false)}
                className="bg-secondary text-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
