'use client'
import { AnimatePresence } from "motion/react"
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from "lucide-react"

const NAVIGATION_LINKS = [
  { label: 'Websites', href: '#websites' },
  { label: 'Templates', href: '#templates' },
  { label: 'Profiles', href: '#profiles', isActive: true },
  { label: 'Fonts', href: '#fonts' },
  { label: 'Blog', href: '#blog' },
];

const showcaseItems = [
  {
    title: "Freelance Things",
    image:
      "https://cdn.prod.website-files.com/65a42762661153944abe7a84/667aad0740a93538f1310627_freelancethings.co_desktop_thumbnail.avif",
    tags: ["2D", "Motion", "Creative"],
  },
  {
    title: "Nidia",
    image:
      "https://res.cloudinary.com/dan5cgtww/image/upload/f_auto,q_auto,c_scale,w_750,dpr_auto/v1763129166/nidia_taahcl",
    tags: ["2D", "Motion", "Creative"],
  },
  {
    title: "Rich Projects",
    image:
      "https://res.cloudinary.com/dan5cgtww/image/upload/f_auto,q_auto,c_scale,w_750,dpr_auto/v1763130277/rich-prjcts_m3jb7o",
    tags: ["2D", "Motion", "Creative"],
  },
  {
    title: "Flowbase",
    image:
      "https://cdn.prod.website-files.com/65a42762661153944abe7a84/65d460e6e8352b1626701dd6_flowbase.co_desktop_thumbnail.avif",
    tags: ["Minimal", "UI", "Creative"],
  },
  {
    title: "AuthKit",
    image:
      "https://cdn.prod.website-files.com/65a42762661153944abe7a84/65d45fa7d3d3d536bb2dbf04_authkit.com_desktop_thumbnail.avif",
    tags: ["Interactive", "SaaS", "Motion"],
  },
  {
    title: "Something for That",
    image:
      "https://cdn.prod.website-files.com/64e6b21162e1f800f9b459ff/6533845f97cd72e210ee7c57_something-for-that.gif",
    tags: ["Tool", "Micro-interactions", "Animated"],
  },
];

const INITIAL_FILTERS = [
  { id: '3d', label: '3D', isActive: false },
  { id: 'animated', label: 'ANIMATED', isActive: false },
  { id: 'brutalist', label: 'BRUTALIST', isActive: false },
  { id: 'glitchy', label: 'GLITCHY', isActive: false },
  { id: 'illustrative', label: 'ILLUSTRATIVE', isActive: true },
  { id: 'interactive', label: 'INTERACTIVE', isActive: true },
  { id: 'large-type', label: 'LARGE TYPE', isActive: true },
  { id: 'minimal', label: 'MINIMAL', isActive: false },
  { id: 'small-type', label: 'SMALL TYPE', isActive: false },
  { id: 'goth', label: 'Goth', isActive: true },
  { id: 'fun', label: 'Fun', isActive: false },
  { id: 'cybercore', label: 'cybercore', isActive: true },
  { id: 'sybau', label: 'SYBAU', isActive: false },
];

