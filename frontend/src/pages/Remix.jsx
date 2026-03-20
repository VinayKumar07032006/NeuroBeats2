import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Mic2, Plus, Zap, Copy, Download, Trash2, Layers } from 'lucide-react';

const mockRemixedLyrics = `(Verse 1)
I took the romance and I turned it to fire
Left the sadness behind, climbing higher and higher
We combined the old verse with the new energy
Now the whole crowd is dancing, feeling so free

(Chorus)
Remixed the beat, remixed the soul
Taking the pieces and making them whole
Yeah, we're burning like a supernova tonight
Everything's changing, and everything's right!`;

export function Remix() {
   const [sources, setSources] = useState(['', '']);
   const [isRemixing, setIsRemixing] = useState(false);
   const [remixedLyrics, setRemixedLyrics] = useState('');
   const navigate = useNavigate();

   const handleAddSource = () => {
      setSources([...sources, '']);
   };

   const handleUpdateSource = (index, value) => {
      const newSources = [...sources];
      newSources[index] = value;
      setSources(newSources);
   };

   const handleRemoveSource = (index) => {
      if (sources.length <= 2) return;
      const newSources = sources.filter((_, i) => i !== index);
      setSources(newSources);
   };

   const handleRemix = () => {
      // Check if at least two sources have content
      const validSources = sources.filter(s => s.trim().length > 0);
      if (validSources.length < 2) return;

      setIsRemixing(true);
      setTimeout(() => {
         setRemixedLyrics(mockRemixedLyrics);
         setIsRemixing(false);
      }, 2000);
   };

   const handleSingThis = () => {
      navigate('/singer', { state: { lyrics: remixedLyrics } });
   };

   const canRemix = sources.filter(s => s.trim().length > 0).length >= 2;

   return (
      <div className="w-full max-w-5xl mx-auto py-10">
         <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
               <Layers className="w-8 h-8 text-[#00f0ff]" />
               Remix Lyrics
            </h1>
            <p className="text-gray-400 text-lg">Combine different verses, styles, or songs into something completely new.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Sources Section */}
            <div className="flex flex-col gap-4">
               {sources.map((source, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.2 }}
                  >
                     <Card>
                        <CardContent className="pt-4 pb-4">
                           <div className="flex justify-between items-center mb-2">
                              <label className="text-sm font-medium text-[#00f0ff]">
                                 Source {index + 1}
                              </label>
                              {sources.length > 2 && (
                                 <button
                                    onClick={() => handleRemoveSource(index)}
                                    className="text-gray-500 hover:text-red-400 transition-colors"
                                 >
                                    <Trash2 className="w-4 h-4" />
                                 </button>
                              )}
                           </div>
                           <textarea
                              value={source}
                              onChange={(e) => handleUpdateSource(index, e.target.value)}
                              placeholder={`Paste lyrics ${index + 1} here...`}
                           className="input-field min-h-[100px] resize-none"
                  />
                        </CardContent>
                     </Card>
                  </motion.div>
               ))}

               <Button
                  variant="secondary"
                  className="w-full border-dashed border-2 py-6 gap-2 text-gray-300 hover:text-white"
                  onClick={handleAddSource}
               >
                  <Plus className="w-5 h-5" />
                  Add Another Source
               </Button>

               <Button
                  variant="primary"
                  className="w-full h-14 mt-4 text-lg font-bold gap-2 bg-[#00f0ff] hover:bg-[#00d5e6] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  onClick={handleRemix}
                  isLoading={isRemixing}
                  disabled={!canRemix}
               >
                  {isRemixing ? 'Blending Vibes...' : (
                     <>
                        <Zap className="w-5 h-5" />
                        Remix Lyrics
                     </>
                  )}
               </Button>
            </div>

            {/* Output Section */}
            <div className="flex flex-col">
               <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                     <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">Remixed Output</h3>
                        {remixedLyrics && (
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
                        {remixedLyrics ? (
                           <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="whitespace-pre-line text-gray-200 leading-relaxed font-body"
                           >
                              {remixedLyrics}
                           </motion.div>
                        ) : (
                           <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center px-6">
                              <Layers className="w-10 h-10 mb-3 opacity-20" />
                              <p>Add at least 2 sources and hit Remix to see the magic happen</p>
                           </div>
                        )}
                     </div>

                     {remixedLyrics && (
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
      </div>
   );
}
