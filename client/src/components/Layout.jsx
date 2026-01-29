import React from 'react';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>
      <header className="z-10 border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="oswald text-2xl font-bold uppercase tracking-widest star-wars-yellow">
              Galactic <span className="text-white">Archive</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wider text-gray-400">
            <span className="hover:text-star-wars-yellow cursor-pointer transition-colors">Characters</span>
            <span className="hover:text-star-wars-yellow cursor-pointer transition-colors">Planets</span>
            <span className="hover:text-star-wars-yellow cursor-pointer transition-colors">Starships</span>
          </div>
        </div>
      </header>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};
export default Layout;
