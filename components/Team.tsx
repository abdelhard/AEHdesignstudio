
import React from 'react';
import { TEAM_DATA } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Team</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4">
            The creative minds behind our stunning visuals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <div key={member.id} className="bg-gray-900 rounded-lg shadow-lg text-center p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gray-700"
              />
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
