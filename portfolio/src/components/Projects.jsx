import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from './Marquee';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: '01',
        title: 'E-Commerce Platform',
        category: 'Full Stack Development',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        description: 'A scalable online store with real-time inventory management.'
    },
    {
        id: '02',
        title: 'Financial Dashboard',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        description: 'Interactive data visualization for financial analytics.'
    },
    {
        id: '03',
        title: 'Social Media App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
        description: 'Real-time social networking platform with chat features.'
    },
    {
        id: '04',
        title: 'AI Content Generator',
        category: 'Machine Learning',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        description: 'Generative AI tool for automating content creation.'
    }
];

export default function Projects() {
    const sectionRef = useRef(null);
    const projectRefs = useRef([]);
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate project items
            projectRefs.current.forEach((project, index) => {
                gsap.from(project, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: project,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="bg-[#020617] text-white overflow-hidden pb-32">
            {/* Marquee Separator */}
            <div className="py-20 opacity-80 mix-blend-screen">
                <Marquee text="SELECTED WORKS • " speed={0.5} outline={true} direction="left" />
            </div>

            <div className="max-w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sticky Sidebar */}
                <div className="lg:col-span-3 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center border-r border-slate-800/50 pr-8">
                    <p className="font-manrope text-sm tracking-[0.2em] text-blue-500 mb-4 uppercase">
                        Projects (0{projects.length})
                    </p>
                    <h2 className="font-syne text-5xl font-bold leading-tight mb-8">
                        Featured <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #cbd5e1' }}>Creation</span>
                    </h2>
                    <p className="font-manrope text-slate-400 text-sm leading-relaxed mb-8">
                        A curated selection of projects that showcase my passion for clean code and user-centric design.
                    </p>
                    <a href="#github" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors group">
                        <span className="font-syne font-bold uppercase tracking-wider text-sm">View All Works</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                {/* Projects List */}
                <div className="lg:col-span-9 space-y-32 pt-12 lg:pt-32">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            ref={el => projectRefs.current[i] = el}
                            className="group relative"
                            onMouseEnter={() => setActiveProject(i)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-8 bg-slate-900">
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="font-syne text-blue-500 text-lg">({project.id})</span>
                                        <span className="font-manrope text-xs tracking-widest uppercase text-slate-500 border border-slate-700 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="font-syne text-3xl md:text-5xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="md:max-w-xs">
                                    <p className="font-manrope text-slate-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
