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
  {
    title: "BloodConnect",
    desc: "A comprehensive blood donation platform that connects donors and recipients through real-time request management, donor registration, and emergency blood availability tracking.",
    tags: ["MERN Stack", "MongoDB", "Tailwindcss"],
    github: "https://github.com/kushwahvikash0117/BloodConnect",
    iconName: "Heart"
  },
  {
    title: "ReWear",
    desc: "A community-driven clothing exchange platform that promotes sustainable fashion by enabling users to donate, exchange, and reuse apparel efficiently.",
    tags: ["MERN Stack", "Tailwind CSS"],
    github: "https://github.com/kushwahvikash0117/ReWear",
    link: "https://rewear-alpha.vercel.app/",
    iconName: "Globe"
  },
  {
    title: "CareConnect",
    desc: "A healthcare support platform designed to improve accessibility to medical assistance, healthcare resources, and community-driven support services.",
    tags: ["React", "Node.js"],
    github: "https://github.com/kushwahvikash0117/CareConnect",
    iconName: "Shield"
  },
  {
    title: "VidyAstra AI",
    desc: "An AI-powered educational platform that enhances learning through intelligent assistance, personalized resources, content analysis, and productivity-focused tools.",
    tags: ["AI", "React", "MongoDB"],
    github: "https://github.com/VidyastraAI/VidyastraAI",
    iconName: "Cpu"
  },
  {
    title: "Cyber Security Club Website",
    desc: "The official website of the Cyber Security Club, serving as a centralized hub for events, blogs, team management, announcements, and community engagement.",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/cybersecurityclub-nitj/CSC_NITJ_Web",
    link: "https://csc.nitj.ac.in/",
    iconName: "Shield"
  },
  {
    title: "Helpyuva Foundation",
    desc: "An NGO website developed to showcase social initiatives, volunteer opportunities, impact stories, and community outreach programs through a modern digital platform.",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/kushwahvikash0117/HelpyuvaClient",
    link: "https://helpyuva-client-88fz.vercel.app/",
    iconName: "Globe"
  },
  {
    title: "Campus Bites",
    desc: "A food pre-ordering platform for NIT Jalandhar that enables students to place orders in advance, reducing waiting times and improving canteen efficiency.",
    tags: ["MERN Stack", "Node.js"],
    github: "https://github.com/kushwahvikash0117/CampusBitesClient",
    link: "https://campus-bites-lyart.vercel.app/",
    iconName: "Globe"
  }
],

cyber: [
  {
    title: "InfoTool",
    desc: "A cybersecurity reconnaissance utility that automates the collection and analysis of publicly available information related to domains, networks, and digital assets.",
    tags: ["Python", "OSINT"],
    github: "https://github.com/kushwahvikash0117/CyberSecTools",
    iconName: "Search"
  },
  {
    title: "NP Scanner",
    desc: "A network and port scanning solution designed to identify active hosts, open ports, and exposed services for security assessment and network visibility.",
    tags: ["Python", "Networking"],
    github: "https://github.com/kushwahvikash0117/CyberSecTools",
    iconName: "Radar"
  },
  {
    title: "Phishing Simulation",
    desc: "A cybersecurity awareness project that demonstrates phishing attack techniques in a controlled environment to educate users about social engineering threats.",
    tags: ["Cybersecurity", "Awareness"],
    github: "https://github.com/kushwahvikash0117/CyberSecTools",
    iconName: "MailWarning"
  },
  {
    title: "Recon",
    desc: "A reconnaissance framework that gathers publicly available intelligence from multiple sources to support security assessments and threat analysis activities.",
    tags: ["OSINT", "Python"],
    github: "https://github.com/kushwahvikash0117/CyberSecTools",
    iconName: "Search"
  },
  {
    title: "IoT Device Behavior Visualizer",
    desc: "A machine learning-based system that analyzes and visualizes IoT device behavior to identify anomalies, patterns, and potential security risks.",
    tags: ["Machine Learning", "Python"],
    github: "https://github.com/kushwahvikash0117/IoT_Device_Behavior_Visualizer",
    link: "https://iot-device-behavior-visualizer.streamlit.app/",
    iconName: "Cpu"
  },
  {
    title: "TriGuard Firewall",
    desc: "A multi-layer firewall architecture focused on traffic monitoring, packet filtering, threat detection, and strengthening overall network security.",
    tags: ["Python", "Cybersecurity"],
    iconName: "Shield"
  }
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
                  {project.github && (
                  <a href={project.github} className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                    <Github size={20} />
                  </a>
                  )}
                  {project.link && (<a href={project.link} className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                  </a>
                  )}
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