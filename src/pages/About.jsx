import React, { useState } from 'react';
import { Globe, Cpu, Database, Layout, Terminal, Shield, Lock, Code2 } from 'lucide-react';

export default function About({ theme, data }) {
  const isCyber = theme === 'cyber';
  const [activeTab, setActiveTab] = useState('Frontend');

  // 1. Dynamic "What I'm doing" Section
  const services = isCyber ? [
    { title: "Network Forensics", desc: "Analyzing traffic to trace security breaches.", icon: <Shield size={32} /> },
    { title: "Malware Research", desc: "Decompiling binaries to identify malicious patterns.", icon: <Terminal size={32} /> },
    { title: "SecOps", desc: "Hardening system infrastructure and environments.", icon: <Lock size={32} /> }
  ] : [
    { title: "Web Development", desc: "Building responsive and functional websites at professional level.", icon: <Globe size={32} /> },
    { title: "System Architecture", desc: "Designing robust and scalable frontend structures.", icon: <Layout size={32} /> },
    { title: "API Integration", desc: "Seamlessly connecting services for fluid data exchange.", icon: <Code2 size={32} /> }
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
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Next.js', icon: 'nextdotjs' }
    ],
    Programming: [
      { name: 'C++', icon: 'cplusplus' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'openjdk' }
    ]
  };

  const cyberStack = {
    Tools: [
      { name: 'Wireshark', icon: 'wireshark' },
      { name: 'Kali Linux', icon: 'kalilinux' },
      { name: 'Metasploit', icon: 'metasploit' },
      { name: 'Burp Suite', icon: 'burpsuite' }
    ],
    Networking: [
      { name: 'Cisco', icon: 'cisco' },
      { name: 'Nmap', icon: 'nmap' },
      { name: 'Cloudflare', icon: 'cloudflare' }
    ],
    Programming: [
      { name: 'Python', icon: 'python' },
      { name: 'Bash', icon: 'gnubash' },
      { name: 'C', icon: 'c' }
    ]
  };

  const currentStack = isCyber ? cyberStack : devStack;
  const stackKeys = Object.keys(currentStack);
  const currentTab = currentStack[activeTab] ? activeTab : stackKeys[0];

  const accentColor = isCyber ? 'text-[#00ff41]' : 'text-blue-500';
  const accentBg = isCyber ? 'bg-[#00ff41]' : 'bg-blue-600';

  // --- NEW FIXED AVATAR (DiceBear Lorelei - Highly Stable) ---
  // Seed uses your name to keep it unique.
  const avatarUrl = `https://drive.google.com/file/d/1ByP8IMyCeYtGLL7-CcljN0ZuKboWJCTJ/view?usp=drivesdk`;

  return (
    <div className="space-y-16 pb-10 px-4 md:px-0 transition-all duration-500">
      
      {/* SECTION 1: REFERENCE STYLE INTRO */}
      <section className="space-y-8 pt-6">
        <h1 className="text-4xl font-black relative inline-block">
          {isCyber ? '> WHO_AM_I' : 'About Me'}
          <div className={`h-1.5 w-12 mt-2 rounded-full ${accentBg}`}></div>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="text-xl font-bold opacity-80 mb-1">Hey</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              I am {data.name || 'Vikash Kushwah'}
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3 text-2xl font-bold pt-1">
              <span>I'm a </span>
              <span className={`px-3 py-1 rounded-xl transition-all duration-300 font-extrabold ${isCyber ? 'bg-[#00ff41]/20 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
                {isCyber ? 'Security Analyst' : 'Developer'}
              </span>
            </div>
            <p className="text-lg opacity-70 leading-relaxed max-w-2xl pt-5">
              {isCyber ? data.about.cyber : data.about.dev}
            </p>
          </div>

          {/* Avatar Container */}
          <div className="flex-shrink-0">
            {/* Added a box-shadow and border style closer to your reference image */}
            <div className={`w-48 h-48 rounded-3xl overflow-hidden border-2 p-2 transition-all duration-500 
              ${isCyber ? 'border-[#00ff41] shadow-[0_0_40px_rgba(0,255,65,0.4)] bg-neutral-900' : 'border-blue-500 shadow-2xl bg-white'}`}>
              <img 
                src={avatarUrl} 
                alt="Avatar" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT I'M DOING (Cards) */}
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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center">
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