import { Circle, Sparkles, Monitor, Code2, Cloud, Database } from 'lucide-react';

export const FILTER_CATEGORIES = [
  {
    id: 'types',
    label: 'Types',
    icon: <Circle className="w-4 h-4" />,
    options: [
      { id: 'agency', label: 'Agency' },
      { id: 'ai', label: 'AI' },
      { id: 'apple-watch', label: 'Apple Watch App' },
      { id: 'architecture', label: 'Architecture' },
      { id: 'art', label: 'Art' },
      { id: 'automotive', label: 'Automotive' },
      { id: 'bar', label: 'Bar' },
      { id: 'beauty', label: 'Beauty' },
      { id: 'case-study', label: 'Case Study' },
      { id: 'communication', label: 'Communication' },
      { id: 'community', label: 'Community' },
      { id: 'conference', label: 'Conference' },
      { id: 'construction', label: 'Construction' },
      { id: 'craft', label: 'Craft' },
      { id: 'crypto', label: 'Crypto' },
      { id: 'design', label: 'Design' },
      { id: 'education', label: 'Education' },
      { id: 'ecommerce', label: 'E-commerce' },
    ]
  },
  {
    id: 'styles',
    label: 'Styles',
    icon: <Sparkles className="w-4 h-4" />,
    options: [
      { id: 'minimal', label: 'Minimal' },
      { id: 'brutalist', label: 'Brutalist' },
      { id: 'gradient', label: 'Gradient' },
      { id: '3d', label: '3D' },
      { id: 'dark-mode', label: 'Dark Mode' },
      { id: 'clean', label: 'Clean' },
      { id: 'colorful', label: 'Colorful' },
      { id: 'monochrome', label: 'Monochrome' },
    ]
  },
  {
    id: 'platforms',
    label: 'Platforms',
    icon: <Monitor className="w-4 h-4" />,
    options: [
      { id: 'desktop', label: 'Desktop' },
      { id: 'mobile', label: 'Mobile' },
      { id: 'tablet', label: 'Tablet' },
      { id: 'web-app', label: 'Web App' },
      { id: 'ios', label: 'iOS' },
      { id: 'android', label: 'Android' },
    ]
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: <Code2 className="w-4 h-4" />,
    options: [
      { id: 'nextjs', label: 'Next.js' },
      { id: 'react', label: 'React' },
      { id: 'vue', label: 'Vue' },
      { id: 'astro', label: 'Astro' },
      { id: 'remix', label: 'Remix' },
      { id: 'svelte', label: 'Svelte' },
    ]
  },
  {
    id: 'hosting',
    label: 'Hosting',
    icon: <Cloud className="w-4 h-4" />,
    options: [
      { id: 'vercel', label: 'Vercel' },
      { id: 'netlify', label: 'Netlify' },
      { id: 'aws', label: 'AWS' },
      { id: 'digital-ocean', label: 'Digital Ocean' },
      { id: 'google-cloud', label: 'Google Cloud' },
    ]
  },
  {
    id: 'cms',
    label: 'CMS',
    icon: <Database className="w-4 h-4" />,
    options: [
      { id: 'contentful', label: 'Contentful' },
      { id: 'sanity', label: 'Sanity' },
      { id: 'strapi', label: 'Strapi' },
      { id: 'wordpress', label: 'WordPress' },
      { id: 'ghost', label: 'Ghost' },
      { id: 'webflow', label: 'Webflow' },
    ]
  }
];
