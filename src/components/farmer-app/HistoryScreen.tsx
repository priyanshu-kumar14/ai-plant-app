import React from 'react';
import { ChevronLeft, Calendar, ChevronRight } from 'lucide-react';

interface HistoryScreenProps {
  onBack: () => void;
  items: Array<{
    id: string;
    plant: string;
    disease: string;
    date: string;
    image: string;
  }>;
}

export const HistoryScreen = ({ onBack, items }: HistoryScreenProps) => {
  return (
    <div className="h-full w-full bg-slate-50 flex flex-col">
      <div className="bg-white p-4 shadow-sm flex items-center gap-4 pt-12 z-10">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>
        <h2 className="text-xl font-bold text-slate-800">Crop History</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <Calendar className="w-12 h-12 mb-3 opacity-20" />
            <p>No records found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 group">
                <img src={item.image} alt={item.disease} className="w-16 h-16 rounded-lg object-cover bg-slate-100" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-800">{item.disease}</h3>
                    <span className="text-xs text-slate-400">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium">{item.plant}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
