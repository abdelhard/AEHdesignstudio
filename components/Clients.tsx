
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Clients & Testimonials</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-center text-2xl font-semibold text-gray-300 mb-8">Proud to have worked with</h3>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="text-4xl font-bold text-gray-400 tracking-widest">PLOGG</div>
            <div className="text-4xl font-bold text-gray-400 tracking-widest">OCF</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="text-right">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-cyan-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
