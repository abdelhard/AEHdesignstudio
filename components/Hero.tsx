
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          AEH Design Studio
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          3D Artist & Designer – Specialized in Architecture and Realistic Visualization
        </p>
        <a
          href="#portfolio"
          className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-cyan-600 transition-all duration-300 text-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
