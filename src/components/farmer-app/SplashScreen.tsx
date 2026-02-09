import React, { useState, useEffect } from 'react';
import { Sprout } from 'lucide-react';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full w-full bg-emerald-50 flex flex-col items-center justify-center animate-in fade-in duration-700">
      <div className="bg-white p-6 rounded-full shadow-xl mb-6">
        <Sprout className="w-16 h-16 text-emerald-600" />
      </div>
      <h1 className="text-2xl font-bold text-emerald-900 tracking-tight">FarmGuard</h1>
      <p className="text-emerald-600 mt-2 font-medium">Plant Health Identification</p>
      
      <div className="absolute bottom-10 w-48 h-1 bg-emerald-200 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-600 animate-[progress_2s_ease-in-out_infinite]" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
};
