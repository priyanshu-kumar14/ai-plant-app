import React from 'react';
import { motion } from 'motion/react';
import { 
  X, Share2, Info, Sparkles,Tag, 
  Palette, Box, ScanLine 
} from 'lucide-react';

interface ResultViewProps {
  imageSrc: string;
  onReset: () => void;
  isProcessing: boolean;
}

export const ResultView: React.FC<ResultViewProps> = ({ imageSrc, onReset, isProcessing }) => {
  return (
    <div className="relative h-full overflow-y-auto bg-black flex flex-col no-scrollbar">
      {/* Top Controls - Fixed/Sticky would be complex with scroll, so we just let them scroll away or put them fixed outside */}
      <div className="fixed top-0 left-0 right-0 z-30 p-4 flex justify-between items-start pt-safe-top pointer-events-none">
        <button 
          onClick={onReset}
          className="pointer-events-auto bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/60 transition-colors border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex gap-2 pointer-events-auto">
          <button className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/60 transition-colors border border-white/10">
            <Info className="w-6 h-6" />
          </button>
          <button className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/60 transition-colors border border-white/10">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-[55vh] shrink-0 bg-zinc-900 overflow-hidden sticky top-0">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={imageSrc} 
          alt="Selected" 
          className="w-full h-full object-cover"
        />
        
        {/* Scanning Overlay */}
        {isProcessing && (
          <motion.div 
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "reverse" 
            }}
            className="absolute left-0 right-0 h-1 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] z-20"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
      </div>

      {/* Analysis Results Sheet */}
      <motion.div 
        className="relative z-20 bg-black min-h-[50vh] -mt-12 rounded-t-3xl px-6 pt-8 pb-12 border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {/* Handle bar */}
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />

        {isProcessing ? (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 animate-pulse border border-white/5" />
              <div className="space-y-3 flex-1">
                <div className="h-5 bg-zinc-900 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-zinc-900 rounded w-1/2 animate-pulse" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 bg-zinc-900 rounded-2xl animate-pulse border border-white/5" />
              <div className="h-24 bg-zinc-900 rounded-2xl animate-pulse border border-white/5" />
            </div>
            <div className="h-32 bg-zinc-900 rounded-2xl animate-pulse border border-white/5" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Header Section */}
            <div className="flex items-start justify-between">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>AI ANALYSIS COMPLETE</span>
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Scenic Landscape
                </h2>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="bg-zinc-900 border border-white/10 px-2 py-0.5 rounded text-xs">IMG_4920.JPG</span>
                  <span>•</span>
                  <span>12.4 MB</span>
                </div>
              </div>
              
              <div className="radial-progress text-indigo-500 text-xs font-bold" style={{ "--value": 98, "--size": "3rem" } as any}>
                98%
              </div>
            </div>

            {/* Tags Scroll */}
            <div className="flex overflow-x-auto gap-2 pb-2 -mx-6 px-6 no-scrollbar">
              {['Nature', 'Mountain', 'Golden Hour', 'Sky', 'Forest', 'Travel', 'Adventure', 'Outdoor'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  className="shrink-0 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-4 py-2 rounded-xl text-sm font-medium border border-white/5 transition-colors"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900/50 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-32"
              >
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 mb-2">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-2">Palette</p>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full ring-2 ring-black bg-[#FF9A9E]" />
                    <div className="w-6 h-6 rounded-full ring-2 ring-black bg-[#FECFEF]" />
                    <div className="w-6 h-6 rounded-full ring-2 ring-black bg-[#2F2C59]" />
                    <div className="w-6 h-6 rounded-full ring-2 ring-black bg-[#283C86]" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-zinc-900/50 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-32"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-1">Dimensions</p>
                  <p className="text-white text-lg font-bold">4K<span className="text-zinc-500 text-sm font-normal ml-1">UHD</span></p>
                  <p className="text-zinc-600 text-xs">3840 x 2160 px</p>
                </div>
              </motion.div>
            </div>

            {/* Context Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4 text-zinc-300">
                <ScanLine className="w-5 h-5 text-indigo-500" />
                <span className="text-sm font-bold tracking-wider uppercase">Visual Context</span>
              </div>
              <p className="text-zinc-400 text-sm leading-7">
                The image exhibits strong <span className="text-white">dynamic range</span> with a focus on natural lighting. 
                Based on the color temperature and shadows, this was likely captured during 
                <span className="text-white"> golden hour</span> (approx. 6:30 PM). 
                The composition follows the rule of thirds with the horizon line positioned in the lower third.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/5 flex gap-4">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold transition-colors text-sm">
                  Export PDF
                </button>
                <button className="flex-1 bg-white hover:bg-zinc-200 text-black py-3 rounded-xl font-bold transition-colors text-sm">
                  Copy Text
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
