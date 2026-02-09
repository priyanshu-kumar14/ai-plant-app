import React from 'react';
import { Camera, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Camera className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-lg font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          LensAI
        </h1>
      </div>
      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
        <Menu className="w-6 h-6 text-white/80" />
      </button>
    </header>
  );
};
