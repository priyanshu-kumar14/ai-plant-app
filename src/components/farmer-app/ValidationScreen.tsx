import React from 'react';
import { ChevronLeft, Check, RefreshCw, AlertTriangle } from 'lucide-react';

interface ValidationScreenProps {
  image: string;
  onRetake: () => void;
  onConfirm: () => void;
}

export const ValidationScreen = ({ image, onRetake, onConfirm }: ValidationScreenProps) => {
  return (
    <div className="h-full w-full bg-slate-900 flex flex-col">
      <div className="flex-1 relative">
        <img src={image} alt="Selected" className="w-full h-full object-contain bg-black" />
        
        <div className="absolute top-0 left-0 right-0 p-4 pt-12 bg-gradient-to-b from-black/60 to-transparent">
           <h2 className="text-white font-semibold text-center">Is the photo clear?</h2>
        </div>
      </div>

      <div className="bg-slate-900 p-6 pb-10">
        <div className="flex items-center gap-4 mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
          <p className="text-yellow-200 text-sm">Ensure the leaf disease is clearly visible and in focus for best results.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={onRetake}
            className="flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Retake
          </button>
          <button 
            onClick={onConfirm}
            className="flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
          >
            <Check className="w-5 h-5" />
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};
