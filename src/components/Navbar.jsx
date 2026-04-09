import { motion } from 'framer-motion';

export default function Navbar({ theme, toggleTheme, activePage, setActivePage }) {
  const isCyber = theme === 'cyber';
  const menuItems = ["About", "Resume", "Portfolio", "Achievements"];

  return (
    <nav className={`sticky top-0 z-50 p-6 flex justify-between items-center backdrop-blur-md transition-colors duration-500
      ${isCyber ? 'bg-black/80 text-[#00ff41]' : 'bg-white/80 text-slate-800 border-b border-gray-100'}`}>
      
      <div className="font-black text-xl tracking-tighter">
        {isCyber ? '> VK_SYS' : 'VK.'}
      </div>

      <div className="flex items-center gap-10">
        <ul className="flex gap-8 list-none items-center">
          {menuItems.map((item) => (
            <li key={item} className="relative">
              <button 
                type="button" 
                onClick={() => {
                  console.log("Navigating to:", item); // Debugging
                  setActivePage(item);
                }}
                className={`text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-1
                ${activePage === item 
                  ? (isCyber ? 'text-[#00ff41]' : 'text-blue-600') 
                  : 'opacity-50 hover:opacity-100'}`}
              >
                {item}
              </button>

              {activePage === item && (
                <motion.div 
                  layoutId="activeNav"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 
                  ${isCyber ? 'bg-[#00ff41]' : 'bg-blue-600'}`}
                />
              )}
            </li>
          ))}
        </ul>

        <button 
          onClick={toggleTheme}
          className={`px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 transition-all cursor-pointer
            ${isCyber 
              ? 'border-[#00ff41] bg-black text-[#00ff41]' 
              : 'border-slate-800 bg-slate-800 text-white'}`}
        >
          {isCyber ? 'CyberSec Mode' : 'Full Stack Dev'}
        </button>
      </div>
    </nav>
  );
}