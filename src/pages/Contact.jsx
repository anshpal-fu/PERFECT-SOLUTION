

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className=" rounded-2xl  p-8 mb-8 text-center kiosk-card balloon-cluster">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-3 sm:mb-4 uppercase">
            Contact Us
          </h1>
          
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            We'd love to hear from you. Reach out to Perfect Solution for inquiries, collaborations, or support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-primary rounded-2xl shadow-xl p-6 sm:p-8 kiosk-card">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase">Send us a message</h2>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white mb-2 text-sm sm:text-base font-medium uppercase" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition bg-white text-sm sm:text-base"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 text-sm sm:text-base font-medium uppercase" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition bg-white text-sm sm:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base font-medium uppercase" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition bg-white text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base font-medium uppercase" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition bg-white text-sm sm:text-base"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base font-medium uppercase" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition bg-white text-sm sm:text-base"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-secondary text-primary py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold uppercase hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 kiosk-card balloon-cluster">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 uppercase">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-secondary bg-opacity-20 p-2 sm:p-3 rounded-xl">
                    <svg className="w-full h-5 sm:h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1 text-sm sm:text-base uppercase">Email</h3>
                    <p className="text-gray-700 text-sm sm:text-base">Business Email (Coming Soon)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-secondary bg-opacity-20 p-2 sm:p-3 rounded-xl">
                    <svg className="w-full h-5 sm:h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1 text-sm sm:text-base uppercase">Phone</h3>
                    <p className="text-gray-700 text-sm sm:text-base">(Coming Soon)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-secondary bg-opacity-20 p-2 sm:p-3 rounded-xl">
                    <svg className="w-full h-5 sm:h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1 text-sm sm:text-base uppercase">Office</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      600 1st Ave, Ste 102 – 2475 <br />
                      Seattle, WA 98104
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary rounded-2xl shadow-xl p-6 sm:p-8 kiosk-card">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 uppercase">Business Hours</h3>
              <p className="text-primary mb-2 font-medium text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-primary font-medium text-sm sm:text-base">Saturday - Sunday: Closed</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 kiosk-card">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 uppercase">Social Media</h3>
              <p className="text-gray-700 font-medium text-sm sm:text-base">Facebook | Instagram | TikTok | YouTube</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl shadow-xl p-8 text-center kiosk-card balloon-cluster">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase">
              Have Questions?
            </h2>
            
            <p className="text-lg text-white mb-6 font-medium">
              Our team is ready to assist you with any inquiries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg">
                Send Message
              </button>
              <button className="bg-white text-primary border-2 border-secondary px-8 py-4 rounded-full font-bold text-lg uppercase hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-lg">
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}