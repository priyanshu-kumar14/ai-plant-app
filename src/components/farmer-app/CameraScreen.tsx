import React, { useRef, useState, useCallback } from 'react';
import { Camera, ChevronLeft, RefreshCw, Zap } from 'lucide-react';

interface CameraScreenProps {
  onBack: () => void;
  onCapture: (image: string) => void;
}

export const CameraScreen = ({ onBack, onCapture }: CameraScreenProps) => {
  const [isFlashOn, setIsFlashOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // In a real app we'd use navigator.mediaDevices.getUserMedia
  // For this mock, we'll just show a static image background to simulate camera
  
  const handleCapture = () => {
    // Return a mock captured image URL
    onCapture("https://images.unsplash.com/photo-1634641568774-1906553ade90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGxhbnQlMjBsZWFmJTIwZGlzZWFzZSUyMGNsb3NldXB8ZW58MXx8fHwxNzY5NTc3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080");
  };

  return (
    <div className="h-full w-full bg-black relative flex flex-col">
      {/* Simulated Camera Feed */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1675096732016-327d11651b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZ3JlZW4lMjBsZWFmJTIwY2xvc2V1cHxlbnwxfHx8fDE3Njk1Nzc3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Camera Feed" 
          className="w-full h-full object-cover opacity-80" 
        />
      </div>

      {/* Top Controls */}
      <div className="relative z-10 p-4 flex justify-between items-center pt-8 bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={onBack} className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
          <span className="text-white text-xs font-medium">Auto-Focus</span>
        </div>
        <button 
          onClick={() => setIsFlashOn(!isFlashOn)} 
          className={`p-2 rounded-full backdrop-blur-md transition-colors ${isFlashOn ? 'bg-yellow-500 text-black' : 'bg-black/20 text-white'}`}
        >
          <Zap className={`w-6 h-6 ${isFlashOn ? 'fill-black' : ''}`} />
        </button>
      </div>

      {/* Focus Area Overlay */}
      <div className="flex-1 relative z-10 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 border-2 border-white/50 rounded-2xl relative">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white -mt-1 -ml-1 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white -mt-1 -mr-1 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white -mb-1 -ml-1 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white -mb-1 -mr-1 rounded-br-lg" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/80 text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">Focus on Leaf</p>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 p-8 pb-12 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
        <div className="w-12" /> {/* Spacer */}
        <button 
          onClick={handleCapture}
          className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center p-1 group"
        >
          <div className="w-full h-full bg-white rounded-full group-active:scale-90 transition-transform" />
        </button>
        <button className="w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur-md flex items-center justify-center text-white">
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
