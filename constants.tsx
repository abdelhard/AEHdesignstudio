
import React from 'react';
import { Project, Service, Testimonial, ProjectCategory, BlogPost, TeamMember } from './types';

// Icons for Services
const BuildingIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4m6 4v-4m6 4v-4m-9 4H3m2 0h5M9 7h6m-6 4h6m-6 4h6" />
    </svg>
);

const ChairIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
    </svg>
);

const VideoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const WandIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
    </svg>
);

export const SERVICES_DATA: Service[] = [
    {
        icon: <BuildingIcon />,
        title: 'Realistic 3D Visualization',
        description: 'High-fidelity interior and exterior visualizations that bring architectural concepts to life with stunning realism and detail.',
    },
    {
        icon: <ChairIcon />,
        title: 'Product & Furniture Design',
        description: 'From concept to final render, I create detailed 3D models and visualizations for products and furniture, perfect for marketing and prototyping.',
    },
    {
        icon: <VideoIcon />,
        title: '3D Animation & Video',
        description: 'Dynamic 3D animations and fly-throughs that provide an immersive experience of architectural spaces and product features.',
    },
    {
        icon: <WandIcon />,
        title: 'AI-Assisted Workflows',
        description: 'Leveraging cutting-edge AI tools to accelerate the creative process, from initial concept generation to final post-production enhancements.',
    },
];

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: 'Modern Lakeside Residence',
        category: ProjectCategory.Exterior,
        images: ['https://picsum.photos/seed/project1a/800/600', 'https://picsum.photos/seed/project1b/800/600', 'https://picsum.photos/seed/project1c/800/600'],
        description: 'A full exterior visualization for a contemporary home situated by a serene lake, focusing on material realism and natural lighting.',
        context: 'Architectural proposal for a private client.',
        client: 'Private Client',
        role: 'Lead 3D Artist',
        tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    },
    {
        id: 2,
        title: 'Scandinavian Loft Interior',
        category: ProjectCategory.Interior,
        images: ['https://picsum.photos/seed/project2a/800/600', 'https://picsum.photos/seed/project2b/800/600'],
        description: 'Interior design visualization for a spacious loft apartment, emphasizing minimalist aesthetics, natural materials, and cozy ambiance.',
        context: 'Collaboration with an interior design firm.',
        client: 'OCF (France)',
        role: 'Visualization Specialist',
        tools: ['Blender', 'Cycles', 'Affinity Photo'],
    },
    {
        id: 3,
        title: 'Ergonomic Office Chair "Aura"',
        category: ProjectCategory.Product,
        images: ['https://picsum.photos/seed/project3a/800/600', 'https://picsum.photos/seed/project3b/800/600', 'https://picsum.photos/seed/project3c/800/600', 'https://picsum.photos/seed/project3d/800/600'],
        description: 'Product visualization for a new line of ergonomic office chairs. The focus was on showcasing the design, materials, and functionality.',
        context: 'Marketing materials for a new product launch.',
        client: 'PLOGG (Canada)',
        role: '3D Modeler & Visualization Artist',
        tools: ['Cinema 4D', 'Redshift', 'Photoshop'],
    },
    {
        id: 4,
        title: 'Urban High-Rise Fly-through',
        category: ProjectCategory.Animation,
        images: ['https://picsum.photos/seed/project4a/800/600'],
        description: 'A short animated video showcasing a proposed high-rise building in a dense urban environment, highlighting its integration with the cityscape.',
        context: 'Promotional video for a real estate developer.',
        client: 'Urban Developments Inc.',
        role: 'Animator & Compositor',
        tools: ['Unreal Engine 5', 'DaVinci Resolve'],
    },
    {
        id: 5,
        title: 'Corporate Lobby Redesign',
        category: ProjectCategory.Interior,
        images: ['https://picsum.photos/seed/project5a/800/600', 'https://picsum.photos/seed/project5b/800/600', 'https://picsum.photos/seed/project5c/800/600'],
        description: 'Visualization of a redesigned corporate lobby, featuring a green wall, modern furniture, and bespoke lighting fixtures.',
        context: 'Design proposal for a corporate client.',
        client: 'PLOGG (Canada)',
        role: '3D Artist',
        tools: ['3ds Max', 'V-Ray', 'Photoshop'],
    },
    {
        id: 6,
        title: 'Alpine Retreat Cabin',
        category: ProjectCategory.Exterior,
        images: ['https://picsum.photos/seed/project6a/800/600', 'https://picsum.photos/seed/project6b/800/600'],
        description: 'Exterior shots of a secluded cabin in the mountains, rendered in both summer and winter settings to showcase its year-round appeal.',
        context: 'Marketing imagery for a vacation rental company.',
        client: 'Mountain Escapes',
        role: 'Lead 3D Artist',
        tools: ['Blender', 'Cycles', 'GIMP'],
    },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "The realism and attention to detail in the renderings were exceptional. It helped our clients visualize the project perfectly before breaking ground.",
        author: 'Marc Dubois',
        company: 'Lead Architect, OCF (France)',
    },
    {
        quote: "A true professional who delivers outstanding quality on time. The product visualizations elevated our marketing campaign to a new level.",
        author: 'Jessica Chen',
        company: 'Product Manager, PLOGG (Canada)',
    },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
    {
        id: 1,
        title: 'The Role of AI in Architectural Visualization',
        category: 'AI in Design',
        image: 'https://picsum.photos/seed/blog1/800/600',
        excerpt: 'Exploring how artificial intelligence is revolutionizing the creation of 3D renderings, from generative design to automated post-production.',
        date: 'October 15, 2023',
    },
    {
        id: 2,
        title: 'Mastering Photorealism in 3ds Max & Corona',
        category: 'Tutorials',
        image: 'https://picsum.photos/seed/blog2/800/600',
        excerpt: 'A deep dive into the techniques and settings used to achieve breathtaking realism in your architectural visualizations.',
        date: 'September 28, 2023',
    },
    {
        id: 3,
        title: 'Future Trends: What\'s Next for 3D ArchViz?',
        category: 'Industry Insights',
        image: 'https://picsum.photos/seed/blog3/800/600',
        excerpt: 'From real-time rendering in Unreal Engine 5 to virtual reality experiences, we look at the technologies shaping the future of the industry.',
        date: 'August 10, 2023',
    },
];

export const TEAM_DATA: TeamMember[] = [
    {
        id: 1,
        name: 'Alex E. Hayes',
        role: 'Lead 3D Artist',
        image: 'https://picsum.photos/seed/portrait/500/500',
        bio: 'The visionary behind the studio, specializing in hyper-realistic architectural visualization and leading every project to perfection.',
    },
    {
        id: 2,
        name: 'Elena Vasileva',
        role: '2D Designer & Post-Production',
        image: 'https://picsum.photos/seed/team2/500/500',
        bio: 'Brings renderings to life with expert color grading, compositing, and a keen eye for atmospheric detail.',
    },
    {
        id: 3,
        name: 'Kenji Tanaka',
        role: 'Computer Graphics Artist',
        image: 'https://picsum.photos/seed/team3/500/500',
        bio: 'A master of materials, lighting, and textures, ensuring every surface and shadow achieves maximum realism.',
    },
];
