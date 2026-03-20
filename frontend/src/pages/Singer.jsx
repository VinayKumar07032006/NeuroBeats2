import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Play, Square, Pause, Mic2, Download, Settings2, Share2, Disc } from 'lucide-react';

const voices = [
   { id: 'melody', name: 'Melody (Pop)', color: 'border-pink-500', bg: 'bg-pink-500/10' },
   { id: 'rap', name: 'AI Rap (Hip-Hop)', color: 'border-orange-500', bg: 'bg-orange-500/10' },
   { id: 'male', name: 'Male (Rock/Alt)', color: 'border-blue-500', bg: 'bg-blue-500/10' },
   { id: 'female', name: 'Female (R&B)', color: 'border-purple-500', bg: 'bg-purple-500/10' },
];

export function Singer() {
   const location = useLocation();
   const [lyrics, setLyrics] = useState(location.state?.lyrics || '');
   const [selectedVoice, setSelectedVoice] = useState(voices[0].id);
   const [isGenerating, setIsGenerating] = useState(false);
   const [hasAudio, setHasAudio] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);
   const [progress, setProgress] = useState(0);

   const playIntervalRef = useRef(null);

   useEffect(() => {
      if (isPlaying) {
         playIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
               if (prev >= 100) {
                  setIsPlaying(false);
                  return 0;
               }
               return prev + 1;
            });
         }, 100);
      } else {
         clearInterval(playIntervalRef.current);
      }

      return () => clearInterval(playIntervalRef.current);
   }, [isPlaying]);

   const handleGenerate = () => {
      if (!lyrics) return;
      setIsGenerating(true);
      setTimeout(() => {
         setIsGenerating(false);
         setHasAudio(true);
         setProgress(0);
         setIsPlaying(false);
      }, 3000);
   };

   const togglePlay = () => {
      if (!hasAudio) return;
      setIsPlaying(!isPlaying);
   };

   const stopAudio = () => {
      setIsPlaying(false);
      setProgress(0);
   };

   return (
      <div className="w-full max-w-5xl mx-auto py-10">
         <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
               <Mic2 className="w-8 h-8 text-[#ff0055]" />
               Singer AI
            </h1>
            <p className="text-gray-400 text-lg">Bring your lyrics to life. Choose a voice, generate vocals, and listen.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Section */}
            <div className="flex flex-col gap-6">
               <Card>
                  <CardContent className="pt-6">
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Lyrics
                     </label>
                     <textarea
                        value={lyrics}
                        onChange={(e) => setLyrics(e.target.value)}
                        placeholder="Paste or write lyrics here to sing..."
                        className="input-field min-h-[300px] resize-none mb-6 font-body"
                     />

                     <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                        <Settings2 className="w-4 h-4" /> Select Voice Profile
                     </label>

                     <div className="grid grid-cols-2 gap-3 mb-6">
                        {voices.map((voice) => (
                           <button
                              key={voice.id}
                              onClick={() => setSelectedVoice(voice.id)}
                              className={`flex items-center justify-center p-3 rounded-xl border transition-all ${
                           selectedVoice === voice.id
                              ?`${voice.color} ${voice.bg} border-2 hidden-outline`
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                        <span className="font-medium">{voice.name}</span>
                     </button>
                ))}
                  </div>

                  <Button
                     variant="primary"
                     className="w-full h-14 text-lg font-bold bg-[#ff0055] hover:bg-[#e6004d] shadow-[0_0_15px_rgba(255,0,85,0.4)]"
                     onClick={handleGenerate}
                     isLoading={isGenerating}
                     disabled={!lyrics}
                  >
                     {isGenerating ? 'Synthesizing Vocals...' : 'Generate Song'}
                  </Button>
               </CardContent>
            </Card>
         </div>

         {/* Audio Player Section */}
         <div className="flex flex-col">
            <Card className="h-full flex flex-col items-center justify-center relative overflow-hidden">
               {/* Background decorative ring */}
               <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
               <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

               <CardContent className="pt-6 relative z-10 flex flex-col items-center w-full px-10">
                  <motion.div
                     className={`w-48 h-48 rounded-full flex items-center justify-center mb-8 border-4 border-white/10 shadow-2xl relative ${
                     hasAudio ? 'bg-gradient-to-tr from-[#ff0055] to-purple-600' : 'bg-white/5'
                  }`}
                  animate={{
                     rotate: isPlaying ? 360 : 0,
                     scale: isPlaying ? [1, 1.05, 1] : 1
                  }}
                  transition={{
                     rotate: { repeat: Infinity, duration: 10, ease: "linear" },
                     scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                  }}
              >
                  <div className="w-16 h-16 bg-black rounded-full border-2 border-white/20 flex items-center justify-center">
                     <Disc className="w-6 h-6 text-gray-400" />
                  </div>

                  {isPlaying && (
                     <div className="absolute inset-0 rounded-full border-2 border-[#00f0ff] animate-ping opacity-20" style={{ animationDuration: '2s' }} />
                  )}
               </motion.div>

               {!hasAudio ? (
                  <div className="text-center">
                     <h3 className="text-xl font-bold mb-2">No audio generated</h3>
                     <p className="text-gray-400 text-sm">Add some lyrics and generate your track</p>
                  </div>
               ) : (
                  <div className="w-full">
                     <h3 className="text-xl font-bold mb-1 text-center">NitroBeats Track #938</h3>
                     <p className="text-gray-400 text-sm text-center mb-6">AI Voice: {voices.find(v => v.id === selectedVoice)?.name}</p>

                     {/* Fake Audio Waveform */}
                     <div className="flex items-center gap-[2px] h-12 mb-4 justify-center overflow-hidden">
                        {[...Array(40)].map((_, i) => (
                           <motion.div
                              key={i}
                              className={`w-1.5 rounded-full ${i < (progress / 100) * 40 ? 'bg-[#ff0055]' : 'bg-white/20'}`}
                        animate={{
                           height: isPlaying ? Math.random() * 40 + 10 : 10
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                     </div>

                     {/* Progress Bar */}
                     <div className="w-full h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#ff0055] to-orange-500" style={{ width: `${progress}%` }} />
                     </div>

                     {/* Controls */}
                     <div className="flex items-center justify-center gap-4">
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={stopAudio}>
                           <Square className="w-5 h-5" fill="currentColor" />
                        </Button>

                        <Button
                           variant="primary"
                           size="icon"
                           className="w-14 h-14 rounded-full bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                           onClick={togglePlay}
                        >
                           {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                        </Button>

                        <Button variant="ghost" size="icon" className="rounded-full">
                           <Download className="w-5 h-5" />
                        </Button>
                     </div>
                  </div>
               )}
            </CardContent>
         </Card>
      </div>
      </div >
    </div >
  );
}
