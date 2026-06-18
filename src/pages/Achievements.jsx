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
  {
    title: "State Topper",
    desc: "Secured the top rank in the state in Class 12 Board Examinations.",
    icon: <Trophy />,
    tag: "Academic",
    date: "2024"
  },
  {
    title: "District Topper",
    desc: "Achieved the highest score in the district in Class 10 Board Examinations.",
    icon: <Star />,
    tag: "Academic",
    date: "2022"
  },
  {
    title: "JEE Advanced Qualified",
    desc: "Successfully qualified JEE Advanced 2024 and secured admission to NIT Jalandhar.",
    icon: <Target />,
    tag: "National",
    date: "2024"
  },
  {
    title: "Internship Representative",
    desc: "Representing the CSE-DSE 2028 batch for internship opportunities and coordination.",
    icon: <BookOpen />,
    tag: "Leadership",
    date: "May 2026-Present"
  },
  {
    title: "Founder & Head, CSC NITJ",
    desc: "Founded and currently lead the Cyber Security Club at NIT Jalandhar.",
    icon: <ShieldAlert />,
    tag: "Leadership",
    date: "Dec 2025-Present"
  },
  {
    title: "Core Member, Rajbhasha Samiti",
    desc: "Actively contributing to initiatives that promote the Hindi language, cultural heritage, and linguistic awareness within the institute community.",
    icon: <Award />,
    tag: "Leadership",
    date: "Aug 2025-Present"
  }
];

  // 2. Full Stack Achievements (Dev Mode)
  const devAchievements = [
  {
    title: "AIR 95 - JavaScript Competition",
    desc: "Secured AIR 95 in the All India JavaScript Competition organized by IIT (BHU) E-Cell.",
    icon: <Code2 />,
    tag: "Competition",
    date: "2023"
  },
  {
    title: "Odoo Hackathon Finalist",
    desc: "Reached the finalist stage among 19,000+ participants and secured a place in the top 351 teams nationwide.",
    icon: <Zap />,
    tag: "Hackathon",
    date: "2025"
  },
  {
    title: "Lead Developer - VidyAstra AI",
    desc: "Leading the development of VidyAstra AI, the institute's official AI-powered learning platform project.",
    icon: <Zap />,
    tag: "Development",
    date: "2026"
  }
];

  // 3. Cybersecurity Achievements (Cyber Mode)
  const cyberAchievements = [
  {
    title: "Google Cybersecurity Certified",
    desc: "Earned the Google Cybersecurity Professional Certificate covering security operations, incident response, Linux, SQL, and network security.",
    icon: <ShieldAlert />,
    tag: "Certification",
    date: "2025"
  },
  {
    title: "RootBreach Organizer",
    desc: "Organized RootBreach, a 24-hour national-level Capture The Flag event with 300+ participants, fostering collaboration, technical excellence, and cybersecurity awareness among students nationwide.",
    icon: <Terminal />,
    tag: "Event",
    date: "2026"
  },
  {
    title: "MoSTF 2026 Organizer",
    desc: "Organized MoSTF 2026, a two-day national workshop on Mobile Security Threats and Forensics in collaboration with IIT Jammu, attended by 100+ participants from across the country.",
    icon: <Zap />,
    tag: "Workshop",
    date: "2026"
  }
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