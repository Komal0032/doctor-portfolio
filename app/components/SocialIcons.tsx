import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function SocialIcons() {
  return (
    <div className="flex flex-col items-center bg-[#006666] py-12 px-4">
      {/* Container for the Icons */}
      <div className="flex gap-6 justify-center items-center">
        
        {/* Facebook Icon */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 
                     rounded-full border border-white/20 bg-white/10 
                     backdrop-blur-md transition-all duration-500
                     hover:border-white/50 hover:bg-white/30 hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-white/20 transition-opacity duration-500" />
          <Facebook size={22} strokeWidth={1.5} className="text-white z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Instagram Icon */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 
                     rounded-full border border-white/20 bg-white/10 
                     backdrop-blur-md transition-all duration-500
                     hover:border-white/50 hover:bg-white/30 hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-white/20 transition-opacity duration-500" />
          <Instagram size={22} strokeWidth={1.5} className="text-white z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Youtube Icon */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 
                     rounded-full border border-white/20 bg-white/10 
                     backdrop-blur-md transition-all duration-500
                     hover:border-white/50 hover:bg-white/30 hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-white/20 transition-opacity duration-500" />
          <Youtube size={22} strokeWidth={1.5} className="text-white z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
        </a>

      </div>

      {/* The thin divider line from your photo */}
      <div className="w-full max-w-4xl border-t border-white/10 mt-10" />
    </div>
  );
}