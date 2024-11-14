import React from 'react';

const agents = [
  {
    name: 'Arjun Mehta',
    specialty: 'Residential Properties',
    phone: '+91 98765 43210',
    email: 'arjun.mehta@urbanedge.in',
  },
  {
    name: 'Priya Sharma',
    specialty: 'Commercial Spaces',
    phone: '+91 91234 56789',
    email: 'priya.sharma@urbanedge.in',
  },
  {
    name: 'Rahul Verma',
    specialty: 'Luxury Real Estate',
    phone: '+91 98123 45678',
    email: 'rahul.verma@urbanedge.in',
  },
  {
    name: 'Sneha Kapoor',
    specialty: 'Rental Properties',
    phone: '+91 99887 76543',
    email: 'sneha.kapoor@urbanedge.in',
  },
];

const Agents = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Meet Our Agents
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              
              <h2 className="text-xl font-semibold text-gray-800">{agent.name}</h2>
              <p className="text-gray-600 mb-4">{agent.specialty}</p>
              <p className="text-gray-700">
                <span className="font-semibold">Phone:</span> {agent.phone}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> <a href={`mailto:${agent.email}`} className="text-blue-600 hover:underline">{agent.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
