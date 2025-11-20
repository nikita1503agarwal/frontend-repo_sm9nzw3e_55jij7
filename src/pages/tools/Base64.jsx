import { useState, useMemo } from 'react';
import Layout from '../../components/Layout';

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('encode');

  const output = useMemo(() => {
    try {
      if (mode === 'encode') {
        return btoa(unescape(encodeURIComponent(input)));
      } else {
        return decodeURIComponent(escape(atob(input)));
      }
    } catch (e) {
      return 'Invalid input for selected mode';
    }
  }, [input, mode]);

  const copy = async () => {
    await navigator.clipboard.writeText(output);
  };
  const clear = () => setInput('');
  const download = () => {
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `base64-${mode}.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Base64 Encoder / Decoder</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Convert text to and from Base64 safely in your browser. No data leaves your device.</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <label className="text-sm">Mode:</label>
          <select value={mode} onChange={(e)=>setMode(e.target.value)} className="border rounded px-3 py-2 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700">
            <option value="encode">Encode</option>
            <option value="decode">Decode</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type or paste text here" className="min-h-[240px] w-full p-4 border rounded bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"></textarea>
          <textarea readOnly value={output} className="min-h-[240px] w-full p-4 border rounded bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700"></textarea>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <button onClick={copy} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Copy</button>
          <button onClick={clear} className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-800">Clear</button>
          <button onClick={download} className="px-4 py-2 rounded bg-emerald-500 text-white hover:bg-emerald-600">Download</button>
        </div>
        <div className="mt-8 prose prose-invert max-w-none">
          <h2>What is Base64?</h2>
          <p>Base64 is a binary-to-text encoding scheme used to transport data over media designed to handle textual data. It is commonly used in data URIs, email, and basic authentication.</p>
        </div>
      </section>
    </Layout>
  );
}
