export default function About() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          About Perfect Solution
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            To empower everyone to go after their dreams by offering services, sharing information, and creating opportunities for growth.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            We believe every journey starts with one perfect thought. Through education, service, and community, we aim to help individuals build a better future—step by step.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Values</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-primary rounded-xl text-center font-semibold">
              Empowerment
            </div>
            <div className="p-4 border-2 border-primary rounded-xl text-center font-semibold">
              Education
            </div>
            <div className="p-4 border-2 border-primary rounded-xl text-center font-semibold">
              Transparency
            </div>
            <div className="p-4 border-2 border-primary rounded-xl text-center font-semibold">
              Growth
            </div>
            <div className="p-4 border-2 border-primary rounded-xl text-center font-semibold">
              Community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}