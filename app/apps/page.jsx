'use client';

import {  useMemo, useRef } from 'react';

const NAVIGATION_LINKS = [
  { label: 'Websites', href: '#websites' },
  { label: 'Templates', href: '#templates' },
  { label: 'Profiles', href: '#profiles', isActive: true },
  { label: 'Fonts', href: '#fonts' },
  { label: 'Blog', href: '#blog' },
];

export const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const TOOL_DATA = [
  // # (Numeric/Special)
  { id: '1p', name: '1Password AI', category: 'Security', description: 'AI-powered password security and management.', iconColor: 'bg-blue-500', url: '#', letter: '#' },
  
  // A
  { id: 'ant', name: 'Anthropic', category: 'LLM', description: 'Creators of Claude, focusing on AI safety.', iconColor: 'bg-orange-600', url: '#', letter: 'A' },
  { id: 'adb', name: 'Adobe Firefly', category: 'Design', description: 'Generative AI for creative workflows.', iconColor: 'bg-red-500', url: '#', letter: 'A' },
  { id: 'as', name: 'Arc Search', category: 'Browser', description: 'AI search that builds a page for you.', iconColor: 'bg-indigo-600', url: '#', letter: 'A' },
  { id: 'aut', name: 'AutoGPT', category: 'Agents', description: 'Autonomous AI agent processing.', iconColor: 'bg-slate-800', url: '#', letter: 'A' },
  { id: 'asm', name: 'AssemblyAI', category: 'Audio', description: 'AI models for speech-to-text and audio intel.', iconColor: 'bg-purple-600', url: '#', letter: 'A' },
  
  // B
  { id: 'brd', name: 'Bard (Gemini)', category: 'Chatbot', description: 'Google\'s creative and helpful AI collaborator.', iconColor: 'bg-blue-400', url: '#', letter: 'B' },
  { id: 'bng', name: 'Bing AI', category: 'Search', description: 'Microsoft\'s AI-powered search engine.', iconColor: 'bg-cyan-500', url: '#', letter: 'B' },
  { id: 'btf', name: 'Beautiful.ai', category: 'Presentation', description: 'AI-powered presentation software.', iconColor: 'bg-teal-500', url: '#', letter: 'B' },
  { id: 'bry', name: 'Bearly', category: 'Reading', description: 'AI tools to read and write faster.', iconColor: 'bg-amber-100', url: '#', letter: 'B' },
  
  // C
  { id: 'gpt', name: 'ChatGPT', category: 'Chatbot', description: 'The original LLM that started the revolution.', iconColor: 'bg-emerald-600', url: '#', letter: 'C' },
  { id: 'cld', name: 'Claude', category: 'LLM', description: 'Safe, ethical, and helpful AI assistant.', iconColor: 'bg-orange-200', url: '#', letter: 'C' },
  { id: 'cpy', name: 'Copy.ai', category: 'Writing', description: 'AI content generator for marketing.', iconColor: 'bg-blue-700', url: '#', letter: 'C' },
  { id: 'chr', name: 'Character.ai', category: 'Social', description: 'Chat with AI personalities.', iconColor: 'bg-zinc-800', url: '#', letter: 'C' },
  { id: 'cnv', name: 'Canva Magic', category: 'Design', description: 'AI-assisted design tools in Canva.', iconColor: 'bg-sky-400', url: '#', letter: 'C' },
  
  // D
  { id: 'dle', name: 'DALL-E', category: 'Image Gen', description: 'OpenAI\'s groundbreaking image generator.', iconColor: 'bg-gray-100', url: '#', letter: 'D' },
  { id: 'dsc', name: 'Descript', category: 'Video', description: 'Video and podcast editing powered by AI.', iconColor: 'bg-blue-400', url: '#', letter: 'D' },
  { id: 'dpl', name: 'DeepL', category: 'Translation', description: 'The world\'s most accurate translator.', iconColor: 'bg-slate-900', url: '#', letter: 'D' },
  { id: 'drb', name: 'Durable', category: 'Web', description: 'Build a website in 30 seconds with AI.', iconColor: 'bg-green-500', url: '#', letter: 'D' },

  // E
  { id: 'ele', name: 'ElevenLabs', category: 'Audio', description: 'High-quality AI text-to-speech.', iconColor: 'bg-black', url: '#', letter: 'E' },
  { id: 'elt', name: 'Elicit', category: 'Research', description: 'AI research assistant for academia.', iconColor: 'bg-white', url: '#', letter: 'E' },

  // F
  { id: 'fig', name: 'FigJam AI', category: 'Design', description: 'AI capabilities for whiteboarding.', iconColor: 'bg-fuchsia-500', url: '#', letter: 'F' },
  { id: 'flk', name: 'Fliki', category: 'Video', description: 'Turn text into videos with AI voices.', iconColor: 'bg-pink-500', url: '#', letter: 'F' },

  // G
  { id: 'gem', name: 'Gemini', category: 'Multimodal', description: 'Google\'s largest and most capable AI model.', iconColor: 'bg-blue-600', url: '#', letter: 'G' },
  { id: 'ghc', name: 'GitHub Copilot', category: 'Coding', description: 'AI pair programmer for developers.', iconColor: 'bg-gray-800', url: '#', letter: 'G' },
  { id: 'grk', name: 'Grok', category: 'Chatbot', description: 'X\'s rebellious and real-time AI.', iconColor: 'bg-black', url: '#', letter: 'G' },

  // H
  { id: 'hug', name: 'Hugging Face', category: 'Platform', description: 'The community for AI models and data.', iconColor: 'bg-yellow-400', url: '#', letter: 'H' },
  { id: 'hey', name: 'HeyGen', category: 'Video', description: 'AI video generation for avatars.', iconColor: 'bg-blue-500', url: '#', letter: 'H' },

  // I
  { id: 'img', name: 'Imagen', category: 'Image Gen', description: 'Google\'s high-quality image generator.', iconColor: 'bg-indigo-400', url: '#', letter: 'I' },
  { id: 'ins', name: 'Instacart AI', category: 'Assistant', description: 'Personalized shopping with AI.', iconColor: 'bg-emerald-500', url: '#', letter: 'I' },

  // J
  { id: 'jas', name: 'Jasper', category: 'Writing', description: 'AI copywriter for enterprise teams.', iconColor: 'bg-violet-600', url: '#', letter: 'J' },
  { id: 'jke', name: 'JokeGPT', category: 'Fun', description: 'AI that generates humorous content.', iconColor: 'bg-orange-400', url: '#', letter: 'J' },

  // K
  { id: 'kar', name: 'Krea.ai', category: 'Creative', description: 'Real-time AI for artists and designers.', iconColor: 'bg-zinc-900', url: '#', letter: 'K' },
  { id: 'kpp', name: 'KeepTalk', category: 'Language', description: 'AI language learning companion.', iconColor: 'bg-lime-500', url: '#', letter: 'K' },

  // L
  { id: 'lam', name: 'Llama', category: 'LLM', description: 'Meta\'s powerful open-weights model.', iconColor: 'bg-blue-800', url: '#', letter: 'L' },
  { id: 'lex', name: 'Lexica', category: 'Search', description: 'Search engine for AI-generated images.', iconColor: 'bg-gray-200', url: '#', letter: 'L' },
  { id: 'leo', name: 'Leonardo AI', category: 'Design', description: 'Generative AI for game assets.', iconColor: 'bg-amber-600', url: '#', letter: 'L' },

  // M
  { id: 'mid', name: 'Midjourney', category: 'Art', description: 'Top-tier generative art platform.', iconColor: 'bg-slate-900', url: '#', letter: 'M' },
  { id: 'mis', name: 'Mistral', category: 'LLM', description: 'Efficient open models from Europe.', iconColor: 'bg-sky-300', url: '#', letter: 'M' },
  { id: 'mrg', name: 'Murf AI', category: 'Audio', description: 'Versatile AI voice generator.', iconColor: 'bg-purple-800', url: '#', letter: 'M' },

  // N
  { id: 'not', name: 'Notion AI', category: 'Productivity', description: 'AI assistant embedded in Notion.', iconColor: 'bg-white', url: '#', letter: 'N' },
  { id: 'num', name: 'NumPy AI', category: 'Dev', description: 'AI tools for scientific computing.', iconColor: 'bg-blue-900', url: '#', letter: 'N' },

  // P
  { id: 'per', name: 'Perplexity', category: 'Search', description: 'Answer engine with real-time sources.', iconColor: 'bg-teal-700', url: '#', letter: 'P' },
  { id: 'pic', name: 'Pika', category: 'Video', description: 'AI video generation from text.', iconColor: 'bg-pink-600', url: '#', letter: 'P' },

  // R
  { id: 'run', name: 'Runway', category: 'Video', description: 'Professional AI video creation tools.', iconColor: 'bg-zinc-800', url: '#', letter: 'R' },
  { id: 'ref', name: 'Reface', category: 'Fun', description: 'Face swap AI app.', iconColor: 'bg-blue-400', url: '#', letter: 'R' },

  // S
  { id: 'sor', name: 'Sora', category: 'Video', description: 'OpenAI\'s photorealistic video model.', iconColor: 'bg-gray-300', url: '#', letter: 'S' },
  { id: 'syn', name: 'Synthesia', category: 'Video', description: 'AI avatars for business videos.', iconColor: 'bg-blue-900', url: '#', letter: 'S' },

  // T
  { id: 'top', name: 'Topaz AI', category: 'Photo', description: 'AI photo and video enhancement.', iconColor: 'bg-blue-500', url: '#', letter: 'T' },
  { id: 'typ', name: 'Typeface', category: 'Content', description: 'Enterprise AI content factory.', iconColor: 'bg-rose-500', url: '#', letter: 'T' },

  // V
  { id: 'veo', name: 'Veo', category: 'Video', description: 'Google\'s high-quality video generation.', iconColor: 'bg-indigo-600', url: '#', letter: 'V' },
  { id: 'voi', name: 'Voicebox', category: 'Audio', description: 'Meta\'s generative AI for speech.', iconColor: 'bg-cyan-600', url: '#', letter: 'V' },

  // W
  { id: 'wnd', name: 'Wand', category: 'Design', description: 'AI creative tool for visual thinking.', iconColor: 'bg-amber-400', url: '#', letter: 'W' },
  { id: 'wri', name: 'Writer', category: 'Business', description: 'AI platform for large organizations.', iconColor: 'bg-red-700', url: '#', letter: 'W' },
];


