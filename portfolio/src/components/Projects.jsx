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
        tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
        links: { demo: '#', code: 'https://github.com/RaviShankar000/q-commerce' },
        overview: 'A hyper-local delivery platform designed for high-frequency grocery needs, simulating a real-world ecosystem with role-based orchestration for Users, Pickers, and Riders.',
        problem: 'Standard e-commerce lacks the real-time urgency of quick commerce. The challenge was to build a system that minimizes latencies between order placement, packing, and dispatch.',
        techStack: {
            Frontend: 'React (Vite), Tailwind CSS, Redux Toolkit',
            Backend: 'Node.js, Express.js, Socket.io',
            Database: 'MongoDB (Geospatial Indexing)',
            Auth: 'JWT, Role-Based Access Control (RBAC)'
        },
        features: [
            'Live order tracking with bi-directional Socket.io communication',
            'Four distinct role-based dashboards (Admin, Manager, Picker, Rider)',
            'Real-time inventory locking and concurrency management',
            'Geospatial allocation of orders to nearest riders'
        ],
        challenges: [
            'Handling race conditions when multiple users book the last item.',
            'Synchronizing state across four different user dashboards in real-time.',
            'Optimizing extensive MongoDB aggregate queries for analytics.'
        ],
        outcome: 'Achieved <200ms latency on status updates and successfully simulated a high-concurrency delivery environment, strengthening proficiency in distributed system logic.'
    },
    {
        id: '02',
        title: 'AI Stress Analysis System',
        category: 'AI & Machine Learning',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        tags: ['Python', 'Scikit-learn', 'React', 'MongoDB', 'Flask'],
        links: { demo: '#', code: 'https://github.com/RaviShankar000' },
        overview: 'An intelligent diagnostic tool that quantifies student academic stress levels using Machine Learning models trained on comprehensive survey data.',
        problem: 'Academic counseling often relies on subjective reporting. This system needed to provide data-driven insights to identify at-risk students early.',
        techStack: {
            Frontend: 'React, Recharts for Visualization',
            Backend: 'Flask (Python API), Node.js (Gateway)',
            ML_Model: 'Scikit-learn (Random Forest Classifier)',
            Database: 'MongoDB'
        },
        features: [
            'Predictive stress classification (Low, Medium, High) with 85% accuracy',
            'Interactive visualizations of stress factors vs. academic performance',
            'Batch processing of student survey data',
            'Secure counselor dashboard for reviewing predictions'
        ],
        challenges: [
            'Addressing class imbalance in the student stress dataset.',
            'Seamlessly integrating a Python ML inference engine with a Node.js backend.',
            'Designing intuitive visualizations for complex multi-dimensional data.'
        ],
        outcome: 'Built a functional prototype that assists counselors in making evidence-based decisions, demonstrating the practical application of AI in education.'
    },
    {
        id: '03',
        title: 'Personal Portfolio',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        tags: ['React', 'Tailwind CSS', 'GSAP', 'Vite'],
        links: { demo: '#', code: 'https://github.com/RaviShankar000' },
        overview: 'A high-performance personal brand website showcasing technical skills through interactive design, 3D elements, and a polish UI/UX.',
        problem: 'Generic portfolios fail to demonstrate engineering capability. The goal was to create a site that acts as a live testament to frontend engineering skills.',
        techStack: {
            Frontend: 'React, Tailwind CSS',
            Animation: 'GSAP (ScrollTrigger, Tween)',
            Performance: 'Vite, Code Splitting'
        },
        features: [
            'Custom magnetic cursor and interactive 3D background elements',
            'High-performance scroll-based animations (60fps)',
            'Fully responsive glassmorphism design system',
            'Modular component architecture for maintainability'
        ],
        challenges: [
            'Optimizing expensive DOM manipulations for mobile devices.',
            'Creating a cohesive theme that supports both light and dark modes seamlessly.',
            'Implementing complex entrance animations without layout thrashing.'
        ],
        outcome: 'Delivers a professional brand image with specific focus on performance metrics and user engagement, achieving high Lighthouse scores.'
    }
];

