'use client'

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Code, Users, Database, PenTool, CheckSquare, Megaphone, BookOpen, Brush, Video, Mic, Cpu, MessageCircle } from "lucide-react";
import { XIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const pills = [
  { name: 'AI Image & Graphics', icon: Brush },
  { name: 'AI Chatbots & Assistants', icon: MessageCircle },
  { name: 'Specialized Industry', icon: Users },
  { name: 'Developer & Programming', icon: Code },
  { name: 'Content Creation', icon: PenTool },
  { name: 'Productivity & Organization', icon: CheckSquare },
  { name: 'Marketing & Sales', icon: Megaphone },
  { name: 'Research & Knowledge', icon: BookOpen },
  { name: 'Design & Creative', icon: Brush },
  { name: 'Video & Animation', icon: Video },
  { name: 'Voice & Audio', icon: Mic },
  { name: 'Business Automation', icon: Cpu },
];

const page = () => {
  const scrollRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);
  const [selectedPill, setSelectedPill] = useState(null);

  const handleSelect = (pill) => {
    setSelectedPill(pill);
  };

  const remainingPills = selectedPill
    ? pills.filter((p) => p.name !== selectedPill.name)
    : pills;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowLeftFade(el.scrollLeft > 0);
      setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const reviews = {
    count: 200,
    avatars: [
      { src: "/ai/1.svg", alt: "Avatar 1" },
      { src: "/ai/2.svg", alt: "Avatar 2" },
      { src: "/ai/3.svg", alt: "Avatar 3" },
      { src: "/ai/4.svg", alt: "Avatar 4" },
      { src: "/ai/5.svg", alt: "Avatar 5" },
    ],
  }

  return (
    <div className='min-h-screen w-screen text-black'>
      {/* hero */}
      <div className='w-full h-fit flex flex-col items-center py-10 relative overflow-hidden border-b border-b-neutral-200/50'>
        <div className="-z-10 top-0 absolute h-full w-full bg-[radial-gradient(#a1a1a1,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="relative z-50 flex flex-col items-center">
          <div className="mx-auto flex w-fit flex-col-reverse items-center gap-2 mb-10">
            <span className="inline-flex items-center -space-x-3">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-10 border border-input rounded-xl bg-neutral-100 p-2 hover:rotate-12 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="text-center text-sm font-medium text-neutral-500 mb-1">
                Explore 1000+ AI Products
              </div>
            </div>
          </div>
          <div className="text-6xl font-medium tracking-tight text-center font-display">Discover the Best <br /> AI Tools for Your Needs!</div>
          <div className="mt-5 text-center text-lg text-neutral-500">Get discovered by thousands of AI enthusiasts.<br /> Your support helps us grow the AI ecosystem!</div>
          <div className="mt-10 flex items-center gap-2">
            <Input placeholder="Search by category, usecase..." className="bg-neutral-100 w-sm py-6 rounded-3xl px-5 placeholder:text-base" />
            <button className="cursor-pointer rounded-3xl bg-black text-white font-medium text-base py-3 w-22">Search</button>
          </div>
        </div>
      </div>

      {/* filter pills */}
      <div className="py-3 flex items-center px-3 w-screen relative border-b border-b-neutral-200/50">
        {selectedPill && (
          <div className="mr-2 shrink-0">
            <div
              className="uppercase text-xs px-5 p-3 rounded-full bg-black text-white font-medium whitespace-nowrap flex items-center gap-2 cursor-pointer"
              onClick={() => setSelectedPill(null)}
            >
              <selectedPill.icon className="size-4" /> {selectedPill.name} <XIcon className="size-4" />
            </div>
          </div>
        )}

        <div className="flex items-center gap- relative flex-1 overflow-x-hidden overflow-y-visible">
          <div className={`pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent transition-opacity duration-200 ${showLeftFade ? "opacity-100" : "opacity-0"}`} />
          <div className={`pointer-events-none absolute top-0 bottom-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent transition-opacity duration-200 ${showRightFade ? "opacity-100" : "opacity-0"}`} />

          <div ref={scrollRef} className="flex items-center gap-2 hide-scrollbar overflow-x-auto w-full">
            {remainingPills.map((pill, index) => {
              const Icon = pill.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleSelect(pill)}
                  className="uppercase flex items-center gap-2 text-neutral-600 text-xs px-5 p-3 rounded-full cursor-pointer whitespace-nowrap bg-neutral-200/50 font-medium"
                >
                  <Icon className="size-4" /> {pill.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
