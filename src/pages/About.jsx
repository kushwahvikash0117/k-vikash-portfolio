import React, { useState } from 'react';
import { Globe, Cpu, Database, Layout, Terminal, Shield, Lock, Code2 } from 'lucide-react';

export default function About({ theme, data }) {
  const isCyber = theme === 'cyber';
  const [activeTab, setActiveTab] = useState('Frontend');

  // 1. Dynamic "What I'm doing" Section
  const services = isCyber ? [
    { title: "Network Forensics", desc: "Analyzing network traffic, investigating security incidents, and identifying suspicious activities to strengthen system security and improve threat detection capabilities.", icon: <Shield size={32} /> },
    { title: "Malware Research", desc: "Studying malicious software, understanding attack techniques, and analyzing threat behavior to enhance defensive strategies and cybersecurity awareness.", icon: <Terminal size={32} /> },
    { title: "SecOps", desc: "Implementing security best practices, hardening systems, monitoring threats, and maintaining secure infrastructure to ensure operational resilience.", icon: <Lock size={32} /> }
  ] : [
    { title: "Web Development", desc: "Building scalable, responsive, and user-centric web applications using modern technologies while ensuring seamless user experiences, optimized performance, and clean code architecture.", icon: <Globe size={32} /> },
    { title: "System Architecture", desc: "Designing robust and scalable system architectures that ensure maintainability, efficiency, security, and smooth integration between frontend, backend, and databases.", icon: <Layout size={32} /> },
    { title: "API Integration", desc: "Developing and integrating secure, high-performance APIs to enable seamless communication between services, applications, and third-party platforms.", icon: <Code2 size={32} /> }
  ];

  // 2. Tech Stack Data
  const devStack = {
    Frontend: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'Redux', icon: 'redux' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' }
    ],
    Backend: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express' },
      { name: 'MongoDB', icon: 'mongodb' }
    ],
    Programming: [
      { name: 'C', icon: 'c' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Bash', icon: 'gnubash' }
    ]
  };

  const cyberStack = {
    Tools: [
      { name: 'Wireshark', icon: 'wireshark' },
      { name: 'Kali Linux', icon: 'kalilinux' },
      { name: 'Git', icon: 'git' },
      { name: 'Linux', icon: 'linux' }
    ],
    Interests: [
      { name: 'Networking', icon: 'cisco' },
      { name: 'CTF', icon: 'hackthebox' },
      { name: 'OSINT', icon: 'google' },
      { name: 'Web Security', icon: 'cloudflare' }
    ],
    Programming: [
      { name: 'C', icon: 'c' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Bash', icon: 'gnubash' }
    ]
  };

  const currentStack = isCyber ? cyberStack : devStack;
  const stackKeys = Object.keys(currentStack);
  const currentTab = currentStack[activeTab] ? activeTab : stackKeys[0];

  const accentColor = isCyber ? 'text-[#00ff41]' : 'text-blue-500';
  const accentBg = isCyber ? 'bg-[#00ff41]' : 'bg-blue-600';

  return (
    <div className="w-full space-y-16 pb-10 transition-all duration-500">
      
      {/* SECTION 1: INTRO */}
      <section className="w-full space-y-8 pt-6">
        <h1 className="text-4xl font-black relative inline-block">
          {isCyber ? '> WHO_AM_I' : 'About Me'}
          <div className={`h-1.5 w-12 mt-2 rounded-full ${accentBg}`}></div>
        </h1>

        <div className="flex flex-col space-y-6">
          <p className="text-xl font-bold opacity-80">Hey</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            I am {data.name || 'Vikash Kushwah'}
          </h2>
          <div className="flex items-center gap-3 text-2xl font-bold">
            <span>I'm a </span>
            <span className={`px-3 py-1 rounded-xl transition-all duration-300 font-extrabold ${isCyber ? 'bg-[#00ff41]/20 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
              {isCyber ? 'Security Enthusiast' : 'Developer'}
            </span>
          </div>
          <p className="text-lg opacity-70 leading-relaxed max-w-5xl text-justify">
            {isCyber ? data.about.cyber : data.about.dev}
          </p>
        </div>
      </section>

      {/* SECTION 2: WHAT I'M DOING */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">{isCyber ? '> ACTIVE_MISSIONS' : "What I'm doing"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2
              ${isCyber ? 'bg-black border-[#00ff41]/20 shadow-[0_0_15px_rgba(0,255,65,0.05)]' : 'bg-white border-gray-100 shadow-xl shadow-slate-200/40'}`}>
              <div className={`mb-4 ${accentColor}`}>{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TECH STACK */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">{isCyber ? '> TOOL_CHAIN' : 'Tech Stack'}</h2>
        
        <div className={`inline-flex flex-wrap p-1.5 rounded-2xl border mb-10
          ${isCyber ? 'bg-black border-[#00ff41]/20' : 'bg-slate-100/50 border-gray-100'}`}>
          {stackKeys.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer
                ${currentTab === tab 
                  ? (isCyber ? 'bg-[#00ff41] text-black shadow-lg' : 'bg-slate-800 text-white shadow-md') 
                  : 'opacity-50 hover:opacity-100'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {currentStack[currentTab].map(tech => (
            <div key={tech.name} className="flex flex-col items-center gap-3 group">
              <div className={`w-20 h-20 p-4 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110
                ${isCyber ? 'bg-black border-[#00ff41]/20 group-hover:border-[#00ff41]' : 'bg-white border-gray-100 shadow-sm group-hover:shadow-md'}`}>
                
                <img 
                  src={
                    tech.name === 'Nmap' 
                      ? 'https://raw.githubusercontent.com/nmap/nmap.org/master/docs/nmap-logo.svg' 
                      : tech.name === 'CSS3' || tech.name === 'CSS'
                      ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                      : `https://cdn.simpleicons.org/${tech.icon}/${isCyber ? '00ff41' : '334155'}`
                  } 
                  alt={tech.name}
                  className={`w-10 h-10 object-contain ${isCyber ? 'brightness-110' : ''}`}
                />
              </div>
              <span className="text-[11px] font-black uppercase opacity-50 tracking-tighter">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}