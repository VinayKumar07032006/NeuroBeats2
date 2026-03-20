import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
   return (
      <footer className="bg-black/80 border-t border-white/10 mt-auto">
         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
               <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
                  <Link to="/" className="flex items-center gap-2 mb-4">
                     <Music className="text-[#b026ff] w-6 h-6" />
                     <span className="text-xl font-heading font-bold neon-text-purple">NitroBeats</span>
                  </Link>
                  <p className="text-gray-400 text-sm">
                     The AI-powered music and lyrics creation platform. Create, remix, and sing your next hit song in seconds.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-12 text-center md:text-left">
                  <div>
                     <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
                     <ul className="space-y-3">
                        <li><Link to="/create" className="text-sm text-gray-400 hover:text-white transition-colors">Create Lyrics</Link></li>
                        <li><Link to="/remix" className="text-sm text-gray-400 hover:text-white transition-colors">Remix AI</Link></li>
                        <li><Link to="/singer" className="text-sm text-gray-400 hover:text-white transition-colors">AI Singer</Link></li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
                     <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-[#b026ff] transition-colors">
                           <span className="sr-only">Twitter</span>
                           <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                           <span className="sr-only">Instagram</span>
                           <Instagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                           <span className="sr-only">GitHub</span>
                           <Github className="h-5 w-5" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8 flex items-center justify-between flex-col md:flex-row">
               <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} NitroBeats. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
