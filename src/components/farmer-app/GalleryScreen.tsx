import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface GalleryScreenProps {
  onBack: () => void;
  onSelect: (image: string) => void;
}

const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1634641568774-1906553ade90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGxhbnQlMjBsZWFmJTIwZGlzZWFzZSUyMGNsb3NldXB8ZW58MXx8fHwxNzY5NTc3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1675096732016-327d11651b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZ3JlZW4lMjBsZWFmJTIwY2xvc2V1cHxlbnwxfHx8fDE3Njk1Nzc3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1591088463897-48f541249767?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1628189437146-24b7a134a66d?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&q=80&w=300",
];

export const GalleryScreen = ({ onBack, onSelect }: GalleryScreenProps) => {
  return (
    <div className="h-full w-full bg-slate-50 flex flex-col">
      <div className="bg-white p-4 shadow-sm flex items-center gap-4 pt-12">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>
        <h2 className="text-xl font-bold text-slate-800">Select Image</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {SAMPLE_IMAGES.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(img)}
              className="aspect-square rounded-xl overflow-hidden shadow-sm border-2 border-transparent hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all group relative"
            >
              <img src={img} alt={`Sample ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
