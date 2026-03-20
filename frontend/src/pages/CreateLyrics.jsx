import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Mic2, Copy, Download, Sparkles, Heart, Flame, Frown, PartyPopper } from 'lucide-react';

const categories = [
   { id: 'romantic', name: 'Romantic', icon: <Heart className="w-5 h-5" />, color: 'text-pink-500' },
   { id: 'rap', name: 'Rap', icon: <Flame className="w-5 h-5" />, color: 'text-orange-500' },
   { id: 'sad', name: 'Sad', icon: <Frown className="w-5 h-5" />, color: 'text-blue-400' },
   { id: 'party', name: 'Party', icon: <PartyPopper className="w-5 h-5" />, color: 'text-yellow-400' },
];

const mockGeneratedLyrics = `(Verse 1)
Neon lights are flashing in my eyes
We're running out of time, but that's alright
Got the bass thumping deep inside my chest
Leave your worries behind, forget the rest

(Chorus)
Cause tonight we're burning like a supernova
No we're never stopping till the night is over
Take my hand and let the rhythm take control
Nitro beats are pumping straight into my soul

(Drop)
Yeah!
Straight into my soul!
Let's go!`;

export function CreateLyrics() {
   const [prompt, setPrompt] = useState('');
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [isGenerating, setIsGenerating] = useState(false);
   const [generatedLyrics, setGeneratedLyrics] = useState('');
   const navigate = useNavigate();

   const handleGenerate = () => {
      if (!prompt && !selectedCategory) return;

      setIsGenerating(true);
      // Simulate API call
      setTimeout(() => {
         setGeneratedLyrics(mockGeneratedLyrics);
         setIsGenerating(false);
      }, 1500);
   };

   const handleSingThis = () => {
      navigate('/singer', { state: { lyrics: generatedLyrics } });
   };

   return (
      <div className="w-full max-w-5xl mx-auto py-10">
         <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
               <Sparkles className="w-8 h-8 text-[#b026ff]" />
               Create Lyrics
            </h1>
            <p className="text-gray-400 text-lg">Harness the AI to generate the perfect verses for your next track.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Section */}
            <div className="flex flex-col gap-6">
               <Card>
                  <CardContent className="pt-6">
                     <label className="block text-sm font-medium text-gray-300 mb-2">
                        What's the song about?
                     </label>
                     <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., A romantic sad song about leaving a neon city..."
                        className="input-field min-h-[120px] resize-none mb-6"
                     />

                     <label className="block text-sm font-medium text-gray-300 mb-3">
                        Or pick a vibe:
                     </label>
                     <div className="grid grid-cols-2 gap-3 mb-6">
                        {categories.map((cat) => (
                           <button
                              key={cat.id}
                              onClick={() => setSelectedCategory(cat.id)}
                              className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
                           selectedCategory === cat.id
                              ? 'border-[#b026ff] bg-[#b026ff]/10 hidden-outline'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                  >
                        <span className={cat.color}>{cat.icon}</span>
                        <span className="font-medium">{cat.name}</span>
                     </button>
                ))}
                  </div>

                  <Button
                     variant="primary"
                     className="w-full h-12 text-lg font-bold"
                     onClick={handleGenerate}
                     isLoading={isGenerating}
                     disabled={!prompt && !selectedCategory}
                  >
                     {isGenerating ? 'Generating Magic...' : 'Generate Lyrics'}
                  </Button>
               </CardContent>
            </Card>
         </div>

         {/* Output Section */}
         <div className="flex flex-col">
            <Card className="h-full flex flex-col">
               <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="text-lg font-semibold text-white">Generated Output</h3>
                     {generatedLyrics && (
                        <div className="flex gap-2">
                           <Button variant="ghost" size="icon" title="Copy">
                              <Copy className="w-4 h-4" />
                           </Button>
                           <Button variant="ghost" size="icon" title="Download">
                              <Download className="w-4 h-4" />
                           </Button>
                        </div>
                     )}
                  </div>

                  <div className="flex-grow bg-black/50 rounded-xl border border-white/5 p-4 min-h-[300px] mb-6">
                     {generatedLyrics ? (
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           className="whitespace-pre-line text-gray-200 leading-relaxed font-body"
                        >
                           {generatedLyrics}
                        </motion.div>
                     ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500">
                           <Sparkles className="w-10 h-10 mb-3 opacity-20" />
                           <p>Your lyrics will appear here</p>
                        </div>
                     )}
                  </div>

                  {generatedLyrics && (
                     <Button
                        variant="neonPink"
                        className="w-full h-14 text-lg font-bold gap-3 rounded-xl"
                        onClick={handleSingThis}
                     >
                        <Mic2 className="w-5 h-5" />
                        Sing This
                     </Button>
                  )}
               </CardContent>
            </Card>
         </div>
      </div>
    </div >
  );
}
