import { Link } from 'react-router-dom';
import { ArrowRight, Wand2 } from 'lucide-react';

export default function ToolCard({ to, title, description, icon: Icon }) {
  return (
    <Link
      to={to}
      className="group p-5 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-blue-400/60 hover:bg-slate-800/80 transition flex items-start gap-4"
    >
      <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-400/20">
        {Icon ? <Icon className="w-6 h-6" /> : <Wand2 className="w-6 h-6" />}
      </div>
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-blue-200/80 text-sm mt-1">{description}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-blue-300 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition" />
    </Link>
  );
}
