export default function Academy() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Creditor Academy
        </h1>
        
        <p className="text-lg text-gray-700 mb-12">
          Creditor Academy is our educational platform designed to help individuals understand credit, financial literacy, and private education—one step at a time.
        </p>
        
        <h2 className="text-2xl font-bold text-primary mb-6">We focus on:</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border-2 border-primary rounded-xl text-center font-semibold">
            Credit education & awareness
          </div>
          <div className="p-6 border-2 border-primary rounded-xl text-center font-semibold">
            Financial responsibility
          </div>
          <div className="p-6 border-2 border-primary rounded-xl text-center font-semibold">
            Status education
          </div>
        </div>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 text-left max-w-2xl mx-auto">
          <p className="text-gray-800">
            All information provided is for educational purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}