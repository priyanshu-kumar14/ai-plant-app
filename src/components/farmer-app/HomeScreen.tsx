import { Camera, Image as ImageIcon, History, Settings, ChevronRight, Sprout, Mic, X, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  lang: string;
  history: Array<{
    id: string;
    plant: string;
    disease: string;
    date: string;
    image: string;
  }>;
}

export const HomeScreen = ({ onNavigate, lang, history }: HomeScreenProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    setIsListening(true);
    setTranscript("Listening...");
    
    // Simulate voice recognition
    setTimeout(() => {
      setTranscript("Take a photo");
      setTimeout(() => {
        setIsListening(false);
        onNavigate('CAMERA');
        setTranscript("");
      }, 1000);
    }, 2000);
  };

  const recentItems = history.slice(0, 3);

  return (
    <div className="h-full w-full bg-slate-50 flex flex-col relative">
      {/* Voice Overlay */}
      {isListening && (
        <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200">
          <button 
            onClick={() => setIsListening(false)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-40 animate-pulse" />
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center relative z-10 animate-bounce">
              <Mic className="w-10 h-10 text-white" />
            </div>
            {/* Ripple effect rings */}
            <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{transcript}</h3>
          <p className="text-emerald-200/60">Try saying "Take a photo" or "Open Gallery"</p>
        </div>
      )}

      {/* Header */}
      <div className="bg-emerald-600 pt-12 pb-24 px-6 rounded-b-[2.5rem] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-emerald-100 text-sm font-medium">Welcome back,</p>
            <h1 className="text-white text-2xl font-bold">Farmer Joy</h1>
          </div>
          <button className="bg-emerald-500/50 p-2 rounded-full backdrop-blur-sm text-white hover:bg-emerald-500 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Actions Card */}
      <div className="-mt-16 px-6 relative z-10">
        <div className="bg-white rounded-3xl p-2 shadow-xl shadow-emerald-900/5">
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => onNavigate('CAMERA')}
              className="bg-emerald-50 hover:bg-emerald-100 p-6 rounded-2xl flex flex-col items-center gap-3 transition-colors group"
            >
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                <Camera className="w-7 h-7" />
              </div>
              <span className="font-semibold text-emerald-900">Take Photo</span>
            </button>
            <button 
              onClick={() => onNavigate('GALLERY')}
              className="bg-emerald-50 hover:bg-emerald-100 p-6 rounded-2xl flex flex-col items-center gap-3 transition-colors group"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-7 h-7" />
              </div>
              <span className="font-semibold text-emerald-900">Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 flex-1 overflow-y-auto pb-24">
        {/* Recent History Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-800 font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-emerald-600" />
              Crop History
            </h3>
            <button 
              onClick={() => onNavigate('HISTORY')}
              className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg"
            >
              View All
            </button>
          </div>

          <div className="space-y-3">
            {recentItems.length > 0 ? (
              recentItems.map((item) => (
                <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <img src={item.image} alt={item.disease} className="w-12 h-12 rounded-lg object-cover bg-slate-100" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm truncate">{item.disease}</h4>
                    <p className="text-xs text-slate-500 truncate">{new Date(item.date).toLocaleDateString()} • {item.plant}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-xl border border-dashed border-slate-200 text-center">
                <p className="text-slate-400 text-sm">No recent scans</p>
              </div>
            )}
          </div>
        </div>
          
        {/* Farming Tips (Moved to bottom) */}
        <div className="w-full bg-emerald-900 rounded-xl p-5 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="font-bold text-lg mb-1">Farming Tips</h4>
            <p className="text-emerald-200 text-sm max-w-[70%]">Learn how to protect your crops from seasonal diseases.</p>
            <button className="mt-3 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg backdrop-blur-md transition-colors">
              Read More
            </button>
          </div>
          <Sprout className="absolute -bottom-4 -right-4 w-32 h-32 text-emerald-800/50" />
        </div>
      </div>

      {/* Voice Command FAB */}
      <button
        onClick={startListening}
        className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center text-white z-40 hover:scale-105 transition-transform active:scale-95"
      >
        <Mic className="w-8 h-8" />
      </button>
    </div>
  );
};
