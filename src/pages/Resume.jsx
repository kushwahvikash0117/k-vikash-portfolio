import React from 'react';
import { BookOpen, Award, Briefcase, Download } from 'lucide-react';

export default function Resume({ theme }) {
  const isCyber = theme === 'cyber';

  const accentColor = isCyber ? 'text-[#00ff41]' : 'text-blue-500';
  const accentBg = isCyber ? 'bg-[#00ff41]' : 'bg-blue-600';
  const borderColor = isCyber ? 'border-[#00ff41]/20' : 'border-gray-100';

  // 1. Education Data (Common for both)
  const education = [
    {
      title: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      date: "2024 — 2028",
      desc: "B.Tech in Computer Science and Engineering"
    },
    {
      title: "Senior Secondary",
      date: "2022 — 2024",
      desc: "Varshana Model H. S. School, Vidisha"
    }
  ];

  // 2. Dynamic Skills Data based on Mode
  const devSkills = [
    "JavaScript", "ReactJS", "HTML", "CSS", "Tailwind CSS", "NodeJS", 
    "ExpressJS", "MongoDB", "Redux", "TypeScript", "NextJS", "C++", "Java", "Python"
  ];

  const cyberSkills = [
    "Network Forensics", "Malware Analysis", "Packet Sniffing", "Nmap", 
    "Wireshark", "Metasploit", "Kali Linux", "Bash Scripting", "Python (Sec)", 
    "Burp Suite", "OWASP Top 10", "Linux Hardening", "Cryptography"
  ];

  const skills = isCyber ? cyberSkills : devSkills;

  return (
    <div className="space-y-16 pb-10 px-4 md:px-0 transition-all duration-500">
      
      {/* HEADER SECTION */}
      {/* HEADER SECTION */}
      <section className="flex justify-between items-center pt-6">
        <h1 className="text-4xl font-black relative inline-block">
          {isCyber ? '> SYSTEM_RECORDS' : 'Resume'}
          <div className={`h-1.5 w-12 mt-2 rounded-full ${accentBg}`}></div>
        </h1>
        
        {/* Dynamic Download Link */}
        <a 
          href={isCyber ? '/My_CyberSec_Resume.pdf' : '/My_SEP_Resume.pdf'} 
          download={isCyber ? 'Vikash_CyberSec_Resume.pdf' : 'Vikash_Dev_Resume.pdf'}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-lg no-underline
            ${isCyber ? 'bg-[#00ff41] text-black hover:bg-[#00cc33]' : 'bg-slate-800 text-white hover:bg-black'}`}
        >
          <Download size={18} />
          {isCyber ? 'EXPORT_DATA' : 'Download CV'}
        </a>
      </section>

      {/* EDUCATION TIMELINE SECTION */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${isCyber ? 'bg-[#00ff41]/10 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
            <BookOpen size={24} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">Education</h2>
        </div>

        <div className="relative border-l-2 border-gray-100 ml-6 space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-10 group">
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300
                ${isCyber ? 'bg-black border-[#00ff41] group-hover:bg-[#00ff41]' : 'bg-white border-blue-500 group-hover:bg-blue-500'}`}>
              </div>
              
              <div className={`p-6 rounded-3xl border transition-all duration-300
                ${isCyber ? 'bg-black border-[#00ff41]/10 hover:border-[#00ff41]/40' : 'bg-white border-gray-100 shadow-xl shadow-slate-100/50'}`}>
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <span className={`inline-block my-2 font-bold ${accentColor}`}>{edu.date}</span>
                <p className="opacity-60 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS GRID SECTION */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${isCyber ? 'bg-[#00ff41]/10 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
            <Award size={24} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">
            {isCyber ? 'CORE_COMPETENCIES' : 'My Skills'}
          </h2>
        </div>

        <div className={`p-8 md:p-12 rounded-[3rem] border transition-all duration-500
          ${isCyber ? 'bg-black border-[#00ff41]/20' : 'bg-white border-gray-100 shadow-2xl shadow-slate-200/40'}`}>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-4 group">
                {/* Custom Bullet Point */}
                <div className={`w-2 h-2 rounded-full transition-all duration-300
                  ${isCyber ? 'bg-[#00ff41] shadow-[0_0_8px_#00ff41]' : 'bg-slate-300 group-hover:bg-blue-500'}`}>
                </div>
                
                <span className={`text-lg font-medium transition-colors 
                  ${isCyber ? 'text-gray-300 group-hover:text-[#00ff41]' : 'text-slate-700 group-hover:text-black'}`}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}