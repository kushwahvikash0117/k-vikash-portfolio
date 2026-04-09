import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, GraduationCap, Award, Code2, Zap, Terminal, ShieldAlert, BookOpen, Target } from 'lucide-react';

const Achievements = ({ theme }) => {
  const isCyber = theme === 'cyber';

  const accentBg = isCyber ? 'bg-[#00ff41]' : 'bg-blue-600';
  const accentColor = isCyber ? 'text-[#00ff41]' : 'text-blue-600';
  const cardBg = isCyber ? 'bg-black/60' : 'bg-white';
  const borderColor = isCyber ? 'border-[#00ff41]/20' : 'border-gray-100';

  // 1. General Achievements (Always Visible)
  const generalAchievements = [
    { title: "State Topper", desc: "Ranked #1 in Class 12 Board Exams across the state.", icon: <Trophy />, tag: "Topper", date: "2021" },
    { title: "District Topper", desc: "Achieved top rank in Class 10 Board Exams in the district.", icon: <Star />, tag: "Topper", date: "2019" },
    { title: "NIT Jalandhar", desc: "Currently pursuing B.Tech in CSE at a premier national institute.", icon: <GraduationCap />, tag: "Academic", date: "2022-Present" },
    { title: "Academic Excellence", desc: "Maintained strong consistency and performance in all semesters.", icon: <Award />, tag: "Performance", date: "Ongoing" }
  ];

  // 2. Full Stack Achievements (Dev Mode)
  const devAchievements = [
    { title: "Campus Bites", desc: "Successfully deployed food pre-ordering system for NITJ campus.", icon: <Code2 />, tag: "Project", date: "2023" },
    { title: "MERN Stack Mastery", desc: "Developed and managed multiple complex full stack projects.", icon: <Zap />, tag: "Dev", date: "2024" },
    { title: "UI/UX Specialist", desc: "Designed highly responsive and user-friendly interfaces with React.", icon: <BookOpen />, tag: "Design", date: "2024" },
    { title: "Backend Scalability", desc: "Created high-performance backend systems using Node.js & MongoDB.", icon: <Target />, tag: "Backend", date: "2023" }
  ];

  // 3. Cybersecurity Achievements (Cyber Mode)
  const cyberAchievements = [
    { title: "Google Certified", desc: "Earned the Google Cybersecurity Professional Certificate.", icon: <ShieldAlert />, tag: "Certified", date: "2024" },
    { title: "Founder & Head, Cyber Security Club NITJ", desc: "Active member of the Cyber Security Club core team at NITJ.", icon: <Terminal />, tag: "Leadership", date: "2023-Present" },
    { title: "RootBreach Manager", desc: "Organized and managed the flagship 'RootBreach' security event.", icon: <Zap />, tag: "Event", date: "2024" },
    { title: "Cyber Simulation", desc: "Currently working on a sophisticated Cyber Attack Simulation platform.", icon: <ShieldAlert />, tag: "Research", date: "2024" },
    { title: "Hands-on Security", desc: "Participated in various hands-on labs and security learning activities.", icon: <Terminal />, tag: "Hands-on", date: "2023" }
  ];

  // Logic: Combine General with Mode-specific data
  const displayAchievements = [...generalAchievements, ...(isCyber ? cyberAchievements : devAchievements)];

  return (
    <div className={`space-y-12 pb-20 px-4 md:px-0 transition-all duration-500 ${isCyber ? 'font-mono' : 'font-sans'}`}>
      
      {/* HEADER */}
      <div className="pt-6 space-y-4">
        <h1 className="text-4xl font-black relative inline-block">
          {isCyber ? '> FETCH_MILESTONES' : 'Achievements'}
          <div className={`h-1.5 w-12 mt-2 rounded-full ${accentBg}`}></div>
        </h1>
        <p className="opacity-60 text-lg max-w-xl">
          {isCyber 
            ? 'Loading verified security credentials and academic records...' 
            : 'A showcase of my academic honors and technical accomplishments.'}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayAchievements.map((item, index) => (
            <motion.div
              key={item.title + (isCyber ? '-cyber' : '-dev')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`group p-8 rounded-[2.5rem] border transition-all duration-300 relative overflow-hidden
                ${cardBg} ${borderColor}
                ${isCyber ? 'hover:shadow-[0_0_25px_rgba(0,255,65,0.2)]' : 'shadow-xl shadow-slate-200/40 hover:shadow-2xl'}`}
            >
              {/* TOP ROW: ICON & TAG */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${isCyber ? 'bg-[#00ff41]/10 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border
                  ${isCyber ? 'border-[#00ff41]/30 text-[#00ff41]' : 'border-blue-100 text-blue-500 bg-blue-50/50'}`}>
                  {item.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="space-y-3">
                <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed min-h-[48px]">
                  {item.desc}
                </p>
                
                {/* DATE / FOOTER */}
                <div className="pt-4 flex items-center gap-2">
                   <div className={`h-px flex-1 ${isCyber ? 'bg-[#00ff41]/10' : 'bg-gray-100'}`}></div>
                   <span className="text-[11px] font-bold opacity-40">{item.date}</span>
                </div>
              </div>

              {/* CYBER DECO */}
              {isCyber && (
                <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                   {React.cloneElement(item.icon, { size: 100 })}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Achievements;