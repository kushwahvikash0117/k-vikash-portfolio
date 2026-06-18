import React from 'react';
import { BookOpen, Award, Download } from 'lucide-react';

export default function Resume({ theme }) {
  const isCyber = theme === 'cyber';

  const accentColor = isCyber ? 'text-[#00ff41]' : 'text-blue-500';
  const accentBg = isCyber ? 'bg-[#00ff41]' : 'bg-blue-600';

  const education = [
    {
      title: "Dr. B. R. Ambedkar National Institute of Technology Jalandhar",
      date: "2024 — 2028",
      desc: "B.Tech in Computer Science and Engineering"
    },
    {
      title: "Senior Secondary",
      date: "2022 — 2024",
      desc: "Varshana Model H. S. School, Vidisha"
    }
  ];

  const devSkills = [
    "JavaScript", "ReactJS", "HTML", "CSS", "Tailwind CSS",
    "NodeJS", "ExpressJS", "MongoDB", "MySQL", "C",
    "C++", "Python", "Bash", "Git", "GitHub", "REST APIs"
  ];

  const cyberSkills = [
    "Cybersecurity", "Network Security", "Wireshark", "Nmap",
    "Kali Linux", "Linux", "CTF", "OSINT",
    "Packet Analysis", "Incident Response", "Threat Analysis",
    "Malware Analysis", "Cryptography", "Bash Scripting",
    "Python", "Web Security"
  ];

  const skills = isCyber ? cyberSkills : devSkills;

  return (
    <div className={`space-y-12 md:space-y-16 pb-10 px-4 md:px-0 transition-all duration-500 ${isCyber ? 'font-mono' : 'font-sans'}`}>

      {/* HEADER SECTION */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black relative inline-block">
            {isCyber ? '> SYSTEM_RECORDS' : 'Resume'}
            <div className={`h-1.5 w-12 mt-2 rounded-full ${accentBg}`}></div>
          </h1>
        </div>

        <a
          href={isCyber ? '/K_Vikash.pdf' : '/Vikash_Kushwah.pdf'}
          download={isCyber ? 'Vikash_CyberSec_Resume.pdf' : 'Vikash_Dev_Resume.pdf'}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-lg no-underline
            ${isCyber ? 'bg-[#00ff41] text-black hover:bg-[#00cc33]' : 'bg-slate-800 text-white hover:bg-black'}`}
        >
          <Download size={18} />
          {isCyber ? 'EXPORT_DATA' : 'Download CV'}
        </a>
      </section>

      {/* EDUCATION TIMELINE SECTION */}
      <section className="space-y-8 md:space-y-10">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${isCyber ? 'bg-[#00ff41]/10 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
            <BookOpen size={24} />
          </div>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Education</h2>
        </div>

        <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-8 md:space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300
                ${isCyber ? 'bg-black border-[#00ff41] group-hover:bg-[#00ff41]' : 'bg-white border-blue-500 group-hover:bg-blue-500'}`}>
              </div>

              <div className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300
                ${isCyber ? 'bg-black border-[#00ff41]/10 hover:border-[#00ff41]/40 shadow-[0_0_15px_rgba(0,255,65,0.05)]' : 'bg-white border-gray-100 shadow-xl shadow-slate-100/50'}`}>
                <h3 className="text-lg md:text-xl font-bold leading-tight">{edu.title}</h3>
                <span className={`inline-block my-2 text-sm font-bold ${accentColor}`}>{edu.date}</span>
                <p className="opacity-60 text-xs md:text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS GRID SECTION */}
      <section className="space-y-8 md:space-y-10">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${isCyber ? 'bg-[#00ff41]/10 text-[#00ff41]' : 'bg-blue-50 text-blue-600'}`}>
            <Award size={24} />
          </div>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
            {isCyber ? 'CORE_COMPETENCIES' : 'My Skills'}
          </h2>
        </div>

        <div className={`p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border transition-all duration-500
          ${isCyber ? 'bg-black border-[#00ff41]/20' : 'bg-white border-gray-100 shadow-2xl shadow-slate-200/40'}`}>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-6 gap-x-8 md:gap-x-12">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4 group">
                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300
                  ${isCyber ? 'bg-[#00ff41] shadow-[0_0_8px_#00ff41]' : 'bg-slate-300 group-hover:bg-blue-500'}`}>
                </div>

                <span className={`text-base md:text-lg font-medium transition-colors 
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
