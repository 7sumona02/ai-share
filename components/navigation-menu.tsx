"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { type Variant, type Variants } from 'framer-motion';

interface Link {
    text: string;
    href: string;
}

interface DropdownColumn {
    heading?: string;
    links: Link[];
}

type DropdownData = DropdownColumn[];

interface MenuItem {
    label: string;
    href: string;
    dropdownData?: DropdownData;
}

type AnimationDirection = 'right-to-left' | 'left-to-right';

// const personalDropdownData: DropdownData = [
//   { heading: 'AI Chatbots & Assistants', links: [{ text: '70', href: '#' }] },
//   { heading: 'AI Image & Graphics', links: [{ text: '77', href: '#' }] },
//   { heading: 'Business Automation', links: [{ text: '22', href: '#' }] },
//   { heading: 'Content Creation', links: [{ text: '52', href: '#' }] },
//   { heading: 'Data & Analytics', links: [{ text: '10', href: '#' }] },
//   { heading: 'Design & Creative', links: [{ text: '25', href: '#' }] },
//   { heading: 'Developer & Programming', links: [{ text: '56', href: '#' }] },
//   { heading: 'E-commerce & Retail', links: [{ text: '4', href: '#' }] },
//   { heading: 'Education & Learning', links: [{ text: '4', href: '#' }] },
//   { heading: 'Finance & Legal', links: [{ text: '21', href: '#' }] },
//   { heading: 'Gaming & Entertainment', links: [{ text: '5', href: '#' }] },
//   { heading: 'HR & Recruitment', links: [{ text: '9', href: '#' }] },
//   { heading: 'Health & Wellness', links: [{ text: '7', href: '#' }] },
//   { heading: 'Marketing & Sales', links: [{ text: '28', href: '#' }] },
//   { heading: 'Productivity & Organization', links: [{ text: '32', href: '#' }] },
//   { heading: 'Real Estate & Property', links: [{ text: '6', href: '#' }] },
//   { heading: 'Research & Knowledge', links: [{ text: '27', href: '#' }] },
//   { heading: 'Security & Privacy', links: [{ text: '1', href: '#' }] },
//   { heading: 'Specialized Industry', links: [{ text: '63', href: '#' }] },
//   { heading: 'Travel & Lifestyle', links: [{ text: '6', href: '#' }] },
//   { heading: 'Video & Animation', links: [{ text: '25', href: '#' }] },
//   { heading: 'Voice & Audio', links: [{ text: '24', href: '#' }] },
// ];
const personalDropdownData: DropdownData = [
  { links: [{ text: 'AI Chatbots & Assistants (70)', href: '#' }] },
  { links: [{ text: 'AI Image & Graphics (77)', href: '#' }] },
  { links: [{ text: 'Business Automation (22)', href: '#' }] },
  { links: [{ text: 'Content Creation (52)', href: '#' }] },
  { links: [{ text: 'Data & Analytics (10)', href: '#' }] },
  { links: [{ text: 'Design & Creative (25)', href: '#' }] },
  { links: [{ text: 'Developer & Programming (56)', href: '#' }] },
  { links: [{ text: 'E-commerce & Retail (4)', href: '#' }] },
  { links: [{ text: 'Education & Learning (4)', href: '#' }] },
  { links: [{ text: 'Finance & Legal (21)', href: '#' }] },
  { links: [{ text: 'Gaming & Entertainment (5)', href: '#' }] },
  { links: [{ text: 'HR & Recruitment (9)', href: '#' }] },
  { links: [{ text: 'Health & Wellness (7)', href: '#' }] },
  { links: [{ text: 'Marketing & Sales (28)', href: '#' }] },
  { links: [{ text: 'Productivity & Organization (32)', href: '#' }] },
  { links: [{ text: 'Real Estate & Property (6)', href: '#' }] },
  { links: [{ text: 'Research & Knowledge (27)', href: '#' }] },
  { links: [{ text: 'Security & Privacy (1)', href: '#' }] },
  { links: [{ text: 'Specialized Industry (63)', href: '#' }] },
  { links: [{ text: 'Travel & Lifestyle (6)', href: '#' }] },
  { links: [{ text: 'Video & Animation (25)', href: '#' }] },
  { links: [{ text: 'Voice & Audio (24)', href: '#' }] },
];


