import { Service, PortfolioItem, Client } from './index';

export const servicesData: Service[] = [
    { icon: 'code', title: 'Web Development', description: 'Modern and scalable web solutions using the latest technologies.' },
    { icon: 'figma', title: 'UI/UX Design', description: 'Intuitive and beautiful user interfaces designed with care.' },
    { icon: 'server', title: 'Backend Solutions', description: 'Robust and secure backend systems to power your applications.' },
    { icon: 'search', title: 'SEO Optimization', description: 'Improve your visibility on search engines and attract more users.' },
];

export const portfolioData: PortfolioItem[] = [
    {
      slug: 'gym-website-1',
      image: 'https://placehold.co/600x400/1e293b/ffffff?text=Project+One',
      title: 'gym-website',
      description: 'A complete overhaul of a major corporate website, focusing on modern UI/UX principles and performance.',
      tags: ['UI/UX', 'Next.js', 'Webflow']
    },
    {
      slug: 'gym-website-2',
      image: 'https://placehold.co/600x400/475569/ffffff?text=Project+Two',
      title: 'E-commerce Platform',
      description: 'A feature-rich e-commerce platform with a custom CMS and integrated payment gateways.',
      tags: ['React', 'Node.js', 'E-commerce']
    },
    {
      slug: 'gym-website-3',
      image: 'https://placehold.co/600x400/64748b/ffffff?text=Project+Three',
      title: 'Mobile Banking App',
      description: 'A secure and user-friendly mobile banking application for iOS and Android.',
      tags: ['Mobile App', 'FinTech', 'Security']
    },
    {
      slug: 'gym-website-4',
      image: 'https://placehold.co/600x400/94a3b8/ffffff?text=Project+Four',
      title: 'SaaS Dashboard',
      description: 'A complex data visualization dashboard for a SaaS product, providing key business insights.',
      tags: ['SaaS', 'Data Viz', 'React']
    },
];

export const clientsData: Client[] = [
    { icon: 'star', name: 'Starlight Inc.', description: 'Innovative Tech Solutions' },
    { icon: 'settings', name: 'Gearhead Labs', description: 'Mechanical Engineering Firm' },
    { icon: 'globe', name: 'Terra Firma', description: 'Global Logistics Company' },
];
