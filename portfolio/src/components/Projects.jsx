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

        // Case Study Data
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

export default function Projects() {
    const sectionRef = useRef(null);
    const projectRefs = useRef([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section ref={sectionRef} id="projects" className="bg-[#020617] text-white overflow-hidden pb-32">
            <div className="py-20">
                <Marquee text="SELECTED WORKS • ENGINEERING • " speed={0.5} outline={true} direction="left" />
            </div>

            <div className="max-w-[95vw] lg:max-w-7xl mx-auto px-4 lg:px-0">

                {/* Section Header */}
                <div className="flex flex-col lg:items-center lg:text-center mb-16 lg:mb-32">
                    <p className="font-manrope text-sm tracking-[0.2em] text-blue-500 mb-4 uppercase">
                        Case Studies
                    </p>
                    <h2 className="font-syne text-5xl lg:text-7xl font-bold leading-tight mb-8">
                        Featured <br className="lg:hidden" />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #cbd5e1' }}>Engineering</span>
                    </h2>
                    <p className="font-manrope text-slate-400 text-sm lg:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                        Deep dives into the architecture and problem-solving behind my key projects.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-16">
                    {projects.map((project, i) => {
                        const isExpanded = expandedId === project.id;
                        return (
                            <div
                                key={project.id}
                                ref={el => projectRefs.current[i] = el}
                                className={`group relative bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/10 ${isExpanded ? 'bg-slate-900' : ''}`}
                            >
                                {/* Main Summary Card (Always Visible) */}
                                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 lg:p-12 ${i % 2 === 1 && !isExpanded ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Image */}
                                    <div className="lg:w-1/2 relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-slate-950">
                                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                        />
                                    </div>

                                    {/* Summary Info */}
                                    <div className="lg:w-1/2 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-syne text-blue-500 text-lg font-bold">Project {project.id}</span>
                                            <span className="px-3 py-1 text-xs font-manrope uppercase tracking-wider text-slate-400 border border-slate-700 rounded-full">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className="font-syne text-3xl md:text-4xl font-bold text-slate-100 mb-6 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="font-manrope text-slate-400 text-base leading-relaxed mb-8">
                                            {project.overview}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs font-manrope text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <button
                                                onClick={() => toggleExpand(project.id)}
                                                className="flex items-center gap-2 text-white font-syne font-bold text-sm hover:text-blue-400 transition-colors"
                                            >
                                                {isExpanded ? 'Hide Details' : 'View Case Study'}
                                                <span className={`text-xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
                                            </button>

                                            <div className="h-4 w-px bg-slate-700" />

                                            {/* Live Demo Link */}
                                            <a
                                                href="#"
                                                // TODO: Replace with actual Live Demo link after deployment
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white font-syne font-bold text-sm hover:text-blue-400 transition-colors"
                                            >
                                                Live Demo
                                            </a>

                                            <div className="h-4 w-px bg-slate-700" />

                                            <div className="flex gap-4">
                                                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Case Study Details */}
                                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 lg:p-12 pt-0 border-t border-white/5 bg-black/20">

                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
                                            {/* Column 1: Problem & Stack */}
                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="font-syne text-xl font-bold text-white mb-4">Problem Statement</h4>
                                                    <p className="font-manrope text-slate-400 text-sm leading-relaxed">
                                                        {project.problem}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-syne text-xl font-bold text-white mb-4">Tech Stack</h4>
                                                    <ul className="space-y-2">
                                                        {Object.entries(project.techStack).map(([key, value]) => (
                                                            <li key={key} className="flex flex-col">
                                                                <span className="text-xs text-blue-500 uppercase tracking-widest font-bold">{key}</span>
                                                                <span className="text-sm text-slate-300 font-manrope">{value}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Column 2: Key Features */}
                                            <div>
                                                <h4 className="font-syne text-xl font-bold text-white mb-4">Key Features</h4>
                                                <ul className="space-y-3">
                                                    {project.features.map((feature, idx) => (
                                                        <li key={idx} className="flex gap-3 text-sm text-slate-400 font-manrope">
                                                            <span className="text-blue-500 mt-1">▹</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Column 3: Challenges & Outcome */}
                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="font-syne text-xl font-bold text-white mb-4">Technical Challenges</h4>
                                                    <ul className="space-y-3">
                                                        {project.challenges.map((challenge, idx) => (
                                                            <li key={idx} className="flex gap-3 text-sm text-slate-400 font-manrope">
                                                                <span className="text-red-400/80 mt-1">!</span>
                                                                {challenge}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-syne text-xl font-bold text-white mb-4">Outcome</h4>
                                                    <p className="font-manrope text-slate-300 text-sm leading-relaxed border-l-2 border-green-500 pl-4">
                                                        {project.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer Actions */}
                                        <div className="flex justify-end mt-12 pt-8 border-t border-dashed border-slate-800">
                                            <a
                                                href={project.links.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-syne font-bold text-sm rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20"
                                            >
                                                View Source Code
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
