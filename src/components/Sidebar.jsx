import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Smartphone, 
  Twitter, 
  Instagram, 
  Github, // Agar ye error de, toh 'Github as GithubIcon' try karein
  Ghost 
} from "lucide-react";

export default function Sidebar({ data, theme }) {
  const isCyber = theme === 'cyber';

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`fixed left-0 top-0 h-screen w-80 p-8 border-r transition-all duration-500 z-40 flex flex-col justify-between
      ${isCyber ? 'bg-black border-[#00ff41]/30 text-[#00ff41] font-mono' : 'bg-slate-50 border-gray-200 text-slate-800'}`}
    >
      <div>
        <div className="flex flex-col items-center">
          {/* Profile Image with Glow in Cyber Mode */}
          <div className={`p-1 rounded-2xl border-2 transition-all duration-500 
            ${isCyber ? 'border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.5)]' : 'border-blue-500 shadow-lg'}`}>
            <img 
              src="/profile_pic.jpeg" 
              alt={data.name} 
              className="w-36 h-36 rounded-xl object-cover"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-center">{data.name}</h2>
          
          <p className={`mt-3 text-xs font-semibold px-4 py-1.5 rounded-lg uppercase tracking-wider transition-all duration-500
            ${isCyber ? 'bg-[#00ff41]/20 text-[#00ff41]' : 'bg-blue-100 text-blue-700'}`}>
            {isCyber ? 'Security Analyst' : 'Developer'}
          </p>
        </div>

        <div className="w-full h-[1px] bg-current opacity-10 my-10"></div>

        {/* Contact Links */}
        <div className="space-y-6">
          <ContactItem icon={<Mail size={18}/>} label="Email" val={data.email} isCyber={isCyber} link={`mailto:${data.email}`} />
          <ContactItem icon={<Smartphone size={18}/>} label="Phone" val="+91 9644919251" isCyber={isCyber} />
          <ContactItem icon={<Github size={18}/>} label="GitHub" val="kushwahvikash0117" isCyber={isCyber} link={data.github} />
          <ContactItem icon={<Linkedin size={18}/>} label="LinkedIn" val="k-vikash" isCyber={isCyber} link={data.linkedin} />
        </div>
      </div>

      {/* --- SOCIAL MEDIA FOOTER SECTION --- */}
      <div className="pt-6 border-t border-current opacity-60">
        <div className="flex items-center justify-center gap-6">
          <SocialIcon icon={<Twitter size={20}/>} link="https://x.com/kush_vikash01" isCyber={isCyber} />
          <SocialIcon icon={<Instagram size={20}/>} link="https://www.instagram.com/only_4_vikashk" isCyber={isCyber} />
        </div>
      </div>
    </motion.aside>
  );
}

function ContactItem({ icon, label, val, isCyber, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
      <div className={`p-3 rounded-xl border transition-all 
        ${isCyber ? 'border-[#00ff41]/40 bg-black group-hover:bg-[#00ff41] group-hover:text-black' : 'bg-white shadow-sm group-hover:border-blue-500 group-hover:text-blue-500'}`}>
        {icon}
      </div>
      <div className="overflow-hidden">
        <p className="text-[10px] uppercase opacity-50 font-bold mb-0.5">{label}</p>
        <p className="text-sm truncate font-medium">{val}</p>
      </div>
    </a>
  );
}

// Small Component for Footer Icons
function SocialIcon({ icon, link, isCyber }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer" 
      className={`transition-all duration-300 transform hover:scale-125
        ${isCyber ? 'hover:text-[#00ff41] hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]' : 'hover:text-blue-600'}`}
    >
      {icon}
    </a>
  );
}