// const businessDropdownData: DropdownData = [
//     { heading: 'Team Management', links: [{ text: 'Add Members', href: '#' }, { text: 'Roles & Permissions', href: '#' }] },
//     { heading: 'Workflow', links: [{ text: 'Automation', href: '#' }, { text: 'Custom Fields', href: '#' }] },
//     { heading: 'Admin Tools', links: [{ text: 'Usage Analytics', href: '#' }] },
//     { heading: 'Enterprise', links: [{ text: 'Contact Sales', href: '#' }] },
// ];

const businessDropdownData: DropdownData = [
  { links: [{ text: 'AI Chatbots & Assistants', href: '#' }] },
  { links: [{ text: 'AI Image & Graphics Tools', href: '#' }] },
  { links: [{ text: 'Business Automation Tools', href: '#' }] },
  { links: [{ text: 'Content Creation Tools', href: '#' }] },
  { links: [{ text: 'Data & Analytics Tools', href: '#' }] },
  { links: [{ text: 'Design & Creative Tools', href: '#' }] },
  { links: [{ text: 'Developer & Programming Tools', href: '#' }] },
  { links: [{ text: 'E-commerce & Retail Tools', href: '#' }] },
  { links: [{ text: 'Education & Learning Tools', href: '#' }] },
  { links: [{ text: 'Finance & Legal Tools', href: '#' }] },
  { links: [{ text: 'Gaming & Entertainment Tools', href: '#' }] },
  { links: [{ text: 'HR & Recruitment Tools', href: '#' }] },
  { links: [{ text: 'Health & Wellness Tools', href: '#' }] },
  { links: [{ text: 'Marketing & Sales Tools', href: '#' }] },
  { links: [{ text: 'Productivity & Organization Tools', href: '#' }] },
  { links: [{ text: 'Real Estate & Property Tools', href: '#' }] },
  { links: [{ text: 'Research & Knowledge Tools', href: '#' }] },
  { links: [{ text: 'Security & Privacy Tools', href: '#' }] },
  { links: [{ text: 'Specialized Industry Tools', href: '#' }] },
  { links: [{ text: 'Travel & Lifestyle Tools', href: '#' }] },
  { links: [{ text: 'Video & Animation Tools', href: '#' }] },
  { links: [{ text: 'Voice & Audio Tools', href: '#' }] },
];


const communityDropdownData: DropdownData = [
    { heading: 'Your Profile', links: [{ text: 'Dashboard', href: '#' }, { text: 'Achievements', href: '#' }] },
    { heading: 'Contribution', links: [{ text: 'Submit Content', href: '#' }, { text: 'Join Projects', href: '#' }] },
    { heading: 'Community', links: [{ text: 'Guidelines', href: '#' }] },
];

const companyDropdownData: DropdownData = [
    { heading: 'About Us', links: [{ text: 'Our Story', href: '#' }, { text: 'Careers', href: '#' }] },
    { heading: 'Partners', links: [{ text: 'Affiliate Program', href: '#' }, { text: 'API & Integrations', href: '#' }] },
    { heading: 'Legal', links: [{ text: 'Terms of Service', href: '#' }, { text: 'Privacy Policy', href: '#' }] },
];


const menuItems: MenuItem[] = [
    { label: 'Products', href: '#', dropdownData: personalDropdownData },
    { label: 'Categories', href: '#', dropdownData: businessDropdownData },
    { label: 'Tags', href: '#' },
    { label: 'Blog', href: '#' },
];

