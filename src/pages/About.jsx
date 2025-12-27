export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 md:h-96 flex items-center justify-center text-gray-500">
            Business Success Image
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
              About Perfect Solution
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're on a mission to empower everyone to go after their dreams by offering services, sharing information, and creating opportunities for growth.
            </p>
            
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-primary">
              <div className="text-5xl font-extrabold text-primary mb-4">1</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Empowerment</h3>
              <p className="text-gray-600">Building confidence through knowledge and opportunity</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-primary">
              <div className="text-5xl font-extrabold text-primary mb-4">2</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Education</h3>
              <p className="text-gray-600">Providing tools for financial literacy and growth</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-primary">
              <div className="text-5xl font-extrabold text-primary mb-4">3</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Growth</h3>
              <p className="text-gray-600">Fostering personal and professional development</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            What We Focus On
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-500">
                Credit Education
              </div>
              <div className="p-6 bg-white">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-3">EDUCATION</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Creditor Academy</h3>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-500">
                Financial Services
              </div>
              <div className="p-6 bg-white">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-3">SERVICES</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Business & Financial</h3>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-500">
                Food Business
              </div>
              <div className="p-6 bg-white">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-3">BUSINESS</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Kingdom Side Dishes</h3>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              View More
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer Preview */}
      <footer className="py-8 bg-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-extrabold mb-2">PERFECT SOLUTION</h3>
          <p className="text-sm">Every Perfect Idea Comes with One Perfect Thought at a Time</p>
        </div>
      </footer>
    </div>
  );
}