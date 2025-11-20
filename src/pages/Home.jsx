import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import { Link } from 'react-router-dom';
import { Binary, PaintBucket, FileCode2, Shield, Sparkles, Braces, Italic, Heading1, Image, Hash } from 'lucide-react';

const featured = [
  { to: '/tools/base64', title: 'Base64 Encoder / Decoder', description: 'Encode or decode text and files instantly in your browser.', icon: Binary },
  { to: '/tools/slugify', title: 'Slugify Generator', description: 'Create clean, SEO-friendly URL slugs from any text.', icon: Hash },
  { to: '/tools/json', title: 'JSON Formatter & Minifier', description: 'Format, validate, and minify JSON with error highlighting.', icon: Braces },
  { to: '/tools/markdown', title: 'Markdown Previewer', description: 'Write Markdown and see a live, styled preview.', icon: FileCode2 },
  { to: '/tools/case/sentence', title: 'Sentence Case Converter', description: 'Convert any text to sentence case instantly.', icon: Heading1 },
  { to: '/tools/text/reverse', title: 'Reverse Text', description: 'Reverse a string or each line, live as you type.', icon: Italic },
];

export default function Home() {
  return (
    <Layout>
      <Hero onCTAClick={() => {
        const el = document.getElementById('tool-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }} />

      <section id="tool-grid" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Tools</h2>
          <Link to="/tools" className="text-blue-400 hover:text-blue-300">Browse all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((t) => (
            <ToolCard key={t.to} {...t} />
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800 p-6 bg-white dark:bg-slate-900/50">
          <h3 className="text-xl font-semibold mb-2">Fast, privacy-first, and SEO-friendly</h3>
          <p className="text-slate-600 dark:text-slate-300">Most tools run entirely in your browser for instant results and zero data sharing. Dedicated pages for every tool are optimized for search so people can find exactly what they need.</p>
        </div>
      </section>
    </Layout>
  );
}
