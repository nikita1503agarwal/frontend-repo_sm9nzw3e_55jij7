import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';

export default function Layout({ children }) {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-xl">TextTools</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-400' : 'text-slate-600 dark:text-slate-300'}>Home</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? 'text-blue-400' : 'text-slate-600 dark:text-slate-300'}>Blog</NavLink>
            <NavLink to="/feedback" className={({isActive}) => isActive ? 'text-blue-400' : 'text-slate-600 dark:text-slate-300'}>Feedback</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={()=>setDark(v=>!v)} className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {dark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
            </button>
            <button className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700" onClick={()=>setOpen(o=>!o)}>
              <Menu className="w-5 h-5"/>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-3 space-y-2">
            <NavLink to="/" onClick={()=>setOpen(false)} className="block">Home</NavLink>
            <NavLink to="/blog" onClick={()=>setOpen(false)} className="block">Blog</NavLink>
            <NavLink to="/feedback" onClick={()=>setOpen(false)} className="block">Feedback</NavLink>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} TextTools. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-300">Privacy</a>
              <a href="#" className="hover:text-slate-300">Terms</a>
              <a href="#" className="hover:text-slate-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
