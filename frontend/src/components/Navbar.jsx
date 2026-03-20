import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Mic2, Edit3, Fingerprint, Layers, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

export function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();

   const navLinks = [
      { name: 'Home', path: '/', icon: <Music className="w-4 h-4 mr-2" /> },
      { name: 'Create Lyrics', path: '/create', icon: <Edit3 className="w-4 h-4 mr-2" /> },
      { name: 'Remix', path: '/remix', icon: <Layers className="w-4 h-4 mr-2" /> },
      { name: 'Edit', path: '/edit', icon: <Edit3 className="w-4 h-4 mr-2" /> },
      { name: 'Singer', path: '/singer', icon: <Mic2 className="w-4 h-4 mr-2" /> },
   ];

   return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
               <div className="flex items-center">
                  <Link to="/" className="flex items-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#b026ff] to-[#00f0ff] flex items-center justify-center p-[2px]">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                           <Music className="text-white w-5 h-5" />
                        </div>
                     </div>
                     <span className="text-2xl font-heading font-bold neon-text-purple tracking-wider">
                        NitroBeats
                     </span>
                  </Link>
               </div>

               <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
                     {navLinks.map((link) => (
                        <Link
                           key={link.path}
                           to={link.path}
                           className={cn(
                              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-white hover:bg-white/5",
                              location.pathname === link.path
                                 ? "text-white bg-white/10 shadow-[inset_0_-2px_0_#b026ff]"
                                 : "text-gray-300"
                           )}
                        >
                           {link.icon}
                           {link.name}
                        </Link>
                     ))}
                  </div>
               </div>

               <div className="hidden md:block">
                  <Link to="/auth">
                     <Button variant="secondary" className="gap-2 rounded-full px-6">
                        <Fingerprint className="w-4 h-4" />
                        Sign In
                     </Button>
                  </Link>
               </div>

               <div className="-mr-2 flex md:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none"
                  >
                     {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile menu */}
         {isOpen && (
            <div className="md:hidden bg-[#0a0a0a] border-b border-white/10">
               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                     <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                           "flex items-center px-3 py-3 rounded-md text-base font-medium",
                           location.pathname === link.path
                              ? "text-white bg-[#b026ff]/20"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                        )}
                     >
                        {link.icon}
                        {link.name}
                     </Link>
                  ))}
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                     <Button variant="primary" className="w-full mt-4 justify-center">
                        Sign In
                     </Button>
                  </Link>
               </div>
            </div>
         )}
      </nav>
   );
}
