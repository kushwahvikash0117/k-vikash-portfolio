import React from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';

export default function Sidebar({ data, theme }) {
  const isCyber = theme === 'cyber';

  // Safe Icon Helper
  const getIcon = (name, fallback) => {
    const Icon = Lucide[name] || Lucide[fallback] || Lucide.Circle;
    return <Icon size={18} />;
  };

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`fixed left-0 top-0 h-screen w-80 p-8 border-r transition-all duration-500 z-40 flex flex-col
      ${isCyber 
        ? 'bg-black border-[#00ff41]/30 text-[#00ff41] font-mono' 
        : 'bg-slate-50 border-gray-200 text-slate-800 font-sans'}`}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <div className={`p-1 rounded-2xl border-2 transition-all duration-500 
          ${isCyber ? 'border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.5)]' : 'border-blue-500 shadow-lg'}`}>
          <img 
            src="/profile_pic.jpeg" 
            alt="Profile" 
            className="w-36 h-36 rounded-xl object-cover"
          />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-center">Vikash Kushwah</h2>
        <p className={`mt-3 text-xs font-semibold px-4 py-1.5 rounded-lg uppercase tracking-wider
          ${isCyber ? 'bg-[#00ff41]/20 text-[#00ff41]' : 'bg-blue-100 text-blue-700'}`}>
          {isCyber ? 'Security Analyst' : 'Developer'}
        </p>
      </div>

      <div className="w-full h-[1px] bg-current opacity-10 my-10"></div>

      {/* Contact Info Only */}
      <div className="space-y-6">
        <ContactItem 
          icon={getIcon('Mail', 'MessageSquare')} 
          label="Email" 
          val="vikash.vk.0117@gmail.com" 
          isCyber={isCyber} 
          link="mailto:vikash.vk.0117@gmail.com" 
        />
        <ContactItem 
          icon={getIcon('Smartphone', 'Phone')} 
          label="Phone" 
          val="+91 9644919251" 
          isCyber={isCyber} 
        />
        <ContactItem 
          icon={getIcon('Github', 'Code2')} 
          label="GitHub" 
          val="kushwahvikash0117" 
          isCyber={isCyber} 
          link="https://github.com/kushwahvikash0117" 
        />
        <ContactItem 
          icon={getIcon('Linkedin', 'User')} 
          label="LinkedIn" 
          val="k-vikash" 
          isCyber={isCyber} 
          link="https://linkedin.com/in/k-vikash" 
        />
      </div>
    </motion.aside>
  );
}

function ContactItem({ icon, label, val, isCyber, link }) {
  return (
    <a href={link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
      <div className={`p-3 rounded-xl border transition-all duration-300
        ${isCyber 
          ? 'border-[#00ff41]/40 bg-black group-hover:bg-[#00ff41] group-hover:text-black' 
          : 'bg-white shadow-sm group-hover:border-blue-500 group-hover:text-blue-500'}`}>
        {icon}
      </div>
      <div className="overflow-hidden text-left">
        <p className="text-[10px] uppercase opacity-50 font-bold mb-0.5">{label}</p>
        <p className="text-sm truncate font-medium">{val}</p>
      </div>
    </a>
  );
}