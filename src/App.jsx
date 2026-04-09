import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Achievements from './pages/Achievements';
import Resume from './pages/Resume';
import { data } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activePage, setActivePage] = useState('About');

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'cyber' : 'light');

  const renderPage = () => {
    switch (activePage) {
      case 'About': return <About theme={theme} data={data} />;
      case 'Portfolio': return <Portfolio theme={theme} data={data} />;
      case 'Achievements': return <Achievements theme={theme} data={data} />;
      case 'Resume': return <Resume theme={theme} data={data} />;
      default: return <About theme={theme} data={data} />;
    }
  };

  return (
    <div className={`flex min-h-screen transition-all duration-500 ${theme === 'cyber' ? 'bg-black text-[#00ff41]' : 'bg-white text-slate-900'}`}>
      <Sidebar data={data} theme={theme} />
      <div className="flex-1 ml-80">
        <Navbar theme={theme} toggleTheme={toggleTheme} activePage={activePage} setActivePage={setActivePage} />
        <main className="p-10 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activePage + theme} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}