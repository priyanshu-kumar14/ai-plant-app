import React, { useEffect, useState } from 'react';
import { Loader2, Sparkles, AlertCircle, Play, Save, Home, Share2 } from 'lucide-react';

interface AnalysisScreenProps {
  image: string;
  onHome: () => void;
  onSave: (data: any) => void;
}

export const AnalysisScreen = ({ image, onHome, onSave }: AnalysisScreenProps) => {
  const [stage, setStage] = useState<'analyzing' | 'result'>('analyzing');

  useEffect(() => {
    // Simulate AI delay
    const timer = setTimeout(() => {
      setStage('result');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (stage === 'analyzing') {
    return (
      <div className="h-full w-full bg-slate-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <img src={image} alt="Analyzing" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
            <div className="w-24 h-24 bg-slate-800 rounded-2xl border border-emerald-500/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/10"></div>
              <div className="absolute top-0 w-full h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] animate-[scan_2s_linear_infinite]"></div>
              <Sparkles className="w-10 h-10 text-emerald-400" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-2">Analyzing...</h2>
          <p className="text-slate-400 text-center max-w-xs">Scanning leaf patterns and comparing with disease database.</p>
        </div>
      </div>
    );
  }

  const resultData = {
    plant: "Rice (Paddy)",
    disease: "Leaf Blight",
    severity: "Moderate",
    cause: "Bacterial Infection (Xanthomonas oryzae)",
    confidence: 94
  };

  return (
    <div className="h-full w-full bg-slate-50 flex flex-col overflow-y-auto">
      {/* Header Image */}
      <div className="h-64 relative shrink-0">
        <img src={image} alt="Analyzed" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md">94% MATCH</span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md">AI VERIFIED</span>
          </div>
          <h1 className="text-3xl font-bold text-white">{resultData.disease}</h1>
          <p className="text-slate-300 font-medium">Detected in {resultData.plant}</p>
        </div>
      </div>

      <div className="flex-1 p-6 -mt-6 relative z-10 bg-slate-50 rounded-t-3xl">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Severity</p>
            <p className="text-amber-600 font-bold text-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> {resultData.severity}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Cause</p>
            <p className="text-slate-800 font-bold text-lg truncate" title={resultData.cause}>Bacteria</p>
          </div>
        </div>

        {/* Audio / Solution Actions */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold shadow-lg shadow-emerald-200 transition-all active:scale-95">
            Get Solution
          </button>
          <button className="flex items-center justify-center gap-2 px-6 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-3 rounded-xl font-semibold transition-colors">
            <Play className="w-5 h-5 fill-slate-700" />
            Listen
          </button>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-3 text-lg">Treatment & Prevention</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-emerald-700 font-bold text-xs">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 text-sm">Spray Copper Oxychloride</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Apply 500g/ha mixed with water immediately to control spread.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-emerald-700 font-bold text-xs">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 text-sm">Improve Drainage</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Drain field water for 3-4 days to reduce humidity levels.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex gap-3 pb-8">
            <button 
              onClick={() => onSave({ ...resultData, image, date: new Date().toISOString() })}
              className="flex-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Save className="w-5 h-5" />
              Save Record
            </button>
            <button 
              onClick={onHome}
              className="px-6 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl flex items-center justify-center transition-colors"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
