
import React from 'react';
import { BLOG_POSTS_DATA } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Blog & News</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4">
            Insights on 3D, architecture, and the future of AI in design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
              <a href="#" className="block cursor-pointer">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                      <p className="text-cyan-400 text-sm font-medium">{post.category}</p>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="font-semibold text-cyan-500 group-hover:text-cyan-300 transition-colors duration-300">
                    Read More &rarr;
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
