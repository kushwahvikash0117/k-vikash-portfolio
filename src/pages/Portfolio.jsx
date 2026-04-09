import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. Named imports ki jagah Namespace import use karo
import * as Lucide from 'lucide-react';

const Portfolio = ({ theme }) => {
  const isCyber = theme === 'cyber';

  const accentBg = isCyber ? 'bg-[#00ff41]' : 'bg-blue-600';
  const cardBg = isCyber ? 'bg-black/60' : 'bg-white';
  const borderColor = isCyber ? 'border-[#00ff41]/20' : 'border-gray-100';

  // 2. Icons ko safely fetch karne ke liye helper
  // Agar koi icon (jaise Github) missing hua toh 'Globe' ya 'Code' dikhayega
  const getIcon = (name) => {
    const Icon = Lucide[name] || Lucide.Globe || Lucide.Code2;
    return <Icon size={24} />;
  };

  const projects = {
    dev: [
      { title: "Campus Bites", desc: "Food pre-ordering app for NITJ students to reduce canteen wait times.", tags: ["React", "Node.js", "MongoDB"], iconName: "Globe" },
      { title: "ChatSorter", desc: "Smart chat filtering system that organizes messages based on priority.", tags: ["Python", "Socket.io"], iconName: "Code2" },
      { title: "ReWear", desc: "Community platform for clothing exchange and sustainable fashion.", tags: ["MERN Stack", "Tailwind"], iconName: "Globe" },
      { title: "DonorConnect", desc: "Critical platform connecting organ donors with recipients in real-time.", tags: ["React", "Firebase"], iconName: "Shield" },
      { title: "Blood Donation App", desc: "MERN-based system for blood requests and donor tracking at NITJ.", tags: ["MongoDB", "Express"], iconName: "Code2" },
      { title: "Personal Portfolio", desc: "Dual-mode interactive website showcasing diverse technical skills.", tags: ["React", "Framer Motion"], iconName: "Cpu" },
      { title: "Hostel Event Manager", desc: "Centralized system for managing hostel activities and announcements.", tags: ["PHP", "MySQL"], iconName: "Code2" },
      { title: "Notes Sharing Portal", desc: "P2P portal where students can upload and download academic notes.", tags: ["MERN", "PDF.js"], iconName: "FileCode" },
      { title: "Online Quiz System", desc: "Scalable platform for hosting MCQ exams with automated grading.", tags: ["React", "Node.js"], iconName: "Code2" },
      { title: "Auth To-Do App", desc: "Task manager with JWT-based authentication and persistent storage.", tags: ["React", "JWT"], iconName: "Lock" }
    ],
    cyber: [
      { title: "Attack Simulator", desc: "Simulates real-world cyber attacks (SQLi, XSS) to test resilience.", tags: ["Python", "Docker"], iconName: "Shield" },
      { title: "Network Sniffer", desc: "Python tool inspired by Wireshark for real-time traffic analysis.", tags: ["Scapy", "Networking"], iconName: "Terminal" },
      { title: "Port Scanner", desc: "Multi-threaded tool to identify open ports and service versions.", tags: ["C++", "Linux"], iconName: "Search" },
      { title: "Password Analyzer", desc: "Evaluates entropy and checks against known breached databases.", tags: ["Python", "Hashing"], iconName: "Lock" },
      { title: "Simple Keylogger", desc: "Educational tool demonstrating keystroke capture and logging.", tags: ["Python", "Hooks"], iconName: "Terminal" },
      { title: "Integrity Checker", desc: "Uses SHA-256 hashing to monitor unauthorized file changes.", tags: ["Cryptography", "Python"], iconName: "Shield" },
      { title: "CTF Practice Lab", desc: "Containerized vulnerable machines for penetration testing practice.", tags: ["Docker", "Kali"], iconName: "Terminal" },
      { title: "Phishing Detector", desc: "ML-based analyzer checking URLs for suspicious patterns.", tags: ["Scikit-learn", "NLP"], iconName: "Search" },
      { title: "Log Analyzer", desc: "Parses system logs to identify anomalies and potential breach attempts.", tags: ["Bash", "ELK Stack"], iconName: "Terminal" },
      { title: "Vuln Scanner", desc: "Automated scanner for common web vulnerabilities (OWASP Top 10).", tags: ["Python", "Security"], iconName: "Shield" }
    ]
  };

  const currentProjects = isCyber ? projects.cyber : projects.dev;

  // 3. GitHub aur ExternalLink ko safely access karo
  const Github = Lucide.Github || Lucide.GithubIcon || Lucide.Code2;
  const ExternalLink = Lucide.ExternalLink || Lucide.Globe;

  return (
    <div className={`space-y-12 pb-20 px-4 md:px-0 transition-all duration-500 ${isCyber ? 'font-mono' : 'font-sans'}`}>
      
      <div className="pt-6 space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-black relative inline-block">
          {isCyber ? '> LOAD_SEC_ASSETS' : 'Portfolio'}
          <div className={`h-1.5 w-12 mt-2 rounded-full mx-auto md:mx-0 ${accentBg}`}></div>
        </h1>
        <p className="opacity-60 text-lg max-w-xl mx-auto md:mx-0">
          {isCyber 
            ? 'Accessing encrypted security repositories...' 
            : 'Explore my full-stack engineering projects and digital solutions.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title + (isCyber ? '-cyber' : '-dev')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-[2.5rem] border transition-all duration-300
                ${cardBg} ${borderColor}
                ${isCyber ? 'hover:shadow-[0_0_30px_rgba(0,255,65,0.25)]' : 'shadow-xl shadow-slate-200/50 hover:shadow-2xl'}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl ${isCyber ? 'bg-[#00ff41]/10 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
                  {getIcon(project.iconName)}
                </div>
                <div className="flex gap-2">
                  <a href="#" className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-black tracking-tight">
                  {isCyber ? `_ ${project.title}` : project.title}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed min-h-[60px]">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className={`text-[10px] font-bold px-3 py-1 rounded-lg border
                        ${isCyber 
                          ? 'border-[#00ff41]/20 text-[#00ff41] bg-[#00ff41]/5' 
                          : 'border-blue-100 text-blue-600 bg-blue-50/50'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {isCyber && (
                <div className="absolute bottom-4 right-6 text-[8px] opacity-10 select-none pointer-events-none uppercase">
                  Classified // Auth_Pass
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;