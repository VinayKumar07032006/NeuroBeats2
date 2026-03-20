import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Mic2, Bold, Italic, AlignLeft, AlignCenter, AlignRight, Save, Download, Edit3 } from 'lucide-react';

export function Edit() {
   const [content, setContent] = useState(`[Verse 1]\nWalking down this empty street\nNothing but the sound of my own feet\nEchoes bounding off the walls\nWaiting for a voice that never calls\n\n[Chorus]\nOh, the silence is so loud\nStanding lonely in the crowd\nIf I could just find my way back home\nI wouldn't have to walk alone\n\n[Bridge]\nEvery step is getting heavier\nEvery shadow getting longer\nBut I know I gotta keep on moving\nTo make this spirit stronger`);
   const [align, setAlign] = useState('left');
   const navigate = useNavigate();

   const handleSingThis = () => {
      navigate('/singer', { state: { lyrics: content } });
   };

   return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold mb-2 flex items-center gap-3 text-white">
            <Edit3 className="w-8 h-8 text-white" />
            Pro Editor
          </h1>
          <p className="text-gray-400">Fine-tune your lyrics, adjust the structure, and perfect the flow.</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <Save className="w-4 h-4" /> Save
          </Button>
          <Button variant="secondary" className="gap-2">
            <Download className="w-4 h-4" /> Export
          </Button>
          <Button variant="neonPink" className="gap-2 font-bold" onClick={handleSingThis}>
            <Mic2 className="w-4 h-4" /> Sing This
          </Button>
        </div>
      </div>

      <Card className="border border-white/10 shadow-2xl overflow-hidden bg-[#111]">
        {/* Editor Toolbar */}
        <div className="bg-[#1a1a1a] border-b border-white/10 p-3 flex flex-wrap gap-2 items-center">
          <div className="flex bg-black/50 rounded-lg p-1 border border-white/5">
            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors" title="Bold">
              <Bold className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors" title="Italic">
              <Italic className="w-4 h-4" />
            </button>
          </div>
          
          <div className="w-px h-6 bg-white/10 mx-1"></div>
          
          <div className="flex bg-black/50 rounded-lg p-1 border border-white/5">
            <button 
              className={`p-2 rounded transition-colors ${align === 'left' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              onClick={() => setAlign('left')}
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button 
              className={`p-2 rounded transition-colors ${align === 'center' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              onClick={() => setAlign('center')}
            >
              <AlignCenter className="w-4 h-4" />
            </button>
            <button 
              className={`p-2 rounded transition-colors ${align === 'right' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              onClick={() => setAlign('right')}
            >
              <AlignRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="w-px h-6 bg-white/10 mx-1"></div>
          
          <Button variant="ghost" size="sm" className="text-xs">Add Verse</Button>
          <Button variant="ghost" size="sm" className="text-xs">Add Chorus</Button>
          <Button variant="ghost" size="sm" className="text-xs">Add Bridge</Button>
        </div >

      <CardContent className="p-0">
         <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
            {/* Plain Text Input */}
            <div className="border-r border-white/5 bg-[#0d0d0d] p-0 relative group">
               <div className="absolute top-3 right-3 text-xs text-gray-600 font-mono tracking-widest font-bold uppercase pointer-events-none select-none">
                  EDIT
               </div>
               <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-full min-h-[600px] bg-transparent resize-none p-8 text-gray-300 font-body text-base leading-loose focus:outline-none focus:ring-0 placeholder-gray-600"
                  spellCheck="false"
               />
            </div>

            {/* Formatted Preview */}
            <div className="bg-[#151515] p-8 relative overflow-y-auto max-h-[600px] custom-scrollbar">
               <div className="absolute top-3 right-3 text-xs text-gray-600 font-mono tracking-widest font-bold uppercase pointer-events-none select-none">
                  PREVIEW
               </div>
               <div
                  className={`text-lg text-gray-200 leading-relaxed max-w-lg mx-auto whitespace-pre-line font-body ${
                  align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
               }`}
              >
               {content.split('\\n').map((line, i) => {
                  // Extremely basic parsing for bracket tags
                  if (line.trim().startsWith('[') && line.trim().endsWith(']')) {
                     return <span key={i} className="block mt-6 mb-2 text-sm font-bold text-[#b026ff] tracking-widest uppercase">{line}</span>;
                  }
                  return <span key={i} className="block">{line}</span>;
               })}
            </div>
         </div>
      </div>
        </CardContent >
      </Card >

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2); 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2); 
        }
      `}} />
    </div>
  );
}
