'use client'

import { Navbar } from "@/components//navigation-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Code, Users, PenTool, CheckSquare, Megaphone, BookOpen, Brush, Video, Mic, Cpu, MessageCircle, ArrowUpRight, Bookmark } from "lucide-react";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const toolsData = [
  {
    imgUrl: 'https://framerusercontent.com/images/49xacIHNc34AhHCkuANfOIAhQ8.png',
    title: 'Awwwards',
    category: 'Library',
    href: '#'
  },
  {
    imgUrl: 'https://framerusercontent.com/images/BXXyZ5WDeBN8DtLgiyHE90NpmW4.png?scale-down-to=1024',
    title: 'ChatGPT',
    category: 'AI Chatbot',
    href: '#'
  },
  {
    imgUrl: 'https://framerusercontent.com/images/B8nzl6SYPhf3NIMldMcPlENrGvE.png?scale-down-to=1024',
    title: 'Canva',
    category: 'Design Tool',
    href: '#'
  },
  {
    imgUrl: 'https://framerusercontent.com/images/gkhs2Aby3yqvFbSqo2IquPokDLM.png?scale-down-to=1024',
    title: 'Notion AI',
    category: 'Productivity',
    href: '#'
  },
  {
    imgUrl: 'https://framerusercontent.com/images/49xacIHNc34AhHCkuANfOIAhQ8.png',
    title: 'Awwwards',
    category: 'Library',
    href: '#'
  },
  {
    imgUrl: 'https://framerusercontent.com/images/BXXyZ5WDeBN8DtLgiyHE90NpmW4.png?scale-down-to=1024',
    title: 'ChatGPT',
    category: 'AI Chatbot',
    href: '#'
  },
  {
    imgUrl: 'https://framerusercontent.com/images/B8nzl6SYPhf3NIMldMcPlENrGvE.png?scale-down-to=1024',
    title: 'Canva',
    category: 'Design Tool',
    href: '#'
  },
  {
    imgUrl: 'https://framerusercontent.com/images/gkhs2Aby3yqvFbSqo2IquPokDLM.png?scale-down-to=1024',
    title: 'Notion AI',
    category: 'Productivity',
    href: '#'
  },
];

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

  const footerLinks = [
  {
    title: "Design Assets",
    items: ["Device mockups", "Branding mockups", "Illustrations", "UI/UX tools"],
  },
  {
    title: "Resources",
    items: ["Blog", "Guides", "Templates", "Community"],
  },
  {
    title: "Company",
    items: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    items: ["Privacy", "Terms", "Licenses", "Cookies"],
  },
  {
    title: "Product",
    items: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Support",
    items: ["Help Center", "Docs", "Status", "Feedback"],
  },
]

  return (
    <div className='min-h-screen w-screen text-black'>
      <Navbar />
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
          <div className="text-6xl font-medium tracking-tight text-center font-vt">Discover the Best <br /> AI Tools for Your Needs!</div>
          <div className="mt-5 text-center text-lg text-neutral-500">Get discovered by thousands of AI enthusiasts.<br /> Your support helps us grow the AI ecosystem!</div>
          <div className="mt-10 flex items-center gap-2">
            <Input placeholder="Search by category, usecase..." className="bg-neutral-100 w-sm py-6 rounded-3xl px-5 placeholder:text-base" />
            <button className="cursor-pointer rounded-3xl bg-black text-white font-medium text-base p-3 px-4 w-fit">Search</button>
          </div>
        </div>
      </div>

      {/* filter pills */}
      {/* <div className="p-5 flex items-center w-screen relative border-b border-b-neutral-200/50">
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
      </div> */}

      <div className="pb-15">
        <CategoryBlock title='AI Image & Graphics Tools' href='' />
        <div className="px-5 pb-5 flex items-center w-screen relative">
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
        <div className="mx-auto px-5 mt-5">
          <div className="grid md:grid-cols-4 grid-cols-1 mx-auto justify-items-center gap-7">
            {toolsData.map((tool, index) => (
              <ToolCard
                key={index}
                imgUrl={tool.imgUrl}
                title={tool.title}
                category={tool.category}
                href={tool.href}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pb-15">
        <CategoryBlock title='AI Chatbots & Assistants' href='' />
        <div className="px-5 pb-5 flex items-center w-screen relative">
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
        <div className="mx-auto px-5 mt-5">
          <div className="grid md:grid-cols-4 grid-cols-1 mx-auto justify-items-center gap-7">
            {toolsData.map((tool, index) => (
              <ToolCard
                key={index}
                imgUrl={tool.imgUrl}
                title={tool.title}
                category={tool.category}
                href={tool.href}
              />
            ))}
          </div>
        </div>
      </div>

      <CTA />
      {/* <Footer /> */}
     
    </div>
  )
}

export default page

const ToolCard = ({ imgUrl, title, category, href }) => {
  return (
    <Link href={href} className="md:w-[22vw] w-full h-fit bg-neutral-100 rounded-xl border border-neutral-200 p-2 pb-3 cursor-pointer group">
      <div className="w-full h-[24vh] rounded-lg overflow-hidden border border-neutral-200">
        <img src={imgUrl} alt='image' className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between mt-3 font-medium text-sm">
        <div>
          <div>{title}</div>
          <div className="text-xs text-neutral-500">{category}</div>
        </div>
        <div className="flex gap-1 items-center group-hover:opacity-100 opacity-0 transition-all duration-200">
          <Link href={href} className="size-10 bg-white rounded-md flex items-center justify-center border border-neutral-200"><Bookmark className="size-4 text-black" /></Link>
          <Link href={href} className="size-10 bg-white rounded-md flex items-center justify-center border border-neutral-200"><ArrowUpRight className="size-4 text-black" /></Link>
        </div>
      </div>
    </Link>
  )
}

const CategoryBlock = ({ title, href }) => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-end">
        <div className="text-2xl font-medium tracking-tight font-display">{title}</div>
        <Link href={href} className="group cursor-pointer hover:underline underline-offset-2 text-neutral-500 transition-all ease-out hover:text-black font-medium text-sm flex items-center gap-0.5">See more <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" /></Link>
      </div>
    </div>
  )
}

const CTA = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-15 pb-15 relative border border-b-neutral-200">
      <div className="text-5xl font-medium text-center font-display">Are you an AI company? <br />Feature your tool</div>
      <div className="mt-5 text-center text-lg text-neutral-500 w-xl">Get weekly updates on the newest AI tools and industry insights delivered to your inbox.</div>
      <div className="mt-5 flex items-center gap-2">
        {/* <Input placeholder="Enter your email" className="bg-neutral-100 w-sm py-6 rounded-3xl px-5 placeholder:text-base" /> */}
        <button className="cursor-pointer rounded-3xl bg-black text-white font-medium text-base p-3 px-4 w-fit">Submit your product</button>
      </div>
    </div>
  )
}

{/* <div className="w-xs h-fit bg-neutral-100 rounded-xl border border-neutral-200 p-2 pb-3">
      <div className="w-full h-[20vh] rounded-lg overflow-hidden border border-neutral-200">
      <img src='https://framerusercontent.com/images/49xacIHNc34AhHCkuANfOIAhQ8.png' alt='' className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between mt-3 font-medium text-sm">
        <div>
          <div>Awwwards</div>
          <div className="text-xs text-neutral-500">Library</div>
        </div>
        <div className="size-7 bg-white rounded-md flex items-center justify-center border border-neutral-200"><ArrowUpRight className="size-4 text-black" /></div>
      </div>
    </div> */}