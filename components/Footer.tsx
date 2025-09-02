
import React from 'react';
import { LinkedInIcon, BehanceIcon, InstagramIcon } from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors"><LinkedInIcon /></a>
          <a href="#" aria-label="Behance" className="hover:text-cyan-400 transition-colors"><BehanceIcon /></a>
          <a href="#" aria-label="Instagram" className="hover:text-cyan-400 transition-colors"><InstagramIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} AEH Design Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