const ProjectCard = ({ project, index, total, isExpanded, onToggle }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current || window.innerWidth < 768) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPct = (x / rect.width - 0.5) * 20; // -10 to 10 deg
        const yPct = (y / rect.height - 0.5) * -20; // -10 to 10 deg

        setTilt({ x: yPct, y: xPct });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div
            className="sticky transition-all duration-700 ease-out"
            style={{
                top: `calc(10vh + ${index * 40}px)`,
                marginBottom: isExpanded ? '40vh' : '10vh', // Extra space when expanded
                zIndex: index + 1
            }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`group relative bg-[#0f172a]/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 shadow-2xl ${isExpanded ? 'scale-[1.02] ring-1 ring-blue-500/50' : 'hover:-translate-y-4'
                    }`}
                style={{
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Glow Effect */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{
                        background: `radial-gradient(600px circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, rgba(59,130,246,0.15), transparent 40%)`
                    }}
                />

                {/* Main Content */}
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:p-10">

                    {/* Image Area */}
                    <div className="lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-slate-950 shadow-inner group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-syne text-blue-400 font-bold tracking-wide">0{index + 1}</span>
                            <span className="px-3 py-1 text-xs font-manrope uppercase tracking-wider text-slate-400 border border-slate-700 rounded-full bg-slate-800/30">
                                {project.category}
                            </span>
                        </div>

                        <h3 className="font-syne text-3xl md:text-5xl font-bold text-slate-100 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                            {project.title}
                        </h3>

                        <p className="font-manrope text-slate-400 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                            {project.overview}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-manrope text-slate-300 bg-white/5 border border-white/5 px-3 py-1 rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 mt-auto">
                            <button
                                onClick={() => onToggle(project.id)}
                                className="flex items-center gap-2 text-white font-syne font-bold hover:text-blue-400 transition-colors"
                            >
                                {isExpanded ? 'Close Case Study' : 'View Case Study'}
                                <span className={`text-xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
                            </button>

                            <div className="h-4 w-px bg-white/10" />

                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white font-syne font-bold hover:text-blue-400 transition-colors"
                            >
                                Live Demo
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all ml-auto lg:ml-0">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Expanded Content (Accordion) */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out bg-black/40 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 lg:p-12 border-t border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Problem */}
                            <div>
                                <h4 className="font-syne text-lg font-bold text-white mb-3">The Challenge</h4>
                                <p className="font-manrope text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                            </div>

                            {/* Features */}
                            <div>
                                <h4 className="font-syne text-lg font-bold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                    {project.features.map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-400 font-manrope">
                                            <span className="text-blue-500">▹</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="font-syne text-lg font-bold text-white mb-3">Technology</h4>
                                <div className="space-y-2">
                                    {Object.entries(project.techStack).map(([k, v]) => (
                                        <div key={k} className="flex flex-col">
                                            <span className="text-xs uppercase tracking-wider text-blue-500/80">{k}</span>
                                            <span className="text-sm text-slate-300">{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <h4 className="font-syne text-lg font-bold text-white mb-2">Outcome</h4>
                            <p className="font-manrope text-green-400/90 text-sm bg-green-900/10 border border-green-500/20 p-4 rounded-xl">
                                {project.outcome}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const sectionRef = useRef(null);
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section ref={sectionRef} id="works" className="relative bg-[#020617] text-white overflow-visible pb-40">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617] pointer-events-none" />

            <div className="py-20 relative z-10">
                <Marquee text="SELECTED WORKS • ENGINEERING • " speed={0.5} outline={true} direction="left" />
            </div>

            <div className="max-w-[95vw] lg:max-w-6xl mx-auto px-4 lg:px-0">
                {/* Header */}
                <div className="text-center mb-24">
                    <p className="font-manrope text-sm tracking-[0.3em] text-blue-500 mb-6 uppercase animate-pulse">
                        Case Studies
                    </p>
                    <h2 className="font-syne text-[clamp(2rem,9vw,4.5rem)] md:text-6xl lg:text-8xl font-black leading-[0.9] mb-8">
                        FEATURED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">PROJECTS</span>
                    </h2>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            total={projects.length}
                            isExpanded={expandedId === project.id}
                            onToggle={toggleExpand}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
