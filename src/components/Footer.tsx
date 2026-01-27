import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-800/50 py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-1.5 mb-3 md:mb-0">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span className="text-sm sm:text-base font-bold text-white">DevPortfolio</span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by a passionate Full Stack Developer</span>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800/50 text-center">
          <p className="text-gray-400 text-xs">
            © 2026 Full Stack Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;