export const Navbar: React.FC = () => {
    const [activeMenuItemIndex, setActiveMenuItemIndex] = useState<number | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [animationDirection, setAnimationDirection] = useState<AnimationDirection>('right-to-left');
    const closeTimeoutRef = useRef<number | null>(null);
    const prevActiveMenuItemIndex = useRef<number | null>(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [mobileActiveDropdownIndex, setMobileActiveDropdownIndex] = useState<number | null>(null);

    useEffect(() => {
        if (activeMenuItemIndex !== null && prevActiveMenuItemIndex.current !== null) {
            if (activeMenuItemIndex > prevActiveMenuItemIndex.current) {
                setAnimationDirection('right-to-left');
            } else {
                setAnimationDirection('left-to-right');
            }
        } else {
            setAnimationDirection('right-to-left');
        }
        prevActiveMenuItemIndex.current = activeMenuItemIndex;
    }, [activeMenuItemIndex]);


    const openDropdown = (index: number) => {
        if (closeTimeoutRef.current !== null) {
            clearTimeout(closeTimeoutRef.current);
        }
        setActiveMenuItemIndex(index);
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 100) as unknown as number;
    };

     const handleDropdownTransitionEnd = () => {
        if (!isDropdownOpen) {
            setActiveMenuItemIndex(null);
             prevActiveMenuItemIndex.current = null;
        }
     };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        if (!newState) {
             setMobileActiveDropdownIndex(null);
        }
    };

    const toggleMobileDropdown = (index: number) => {
        setMobileActiveDropdownIndex(mobileActiveDropdownIndex === index ? null : index);
    };

     const handleMobileLinkClick = () => {
         setIsMobileMenuOpen(false);
         setMobileActiveDropdownIndex(null);
     };

     useEffect(() => {
         if (isMobileMenuOpen) {
             document.body.style.overflow = 'hidden';
         } else {
             document.body.style.overflow = 'unset';
         }
         return () => {
              document.body.style.overflow = 'unset';
         };
     }, [isMobileMenuOpen]);


    const contentVariants: { [key in AnimationDirection]: Variants } = {
        'right-to-left': {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0, transition: { opacity: { duration: 0.2 }, x: { duration: 0.3, ease: 'easeOut' } } },
            exit: { opacity: 0, x: -100, transition: { opacity: { duration: 0.2 }, x: { duration: 0.3, ease: 'easeIn' } } },
        },
        'left-to-right': {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0, transition: { opacity: { duration: 0.2 }, x: { duration: 0.3, ease: 'easeOut' } } },
            exit: { opacity: 0, x: 100, transition: { opacity: { duration: 0.2 }, x: { duration: 0.3, ease: 'easeIn' } } },
        }
    };


    const containerVariants: Variants = {
        closed: { opacity: 0, pointerEvents: 'none' },
        open: { opacity: 1, pointerEvents: 'auto' },
    };

     const mobileMenuVariants: Variants = {
         closed: { x: '100%' },
         open: { x: '0%' },
     };

     const mobileDropdownVariants: Variants = {
         closed: { height: 0, opacity: 0, overflowY: 'hidden' },
         open: { height: 'auto', opacity: 1, overflowY: 'visible' },
     };


    return (
        <motion.nav className="relative bg-white text-black w-screen z-9999">
            <div className="flex items-center justify-between h-16 mx-auto px-4">
          <div className='flex items-baseline-last gap-5'>
            <div className="text-xl font-medium tracking-tight font-display">ai share</div>

                <ul
                    className="hidden md:flex list-none p-0 m-0 h-full"
                    onMouseLeave={closeDropdown}
                >
                    {menuItems.map((item, index) => (
                         <li
                            key={`desktop-menu-${index}`}
                            className={`flex items-center h-full relative text-sm`}
                            onMouseEnter={() => openDropdown(index)}
                         >
                             <a href={item.href} className={`px-3 py-2 ${activeMenuItemIndex === index && isDropdownOpen ? 'bg-neutral-100 rounded-full' : ''}`}>
                                 {item.label}
                             </a>
                             {activeMenuItemIndex === index && isDropdownOpen && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                             )}
                         </li>
                    ))}
                </ul>
          </div>

                <div className="hidden md:flex gap-3">
                    <button className="bg-transparent text-black px-4 py-2 cursor-pointer border border-neutral-200 rounded-full text-sm ">Log in</button>
                    <button className="bg-black text-white px-5 py-2 rounded-full cursor-pointer text-sm hover:shadow-[0px_5px_24px_-1px_rgba(0,0,0,0.3)] transition-all duration-200">Sign up</button>
                </div>

                 <button className="md:hidden text-white focus:outline-none" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                 </button>

            </div>

             <AnimatePresence>
             {isDropdownOpen && activeMenuItemIndex !== null && (
                 <motion.div
                     key="desktop-dropdown-container"
                     className="hidden md:block absolute top-16 left-0 right-0 bg-white shadow-lg/5"
                     initial="closed"
                     animate="open"
                     exit="closed"
                     variants={containerVariants}
                     transition={{ duration: 0.2, ease: easeOut }}
                     onMouseEnter={() => { if (closeTimeoutRef.current !== null) clearTimeout(closeTimeoutRef.current); }}
                     onMouseLeave={closeDropdown}
                     onAnimationComplete={handleDropdownTransitionEnd}
                 >
                      <AnimatePresence mode="wait">
                         {menuItems[activeMenuItemIndex]?.dropdownData && (
                             <motion.div
                                 key={`desktop-dropdown-content-${activeMenuItemIndex}`}
                                 variants={contentVariants[animationDirection]}
                                 initial="initial"
                                 animate="animate"
                                 exit="exit"
                                 className="max-w-screen-xl mx-auto py-5 pb-10"
                             >
                                 <a href="#" className="inline-block mb-4 text-lg font-display font-medium text-black">
                                     Explore {menuItems[activeMenuItemIndex]?.label ?? 'Item'} →
                                 </a>
                                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-0 gap-6">
                                     {menuItems[activeMenuItemIndex]?.dropdownData?.map((column, colIndex) => (
                                         <div key={`desktop-col-${colIndex}`}>
                                             <h3 className="mb-2 text-sm font-medium text-neutral-500">
                                                 {column.heading}
                                             </h3>
                                             <ul className="list-none p-0 m-0">
                                                 {column.links.map((link, linkIndex) => (
                                                     <li key={`desktop-link-${colIndex}-${linkIndex}`} className="mb-1">
                                                         <a href={link.href} className="block py-1 text-sm text-black hover:text-neutral-500 no-underline">
                                                             {link.text}
                                                         </a>
                                                     </li>
                                                 ))}
                                             </ul>
                                         </div>
                                     ))}
                                 </div>
                             </motion.div>
                         )}
                     </AnimatePresence>
                 </motion.div>
             )}
             </AnimatePresence>


             <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu-overlay"
                        className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                         onClick={(e) => {
                             if (e.target === e.currentTarget) {
                                 toggleMobileMenu();
                             }
                         }}
                    >
                        <motion.div
                            key="mobile-menu-content"
                            className="fixed top-0 right-0 h-full w-full bg-black shadow-lg flex flex-col p-6 text-white overflow-y-auto"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                             onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-4 right-4 text-white focus:outline-none" onClick={toggleMobileMenu} aria-label="Close mobile menu">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>

                            <ul className="list-none p-0 m-0 mt-8 flex flex-col gap-4">
                                {menuItems.map((item, index) => (
                                    <li key={`mobile-menu-${index}`}>
                                        {item.dropdownData ? (
                                            <>
                                                <button
                                                    className="flex justify-between items-center w-full text-left text-white font-bold py-2 focus:outline-none"
                                                    onClick={() => toggleMobileDropdown(index)}
                                                    aria-expanded={mobileActiveDropdownIndex === index}
                                                >
                                                    {item.label}
                                                    <svg className={`w-4 h-4 transform transition-transform duration-200 ${mobileActiveDropdownIndex === index ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                </button>
                                                 <AnimatePresence>
                                                    {mobileActiveDropdownIndex === index && item.dropdownData && (
                                                         <motion.div
                                                             key={`mobile-dropdown-content-${index}`}
                                                             initial="closed"
                                                             animate="open"
                                                             exit="closed"
                                                             variants={mobileDropdownVariants}
                                                             transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                             className="mt-2 pl-4 border-l border-gray-600"
                                                         >
                                                             {item.dropdownData.map((column, colIndex) => (
                                                                 <div key={`mobile-col-${colIndex}`} className="mb-4">
                                                                     <h4 className="text-xs font-semibold text-neutral-500 mb-1">{column.heading}</h4>
                                                                     <ul className="list-none p-0 m-0 flex flex-col gap-1">
                                                                         {column.links.map((link, linkIndex) => (
                                                                             <li key={`mobile-link-${colIndex}-${linkIndex}`}>
                                                                                 <a href={link.href} className="block py-1 text-sm text-gray-300 hover:text-white no-underline" onClick={handleMobileLinkClick}>
                                                                                     {link.text}
                                                                                 </a>
                                                                             </li>
                                                                         ))}
                                                                     </ul>
                                                                 </div>
                                                             ))}
                                                         </motion.div>
                                                    )}
                                                 </AnimatePresence>
                                            </>
                                        ) : (
                                            <a href={item.href ?? '#'} className="block text-white font-bold py-2 hover:text-gray-300 no-underline" onClick={handleMobileLinkClick}>
                                                 {item.label}
                                             </a>
                                        )}
                                    </li>
                                ))}
                                <li className="mt-4 pt-4 border-t border-gray-700 flex flex-col gap-3">
                                     <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:opacity-80 cursor-pointer" onClick={handleMobileLinkClick}>Log in</button>
                                     <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:opacity-90 cursor-pointer" onClick={handleMobileLinkClick}>Sign up</button>
                                 </li>

                            </ul>
                        </motion.div>
                    </motion.div>
                )}
             </AnimatePresence>

        </motion.nav>
    );
};
