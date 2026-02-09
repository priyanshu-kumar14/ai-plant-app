import React from 'react';
import { Check } from 'lucide-react';

const languages = [
  { id: 'hi', label: 'हिंदी', sub: 'Hindi' },
  { id: 'en', label: 'English', sub: 'English' },
  { id: 'ta', label: 'தமிழ்', sub: 'Tamil' },
  { id: 'te', label: 'తెలుగు', sub: 'Telugu' },
];

export const LanguageScreen = ({ onSelect }: { onSelect: (lang: string) => void }) => {
  return (
    <div className="h-full w-full bg-slate-50 p-6 flex flex-col">
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Select Your Language</h2>
        <p className="text-slate-500 mt-2">Choose your preferred language to continue</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => onSelect(lang.id)}
            className="bg-white p-6 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-500 hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group"
          >
            <span className="text-2xl font-bold text-slate-700 group-hover:text-emerald-700">{lang.label}</span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{lang.sub}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto text-center text-slate-400 text-sm py-4">
        You can change this later in settings
      </div>
    </div>
  );
};
