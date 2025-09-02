
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://picsum.photos/seed/portrait/500/500" 
              alt="Artist Portrait" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 text-gray-300 text-lg leading-relaxed">
            <p className="mb-4">
              Hello! I'm a passionate 3D Artist and Designer with a deep focus on architectural visualization. My expertise lies in crafting hyper-realistic renderings of interiors, exteriors, and furniture, transforming concepts into compelling visual stories.
            </p>
            <p className="mb-4">
              With a background in both art and technology, I've had the privilege of collaborating on exciting projects with international firms like <span className="text-cyan-400 font-semibold">PLOGG (Canada)</span> and <span className="text-cyan-400 font-semibold">OCF (France)</span>. These experiences have honed my skills in creating high-impact visuals that meet professional standards and client expectations.
            </p>
            <p>
              My passion extends beyond just creating images; it's about understanding the soul of a design and bringing it to life. Whether it's the play of light in a room or the texture of a material, I strive for perfection in every detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
