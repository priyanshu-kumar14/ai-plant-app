import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  const triggerSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] p-6 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div 
          onClick={triggerSelect}
          className="group relative border-2 border-dashed border-white/20 hover:border-indigo-500/50 rounded-3xl p-10 cursor-pointer transition-all duration-300 hover:bg-white/5 bg-white/5 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Upload Photo</h3>
              <p className="text-sm text-zinc-400">
                Tap to select from gallery or capture
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button 
            onClick={triggerSelect}
            className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl font-medium transition-colors border border-white/5"
          >
            <ImageIcon className="w-5 h-5 text-indigo-400" />
            Gallery
          </button>
          <button 
            onClick={triggerSelect}
            className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl font-medium transition-colors border border-white/5"
          >
            <Camera className="w-5 h-5 text-purple-400" />
            Camera
          </button>
        </div>
      </motion.div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        capture="environment"
      />
    </div>
  );
};
