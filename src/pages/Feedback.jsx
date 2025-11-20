import { useState } from 'react';
import Layout from '../components/Layout';

export default function Feedback(){
  const [form, setForm] = useState({ name:'', email:'', message:'', tool:'', type:'suggestion' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try{
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${baseUrl}/api/feedback`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if(res.ok) setStatus('Thanks for your feedback!');
      else setStatus(data.detail || 'Something went wrong');
    }catch(err){
      setStatus(err.message);
    }
  }

  return (
    <Layout>
      <section className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Feedback / Suggest a Tool</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Tell us what to build next or report issues. We read everything.</p>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name (optional)" className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"/>
            <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email (optional)" type="email" className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"/>
          </div>
          <input value={form.tool} onChange={e=>setForm({...form, tool:e.target.value})} placeholder="Tool (optional)" className="w-full px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"/>
          <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})} className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900">
            <option value="suggestion">Suggestion</option>
            <option value="bug">Bug</option>
            <option value="idea">Idea</option>
          </select>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Your message" required className="min-h-[160px] w-full px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"></textarea>
          <button className="px-4 py-2 rounded bg-blue-500 text-white">Send</button>
          {status && <p className="text-sm text-slate-500">{status}</p>}
        </form>
      </section>
    </Layout>
  );
}
