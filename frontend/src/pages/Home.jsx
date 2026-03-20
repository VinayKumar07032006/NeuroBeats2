import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Music, Mic2, Cpu, Edit3, ArrowRight, Zap, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
   {
      title: 'Lyrics AI',
      description: 'Generate meaningful, emotional, or energetic lyrics powered by advanced AI models.',
      icon: <Edit3 className="w-8 h-8 text-[#b026ff]" />,
   },
   {
      title: 'Remix AI',
      description: 'Combine different verses, change the vibe, and rewrite existing songs instantly.',
      icon: <Zap className="w-8 h-8 text-[#00f0ff]" />,
   },
   {
      title: 'Singer AI',
      description: 'Bring your lyrics to life with realistic AI voices ranging from melodic to rap styles.',
      icon: <Mic2 className="w-8 h-8 text-[#ff0055]" />,
   },
   {
      title: 'Pro Editor',
      description: 'Fine-tune every line with our rich text editor built for musicians and lyricists.',
      icon: <Cpu className="w-8 h-8 text-white" />,
   },
];

const steps = [
   { step: '01', title: 'Write or Generate', desc: 'Input your prompt or use our predefined templates to generate fresh lyrics.' },
   { step: '02', title: 'Refine & Edit', desc: 'Use the editor or the remix tool to perfect the flow, rhyming, and structure.' },
   { step: '03', title: 'Sing it loud', desc: 'Send your final lyrics to the Singer AI and hear your brand new track come alive.' },
];

export function Home() {
   return (
      <div className="flex flex-col gap-20 py-10 w-full max-w-7xl mx-auto">
         {/* Hero Section */}
         <section className="flex flex-col items-center justify-center text-center mt-10 md:mt-20">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center rounded-full px-3 py-1 mb-8 text-sm border border-white/10 bg-white/5 backdrop-blur-sm"
            >
               <span className="flex h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse mr-2" />
               NitroBeats AI Engine v2.0 is live
            </motion.div>

            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-5xl md:text-7xl font-heading font-black tracking-tight mb-6"
            >
               <span className="block text-white">Create. Remix.</span>
               <span className="block neon-text-purple bg-clip-text text-transparent bg-gradient-to-r from-[#b026ff] to-[#00f0ff]">
                  Sing.
               </span>
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
            >
               The ultimate AI-powered music platform. Turn your raw emotions into hit tracks with state-of-the-art lyric generation and vocal synthesis.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-4 justify-center"
            >
               <Link to="/create">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                     <Edit3 className="w-5 h-5" />
                     Create Lyrics
                  </Button>
               </Link>
               <Link to="/remix">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                     <Zap className="w-5 h-5" />
                     Remix Now
                  </Button>
               </Link>
               <Link to="/singer">
                  <Button variant="neonBlue" size="lg" className="w-full sm:w-auto gap-2 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/50 hover:bg-[#00f0ff]/20 shadow-none">
                     <Play className="w-5 h-5" />
                     Try Singer
                  </Button>
               </Link>
            </motion.div>
         </section>

         {/* Features Section */}
         <section className="mt-10">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Unleash Your Creativity</h2>
               <p className="text-gray-400">Everything you need to produce a banger from scratch.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {features.map((feature, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                  >
                     <Card className="h-full hover:-translate-y-2 transition-transform duration-300">
                        <CardHeader>
                           <div className="mb-4 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10">
                              {feature.icon}
                           </div>
                           <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <CardDescription>{feature.description}</CardDescription>
                        </CardContent>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* How it works Section */}
         <section className="mt-10 mb-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#b026ff]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-[#00f0ff]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
               <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
               <p className="text-gray-400">Three simple steps to your first hit</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
               {steps.map((step, idx) => (
                  <div key={idx} className="relative flex flex-col items-center text-center">
                     {idx !== steps.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-white/20 to-transparent" />
                     )}
                     <div className="w-20 h-20 rounded-full bg-black border border-[#b026ff]/50 flex items-center justify-center text-2xl font-black neon-text-purple mb-6 shadow-[0_0_30px_rgba(176,38,255,0.2)]">
                        {step.step}
                     </div>
                     <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
               ))}
            </div>

            <div className="mt-16 text-center relative z-10">
               <Link to="/create">
                  <Button variant="primary" className="rounded-full px-8">
                     Start Creating Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
               </Link>
            </div>
         </section>
      </div>
   );
}
