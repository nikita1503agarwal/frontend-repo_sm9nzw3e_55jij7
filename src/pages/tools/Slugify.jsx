import { useState, useMemo } from 'react';
import Layout from '../../components/Layout';

function slugify(value){
  return value
    .toLowerCase()
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function SlugifyTool(){
  const [input, setInput] = useState('');
  const output = useMemo(()=> slugify(input), [input]);

  const copy = async () => navigator.clipboard.writeText(output);
  const clear = () => setInput('');

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Slugify / URL Handle Generator</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Create clean, SEO-friendly URLs from any text with transliteration and whitespace cleanup.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Type or paste text here" className="min-h-[200px] w-full p-4 border rounded bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"></textarea>
          <textarea readOnly value={output} className="min-h-[200px] w-full p-4 border rounded bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700"></textarea>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={copy} className="px-4 py-2 rounded bg-blue-500 text-white">Copy</button>
          <button onClick={clear} className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-800">Clear</button>
        </div>
        <div className="mt-8 prose prose-invert max-w-none">
          <h2>What is a slug?</h2>
          <p>A URL slug is the part of a URL that identifies a particular page on a website in a readable way. This tool generates slugs by removing accents, punctuation, and replacing spaces with dashes.</p>
        </div>
      </section>
    </Layout>
  );
}
