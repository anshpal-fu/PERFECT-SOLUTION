export default function About() {
  return (
    <div className="min-h-screen bg-primary">
      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="bg-white rounded-2xl p-6 balloon-cluster">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className=" w-full h-80 md:h-96 flex items-center justify-center text-gray-800 p-4 ">
                <img src="/about.jpg" 
                alt=""
                className="w-full h-full object-cover" />
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold text-red mb-6 uppercase">
                  About Perfect Solution
                </h1>
                
                <p className="text-lg text-white mb-8 leading-relaxed font-medium">
                  We're on a mission to empower everyone to go after their dreams by offering services, sharing information, and creating opportunities for growth.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-2xl text-gray-800 border-2 border-secondary kiosk-card">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase">Our Mission</h3>
                    <p className="text-gray-800">
                      To empower everyone to go after their dreams by offering services, sharing information, and creating opportunities for growth.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl text-gray-800 border-2 border-secondary kiosk-card">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase">Our Vision</h3>
                    <p className="text-gray-800">
                      We believe every journey starts with one perfect thought. Through education, service, and community, we aim to help individuals build a better future—step by step.
                    </p>
                  </div>
                </div>
                
                <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="bg-primary rounded-2xl p-8  border-secondary  balloon-cluster">
            <h2 className="text-4xl font-bold text-center text-secondary mb-12 uppercase">
              Our Core Values
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
              <div className="flex-1 min-w-[300px] bg-gradient-to-br from-white to-gray-100 rounded-2xl p-8  border-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10" style={{backgroundImage: "url('/education.jpg')"}}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full -m-16 flex items-center justify-center">
                  <span className="text-5xl font-extrabold text-primary">1</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase">Empowerment</h3>
                  <p className="text-gray-800 mb-6">Building confidence through knowledge and opportunity</p>
                  <div className="h-1 w-16 bg-secondary rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 min-w-[300px] bg-gradient-to-br from-white to-gray-100 rounded-2xl p-8 border-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10" style={{backgroundImage: "url('/financial.jpg')"}}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full -m-16 flex items-center justify-center">
                  <span className="text-5xl font-extrabold text-primary">2</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase">Education</h3>
                  <p className="text-gray-800 mb-6">Providing tools for financial literacy and growth</p>
                  <div className="h-1 w-16 bg-secondary rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 min-w-[300px] bg-gradient-to-br from-white to-gray-100 rounded-2xl p-8  border-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10" style={{backgroundImage: "url('/IMG_20251226_181042.jpg')"}}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full -m-16 flex items-center justify-center">
                  <span className="text-5xl font-extrabold text-primary">3</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase">Growth</h3>
                  <p className="text-gray-800 mb-6">Fostering personal and professional development</p>
                  <div className="h-1 w-16 bg-secondary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-16 px-6 bg-white">
        <div className="p-8  kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-center text-black mb-12 uppercase">
              What We Focus On
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden shadow-lg kiosk-card">
                <div className="bg-white border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-700 relative">
                  <img 
                    src="/education.jpg" 
                    alt="Education Services" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  
                </div>
                <div className="p-6 bg-white">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold mb-3 uppercase">EDUCATION</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 uppercase">Education Services </h3>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg kiosk-card">
                <div className="bg-white border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-700 relative">
                  <img 
                    src="/empr.jpg" 
                    alt="Financial Services" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                   </div>
                <div className="p-6 bg-white">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold mb-3 uppercase">SERVICES</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 uppercase">Business & Financial</h3>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg kiosk-card">
                <div className="bg-white border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-700 relative">
                  <img 
                    src="/empr.jpg" 
                    alt="Food Business" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  
                  </div>
                <div className="p-6 bg-white">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold mb-3 uppercase">BUSINESS</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 uppercase">Kingdom Side Dishes</h3>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                View More
              </button>
            </div>
          </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className=" rounded-2xl shadow-xl p-8 text-center kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-secondary mb-4 uppercase">
              Ready to Learn More?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Discover how Perfect Solution can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="bg-white text-primary border-2 border-secondary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
      </section>
      
    </div>
  );
}