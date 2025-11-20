import { useMemo, useState } from 'react';
import Layout from '../../components/Layout';

export default function ReverseText(){
  const [input, setInput] = useState('');
  const [byLine, setByLine] = useState(false);
  const output = useMemo(()=> {
    if (byLine) return input.split('\n').map(l=>[...l].reverse().join('')).join('\n');
    return [...input].reverse().join('');
  }, [input, byLine]);

  const copy = async () => navigator.clipboard.writeText(output);
  const clear = () => setInput('');

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Reverse Text Generator</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Flip your text in real-time. Optionally reverse line-by-line.</p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <input id="byLine" type="checkbox" checked={byLine} onChange={(e)=>setByLine(e.target.checked)} />
          <label htmlFor="byLine" className="text-sm">Reverse each line separately</label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="min-h-[200px] w-full p-4 border rounded bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" placeholder="Paste your text"/>
          <textarea readOnly value={output} className="min-h-[200px] w-full p-4 border rounded bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700"/>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={copy} className="px-4 py-2 rounded bg-blue-500 text-white">Copy</button>
          <button onClick={clear} className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-800">Clear</button>
        </div>
      </section>
    </Layout>
  );
}
