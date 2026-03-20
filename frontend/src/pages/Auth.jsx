import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { User, Lock, Mail, Github } from 'lucide-react';

export function Auth() {
   const [isLogin, setIsLogin] = useState(true);

   return (
      <div className="w-full max-w-md mx-auto py-20">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
         >
            <Card className="border border-white/10 shadow-2xl relative overflow-hidden">
               {/* Decorative glow */}
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-[#b026ff]/30 rounded-full blur-3xl" />
               <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-[#00f0ff]/30 rounded-full blur-3xl" />

               <CardContent className="p-8 pt-10 relative z-10">
                  <div className="text-center mb-8">
                     <h1 className="text-3xl font-heading font-bold neon-text-purple mb-2">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                     </h1>
                     <p className="text-gray-400">
                        {isLogin ? 'Sign in to access your saved lyrics and tracks.' : 'Join NitroBeats and start creating today.'}
                     </p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                     {!isLogin && (
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-500" />
                           </div>
                           <input
                              type="text"
                              className="input-field pl-10"
                              placeholder="Full Name"
                              required
                           />
                        </div>
                     )}

                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Mail className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                           type="email"
                           className="input-field pl-10"
                           placeholder="Email Address"
                           required
                        />
                     </div>

                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Lock className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                           type="password"
                           className="input-field pl-10"
                           placeholder="Password"
                           required
                        />
                     </div>

                     <Button variant="primary" className="w-full mt-2 h-12 text-lg">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                     </Button>
                  </form>

                  <div className="mt-6 flex items-center justify-between">
                     <span className="border-b border-white/10 w-1/5 lg:w-1/4"></span>
                     <span className="text-xs text-center text-gray-500 uppercase">or continue with</span>
                     <span className="border-b border-white/10 w-1/5 lg:w-1/4"></span>
                  </div>

                  <div className="mt-6">
                     <Button variant="secondary" className="w-full flex items-center justify-center gap-2 h-11 border-white/10">
                        <Github className="w-5 h-5" /> GitHub
                     </Button>
                  </div>

                  <p className="mt-8 text-center text-sm text-gray-400">
                     {isLogin ? "Don't have an account? " : "Already have an account? "}
                     <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-[#00f0ff] hover:text-[#00d5e6] font-medium transition-colors focus:outline-none focus:underline"
                     >
                        {isLogin ? 'Sign up' : 'Sign in'}
                     </button>
                  </p>
               </CardContent>
            </Card>
         </motion.div>
      </div>
   );
}