export default function Page() {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [aiInsight, setAiInsight] = useState('');
  const [isInsightLoading, setIsInsightLoading] = useState(false);

  const toggleFilter = useCallback((id) => {
    setFilters(prev => prev.map(f =>
      f.id === id ? { ...f, isActive: !f.isActive } : f
    ));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(prev => prev.map(f => ({ ...f, isActive: false })));
  }, []);

  const activeLabels = useMemo(() =>
    filters.filter(f => f.isActive).map(f => f.label),
    [filters]
  );

  useEffect(() => {
    const fetchInsight = async () => {
      if (activeLabels.length === 0) {
        setAiInsight('');
        return;
      }
      setIsInsightLoading(true);
      const insight = await getDesignInsight(activeLabels);
      setAiInsight(insight);
      setIsInsightLoading(false);
    };

    const timer = setTimeout(fetchInsight, 800); // Debounce AI call
    return () => clearTimeout(timer);
  }, [activeLabels]);
  return (
    <main className="min-h-screen bg-black text-white pb-24">
      <Navbar items={NAVIGATION_LINKS} />
      <section className="pt-30 mx-auto p-10 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Text */}
        <div className="space-y-5 max-w-3xl">
          <h1 className="font-vt text-5xl md:text-6xl tracking-tight">
            Unleash Your Creativity with Curated Motion Design Portfolios.
          </h1>

          <p className="font-ibm text-neutral-300 text-base md:text-lg">
            Step inside the portfolios of the world&apos;s finest motion designers,
            explore their craft, and find the spark that shapes your next big idea.
          </p>

          <div className="mt-10">
            <MiddleNav />
          </div>
        </div>

        {/* Visual */}
        <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden bg-neutral-900 group">
          {/* Background image */}
          <img
            src="https://cdn.prod.website-files.com/64e6b21162e1f800f9b459ff/6533845f97cd72e210ee7c57_something-for-that.gif"
            alt="Tool of the week"
            className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="absolute inset-0 p-5 flex flex-col justify-end font-ibm">
            <span className="mb-2 inline-block w-fit rounded-sm bg-neutral-700 px-4 py-2 text-xs text-white backdrop-blur">
              Tool of the Week
            </span>

            <h3 className="text-3xl font-semibold text-white leading-tight font-vt">
              Something for That
            </h3>

            <p className="mt-1 text-sm text-neutral-300">
              Create smooth motion & micro-interactions without overthinking animations.
            </p>

            <button className="mt-4 w-fit rounded-md bg-white px-8 py-2.5 text-sm font-medium text-black cursor-pointer font-ibm">
              Explore tool
            </button>
          </div>
        </div>


      </section>
      <div className="pb-15 pt-3"><HorizontalTicker /></div>

      <section
        id="showcase"
        className="mx-auto w-full px-10 border-t-2 border-t-neutral-800 pt-10"
      >
        <section id='filter-tags'>
          <div className="">
            <div className="mx-auto px-6 py-6 overflow-x-auto hide-scrollbar">
              <div className="flex items-center gap-3">
                {filters.map(filter => (
                  <FilterTag
                    key={filter.id}
                    filter={filter}
                    onToggle={toggleFilter}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

         {/* <div className="mx-auto w-full py-10">
          <div className="flex items-start gap-2">
            <h2 className="font-vt text-4xl md:text-5xl tracking-tight">AI Tools</h2>
            <span className="text-neutral-300 text-sm">(500)</span>
          </div>
          </div> */}

        {/* <div className="mx-auto w-full px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          <div className="flex items-start gap-2 mt-2">
            <h2 className="font-vt text-4xl md:text-5xl tracking-tight">AI Tools</h2>
            <span className="text-neutral-300 text-sm">(500)</span>
          </div>
          {showcaseItems.map((item, i) => (
            <div
              key={i}
              className="group p-3 w-full rounded-xl border border-neutral-700 bg-neutral-900/0
                 hover:bg-neutral-800 hover:-translate-y-2
                 transition-all duration-300 ease-out"
            >
              <div className="relative w-full h-[35vh] rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="pt-4 pb-2 flex items-center justify-between text-neutral-300 group-hover:text-white transition-colors">
                <h3 className="text-base font-medium font-ibm">
                  {item.title}
                </h3>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </div>

              <div className="flex flex-wrap gap-2 pb-1">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-sm bg-neutral-700 px-3 py-1.5 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <section className="grid grid-cols-1 md:grid-cols-6 auto-rows-[400px] gap-5 py-10">
          {showcaseItems.map((item, i) => {
            const bentoStyles = [
              "md:col-span-4 md:row-span-2", 
              "md:col-span-2 md:row-span-1",
              "md:col-span-2 md:row-span-1",
              "md:col-span-2 md:row-span-1",
              "md:col-span-4 md:row-span-2", 
              "md:col-span-2 md:row-span-1", 
            ]

            return (
              <div
                key={i}
                className={bentoStyles[i % bentoStyles.length]}
              >
                {/* CARD (unchanged design) */}
                <div
                  className="group p-3 w-full h-full relative rounded-xl border border-neutral-700 bg-neutral-900/0
    hover:bg-neutral-800 hover:-translate-y-2
    transition-all duration-300 ease-out
    flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full flex-1 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    {/* Title */}
                    <div className="pb-2 flex items-center justify-between text-neutral-300 group-hover:text-white transition-colors">
                      <h3 className="text-base font-medium font-ibm">
                        {item.title}
                      </h3>
                      <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:-rotate-45"
                      />
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 pb-1">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-sm bg-neutral-700 px-3 py-1.5 text-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </section>

      </section>
    </main>
  );
}

const FilterTag = ({ filter, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(filter.id)}
      className={`
        flex items-center gap-3 px-6 py-3.5 rounded-md transition-all ease-out
        bg-white hover:bg-neutral-200 active:scale-95
        font-ibm text-xs tracking-widest font-medium text-black whitespace-nowrap uppercase
      `}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${filter.isActive ? 'bg-[#222222]' : 'bg-[#D1D1D1]'
          }`}
      />
      {filter.label}
    </button>
  );
};

const Navbar = ({ items }) => {
  const [activeTab, setActiveTab] = useState(
    items.find(item => item.isActive)?.label || items[0].label
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-b-neutral-700">
      <div className="mx-auto px-7 py-5 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0 font-vt text-2xl">
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


import { useState, useEffect, useCallback, useMemo } from "react";

const recs = ["two souls intertwining", "surrealist sculptures", "subtle feelings of melancholy", "women in history"];

const MiddleNav = () => {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");

  // rotate suggestions only if input is empty
  useEffect(() => {
    if (value) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % recs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="bg-neutral-800 w-md rounded-2xl flex items-center justify-between py-4 px-4 gap-4">

      {/* Input */}
      <div className="relative flex-1 flex items-center gap-2">
        <SparkIcon className="w-5 h-5 text-neutral-400" />

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent w-full outline-none text-base text-neutral-300 placeholder-transparent"
        />

        {/* Animated suggestion overlay */}
        {!value && (
          <div className="pointer-events-none absolute left-7 text-base text-neutral-300/70 font-ibm">
            <span>Try </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={recs[index]}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="ml-1"
              >
                &apos;{recs[index]}&apos;
              </motion.span>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 text-neutral-500">
        <ArrowRight size={20} />
      </div>
    </div>
  );
};

const SparkIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 19"
        width="15"
        height="15"
        className="text-neutral-500"
        fill="currentColor"
      >
        <g id="Group_10443" data-name="Group 10443">
          <path
            id="spark_2"
            d="M3.148,0l.63,2.519,2.519.63-2.519.63L3.148,6.3l-.63-2.519L0,3.148l2.519-.63Z"
            style={{
              transform: "translate3d(9px, 0px, 0px) scale(0.941576)",
              opacity: 0.707882,
            }}
          />
          <path
            id="spark_3"
            d="M2.963,0l.593,2.519,2.37.63-2.37.63L2.963,6.3,2.37,3.778,0,3.148l2.37-.63Z"
            style={{
              transform: "translate3d(9px, 15px, 0px) scale(0.903844)",
              opacity: 0.519218,
            }}
          />
          <path
            id="spark_1"
            d="M7.963,0,9.556,6.074l6.37,1.519L9.556,9.111,7.963,15.185,6.37,9.111,0,7.593,6.37,6.074Z"
            style={{
              transform: "translate3d(-3px, 2px, 0px) scale(0.990115)",
              opacity: 0.950575,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

const HorizontalTicker = ({ width = "100%", height = "180px", duration = 25 }) => {
  const images = [
    "https://i.pinimg.com/736x/5f/a7/b6/5fa7b67fe7110363f9ae290d0b26c3d9.jpg",
    "https://i.pinimg.com/736x/22/0f/f8/220ff890b5f33abfcc4a78e4a724fe4e.jpg",
    "https://i.pinimg.com/736x/18/84/3d/18843d0bf89e525e71c014df0fa598f6.jpg",
    "https://i.pinimg.com/736x/fe/e7/ec/fee7ec015f37ae0d4f3720642ab62f0f.jpg",
    "https://i.pinimg.com/736x/4c/5a/64/4c5a6486a909e658cb9a5edfb0a10560.jpg",
    "https://i.pinimg.com/736x/3d/e0/69/3de069a53ed026bb2d707945e022907e.jpg",
    "https://i.pinimg.com/1200x/fb/78/79/fb787909767b73255307affea8ec7d3a.jpg",
  ]

  return (
    <div className="flex justify-center items-start" style={{ width, height }}>
      <div className="relative overflow-hidden w-full h-full">
        <div
          className="absolute flex flex-row items-center"
          style={{
            width: "max-content",
            height: "100%",
            animation: `marqueeX ${duration}s linear infinite`,
          }}
        >
          {/* Original set */}
          {images.map((src, idx) => (
            <div key={idx} className="w-[180px] h-[180px] m-3 rounded-xl overflow-hidden">
              <img src={src} alt={`img-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Duplicate set */}
          {images.map((src, idx) => (
            <div key={`dup-${idx}`} className="w-[180px] h-[180px] m-3 rounded-xl overflow-hidden">
              <img src={src} alt={`dup-img-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <div className="hidden">
        <style jsx>{`
          @keyframes marqueeX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  )
}