const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('#');
  const [geminiResult, setGeminiResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const sectionRefs = useRef({});

  // Group tools by their starting letter
  const groupedTools = useMemo(() => {
    const groups = {};
    ALPHABET.forEach(letter => groups[letter] = []);
    
    TOOL_DATA.forEach(tool => {
      const letter = tool.letter;
      if (groups[letter]) {
        groups[letter].push(tool);
      }
    });

    return groups;
  }, []);

  // Handle smart search with Gemini
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.length > 2) {
        setIsSearching(true);
        const result = await getSmartAIRecommendations(searchQuery);
        setGeminiResult(result);
        setIsSearching(false);
      } else {
        setGeminiResult(null);
      }
    }, 600); // Debounce

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Monitor scroll to update active letter in nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 160;
      
      for (const char of ALPHABET) {
        const el = sectionRefs.current[char];
        if (el) {
          const top = el.offsetTop - offset;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveLetter(char);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHighlighted = (tool) => {
    if (!searchQuery) return false;
    
    // Check if it matches regular search
    const matchesName = tool.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Check if it's suggested by Gemini
    const isGeminiSuggested = geminiResult?.suggestedTools.some(
      name => name.toLowerCase() === tool.name.toLowerCase()
    );

    return matchesName || isGeminiSuggested;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black">
      {/* <Header 
        onSearch={setSearchQuery} 
        activeLetter={activeLetter} 
      /> */}
       <Navbar items={NAVIGATION_LINKS} />

      <main className="max-w-7xl mx-auto">

        {/* Directory Sections */}
        <div className="space-y-16">
          {ALPHABET.map((letter) => {
            const toolsInGroup = groupedTools[letter];
            if (toolsInGroup.length === 0) return null;

            return (
              <section 
                key={letter} 
                id={`section-${letter}`}
                ref={el => sectionRefs.current[letter] = el}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-bold text-neutral-200">{letter}</h2>
                  <div className="h-[1px] flex-1 border-1 border-neutral-800 border-dashed"></div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-4 gap-y-10 justify-items-center">
                  {toolsInGroup.map((tool) => (
                    <AppIcon 
                      key={tool.id} 
                      tool={tool} 
                      isHighlighted={isHighlighted(tool)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Page;

const Navbar = ({ items }) => {
  const [activeTab, setActiveTab] = useState(
    items.find(item => item.isActive)?.label || items[0].label
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-b-neutral-700">
      <div className="mx-auto px-7 py-5 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0 font-vt text-2xl text-white">
          AI SHARE
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 font-ibm">
          {items.map((item) => (
            <div key={item.label} className="relative flex flex-col items-center group">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.label);
                }}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${activeTab === item.label ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}
                `}
              >
                {item.label}
              </a>
              {/* Active Indicator Dot */}
              {activeTab === item.label && (
                <div className="absolute -bottom-3 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
            </div>
          ))}

          <div>
            <button
              className={`
        px-8 py-2.5 rounded-md 
        bg-neutral-800 border border-neutral-800 
        text-white font-medium text-sm
       hover:border-neutral-700 
        transition-all duration-200
        shadow-lg shadow-black/50 cursor-pointer
      `}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-900 py-6 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-lg font-medium ${activeTab === item.label ? 'text-white' : 'text-zinc-500'}`}
                onClick={() => {
                  setActiveTab(item.label);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-900">
              <button
                className={`
        px-8 py-2.5 rounded-md 
        bg-neutral-800 border border-neutral-800 
        text-white font-medium text-sm
       hover:border-neutral-700 
        transition-all duration-200
        shadow-lg shadow-black/50 cursor-pointer
      `}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const AppIcon = ({ tool, isHighlighted }) => {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer w-24 sm:w-28">
  <div className="perspective-1000 w-20 h-20 sm:w-24 sm:h-24 relative">
    
    <div
      className={`w-full h-full relative transition-all duration-400 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180 ${
        isHighlighted ? 'ring-4 ring-blue-500 ring-offset-2' : ''
      }`}
    >
      {/* Front Side */}
      <div
        className={`absolute inset-0 backface-hidden flex items-center justify-center ${tool.iconColor} rounded-3xl shadow-sm group-hover:shadow-md transition-shadow`}
      >
        <span className="text-white text-3xl font-bold select-none">
          {tool.name.charAt(0)}
        </span>
      </div>

      {/* Back Side */}
      <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-zinc-900 text-base text-neutral-200 p-2 text-[10px] leading-tight text-center rounded-3xl shadow-xl">
        <span className="font-bold mb-1 border-b border-zinc-700 pb-1 w-full uppercase tracking-tighter">
          {tool.category}
        </span>
        <p className="line-clamp-3 px-1">{tool.description}</p>
      </div>
    </div>

  </div>

  <span
    className={`text-[11px] sm:text-xs font-medium text-base text-neutral-300 text-center w-full truncate px-1 transition-colors ${
      isHighlighted ? 'text-blue-600 font-bold' : ''
    }`}
  >
    {tool.name}
  </span>
</div>

  );
};

import { useState, useEffect } from 'react';
import { Search, Info, Grid, Menu, Sparkles, X } from 'lucide-react';

const Header= ({ onSearch, activeLetter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const scrollToLetter = (letter) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      const offset = 140; // Adjust for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-black text-xl italic">
              AI
            </div>
            <span className="hidden sm:inline font-bold text-lg tracking-tight">INDEX</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a href="#" className="text-black font-semibold">Directory</a>
            <a href="#" className="hover:text-black transition-colors">Resources</a>
            <a href="#" className="hover:text-black transition-colors">Submit Tool</a>
          </nav>
        </div>

        <div className="flex-1 max-w-md relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Ask AI about a tool..."
            className="w-full pl-10 pr-10 py-2 bg-zinc-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          {searchTerm && (
            <button 
              onClick={() => { setSearchTerm(''); onSearch(''); }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-4 h-4 text-zinc-400 hover:text-zinc-600" />
            </button>
          )}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">
             {/* Sparkle icon to indicate AI search capability */}
             {!searchTerm && <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full transition-colors">
            <Info className="w-5 h-5" />
          </button>
          <button className="md:hidden p-2 text-zinc-500 hover:bg-zinc-100 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white border-t border-zinc-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between gap-1 text-[10px] sm:text-xs font-bold text-zinc-400">
          {ALPHABET.map((char) => (
            <button
              key={char}
              onClick={() => scrollToLetter(char)}
              className={`px-2 py-1.5 rounded-md transition-all hover:text-black hover:bg-zinc-50 ${activeLetter === char ? 'text-black bg-zinc-100 ring-1 ring-zinc-200' : ''}`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
