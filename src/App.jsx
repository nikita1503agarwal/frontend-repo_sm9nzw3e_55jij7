import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Base64Tool from './pages/tools/Base64';
import SlugifyTool from './pages/tools/Slugify';
import SentenceCase from './pages/tools/SentenceCase';
import ReverseText from './pages/tools/ReverseText';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools/base64" element={<Base64Tool />} />
      <Route path="/tools/slugify" element={<SlugifyTool />} />
      <Route path="/tools/case/sentence" element={<SentenceCase />} />
      <Route path="/tools/text/reverse" element={<ReverseText />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App
