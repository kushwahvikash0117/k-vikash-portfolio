export default function ProjectCard({ project, theme }) {
  const isCyber = theme === 'cyber';

  if (!project) return null; // Prevent crash if an item is missing

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300
      ${isCyber 
        ? 'bg-[#0a0a0a] border-[#00ff41]/20 hover:border-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.1)]' 
        : 'bg-white border-gray-100 shadow-xl shadow-slate-200/50'}`}>
      
      <h3 className={`text-xl font-bold mb-2 ${isCyber ? 'text-[#00ff41] font-mono' : 'text-slate-800'}`}>
        {isCyber ? `_ ${project.title}` : project.title}
      </h3>
      
      <p className="text-sm opacity-70 leading-relaxed mb-6">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech?.map((tag) => (
          <span key={tag} className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider
            ${isCyber ? 'bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/20' : 'bg-slate-100 text-slate-600'}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}