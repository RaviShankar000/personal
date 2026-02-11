import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from './Marquee';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: '01',
        title: 'Q-Commerce Platform',
        category: 'Full Stack Development',
        image: 'https://images.unsplash.com/photo-1588965353379-90b132588a50?q=80&w=2072&auto=format&fit=crop',
        description: 'Real-time grocery delivery system with live order tracking, role-based dashboards, and scalable REST APIs using React, Node.js, and MongoDB.',
        tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
        links: { demo: '#', code: 'https://github.com/RaviShankar000' }
    },
    {
        id: '02',
        title: 'AI Stress Analysis System',
        category: 'AI & Machine Learning',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        description: 'Predicting academic stress levels from survey data using Python, Scikit-learn, and React-based visualization dashboards.',
        tags: ['Python', 'Scikit-learn', 'React', 'MongoDB', 'Flask'],
        links: { demo: '#', code: 'https://github.com/RaviShankar000' }
    },
    {
        id: '03',
        title: 'Personal Portfolio',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        description: 'A modern, responsive portfolio website featuring glassmorphism, GSAP animations, and a custom dark theme.',
        tags: ['React', 'Tailwind CSS', 'GSAP', 'Vite'],
        links: { demo: '#', code: 'https://github.com/RaviShankar000' }
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
            <div className="py-20">
                <Marquee text="SELECTED WORKS • " speed={0.5} outline={true} direction="left" />
            </div>

            <div className="max-w-[90vw] lg:max-w-7xl mx-auto">
                {/* Header Section - Mobile: Sidebar style, Desktop: Centered Header */}
                <div className="flex flex-col lg:items-center lg:text-center mb-16 lg:mb-32">
                    <p className="font-manrope text-sm tracking-[0.2em] text-blue-500 mb-4 uppercase">
                        Projects (0{projects.length})
                    </p>
                    <h2 className="font-syne text-5xl lg:text-7xl font-bold leading-tight mb-8">
                        Featured <br className="lg:hidden" />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #cbd5e1' }}>Creation</span>
                    </h2>
                    <p className="font-manrope text-slate-400 text-sm lg:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                        A curated selection of projects that showcase my passion for clean code and user-centric design.
                    </p>
                    <a href="#github" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors group">
                        <span className="font-syne font-bold uppercase tracking-wider text-sm">View All Works</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                {/* Projects List */}
                <div className="space-y-32 lg:space-y-[120px]">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            ref={el => projectRefs.current[i] = el}
                            className={`group relative lg:flex lg:items-center lg:gap-16 lg:p-[60px] lg:bg-white/5 lg:border lg:border-white/5 lg:rounded-3xl lg:backdrop-blur-sm lg:hover:border-white/10 transition-all duration-500 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            onMouseEnter={() => setActiveProject(i)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            {/* Project Image Container - Desktop (60%) */}
                            <div className="lg:w-[60%] lg:h-[400px] relative aspect-[16/9] lg:aspect-auto w-full overflow-hidden rounded-xl mb-8 lg:mb-0 bg-slate-900 border border-white/5">
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                            </div>

                            {/* Project Info - Desktop (40%) */}
                            <div className="lg:w-[40%] flex flex-col md:flex-row lg:flex-col md:items-end lg:items-start justify-between gap-4 border-b lg:border-none border-slate-800 pb-6 lg:pb-0">
                                <div className="w-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="font-syne text-blue-500 text-lg">({project.id})</span>
                                        <span className="font-manrope text-xs tracking-widest uppercase text-slate-500 border border-slate-700 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="font-syne text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold group-hover:text-blue-400 transition-colors duration-300 mb-4 lg:mb-6">
                                        {project.title}
                                    </h3>

                                    <p className="font-manrope text-slate-400 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 lg:line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Pills - Desktop Only */}
                                    <div className="hidden lg:flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs font-manrope font-medium text-slate-300 bg-white/5 rounded-full border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Buttons - Desktop Only */}
                                    <div className="hidden lg:flex items-center gap-6">
                                        <a href={project.links.demo} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-syne font-bold text-sm rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20">
                                            View Project
                                        </a>
                                        <a
                                            href={project.links.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/20 font-syne font-bold text-sm rounded-full transition-all duration-300"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                {/* Mobile/Tablet Description (Hidden on Desktop) */}
                                <div className="md:max-w-xs lg:hidden">
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
