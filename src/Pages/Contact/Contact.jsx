import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We're here to help! Reach out with any questions, concerns, or feedback.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-700">
              Our team is available to assist you with any inquiries. Feel free to contact us directly or fill out the form, and we’ll get back to you as soon as possible.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address:</h3>
              <p className="text-gray-700">24, Opposite metro station<br />Noida, 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone:</h3>
              <p className="text-gray-700">+91 99950432</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email:</h3>
              <p className="text-gray-700">support@urbanedge.com</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2 font-semibold">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-semibold">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your email address" 
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-semibold">Message</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your message" 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
