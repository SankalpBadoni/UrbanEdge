import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          About UrbanEdge
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Your Partner in Finding the Perfect Space
        </p>
        
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-gray-800">UrbanEdge</span>, a place where your property dreams take shape. Our goal is simple: to bridge the gap between people and properties in the most seamless and efficient way possible. Whether you're buying, selling, or simply exploring the market, UrbanEdge is here to provide personalized, data-driven insights tailored to your needs.
          </p>
          
          <p>
            Founded with a passion for real estate, we’re dedicated to helping individuals and families find their perfect spaces. With a focus on transparency, reliability, and accessibility, our platform is designed to connect you with properties that truly meet your lifestyle and budget.
          </p>
          
          <p>
            At <span className="font-semibold text-gray-800">UrbanEdge</span>, we utilize the latest technology to offer a comprehensive property search experience. Our interactive map features, virtual tours, and robust filtering options allow you to explore neighborhoods and properties at your convenience.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8">
            Why Choose Us?
          </h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              <span className="font-semibold">User-Friendly Experience:</span> Intuitive design and powerful tools make it easy to find the ideal property.
            </li>
            <li>
              <span className="font-semibold">Trusted Listings:</span> Our listings are verified to ensure authenticity and up-to-date information.
            </li>
            <li>
              <span className="font-semibold">Expert Support:</span> Our team of experts is available to assist you every step of the way.
            </li>
          </ul>

          <p className="mt-8">
            Whether you’re looking for a cozy apartment in the heart of the city, a spacious suburban home, or a commercial property for your business, UrbanEdge is here to make the journey smooth and successful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
