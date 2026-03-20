import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
   return (
      <div className="min-h-screen flex flex-col pt-20">
         <Navbar />
         <main className="flex-grow flex flex-col justify-start w-full mx-auto pb-10 px-4 sm:px-6 lg:px-8">
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
