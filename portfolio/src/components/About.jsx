import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: '01',
        title: 'Full Stack Development',
        description: 'Building scalable MERN stack applications with secure authentication, role-based dashboards, REST APIs, and real-time features.'
    },
    {
        id: '02',
        title: 'Backend & System Design',
        description: 'Designing robust backend architectures, database schemas, and optimized APIs for high-performance web applications.'
    },
    {
        id: '03',
        title: 'AI & Data-Driven Applications',
        description: 'Developing intelligent systems using Python and machine learning to analyze, predict, and generate meaningful insights from data.'
    },
    {
        id: '04',
        title: 'Problem Solving & DSA',
        description: 'Solving algorithmic challenges using C++ and Java, with strong fundamentals in data structures and optimization.'
    }
];

export default function About() {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            itemsRef.current.forEach((item, index) => {
                gsap.from(item, {
                    y: 30, // Reduced distance
                    opacity: 0,
                    duration: 0.6, // Faster duration
                    ease: 'power2.out', // Snappier ease
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%', // Trigger sooner
                        toggleActions: 'play none none reverse'
                    },
                    delay: index * 0.1 // Reduced delay
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative py-32 bg-[#020617] text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* NEW: About Me Bio Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    {/* Left: Profile Photo */}
                    <div className="lg:col-span-5 relative group">
                        <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] border-2 border-white/10 shadow-2xl">
                            <img
                                src="/profile.png"
                                alt="Ravi Shankar Patro"
                                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-0" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl -z-0" />
                        <div className="absolute top-10 -right-4 w-24 h-24 border-2 border-white/5 rounded-full z-0" />
                    </div>

                    {/* Right: Bio & Links */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <p className="font-manrope text-sm tracking-[0.2em] text-blue-500 mb-4 uppercase">
                                Who I Am
                            </p>
                            <h2 className="font-syne text-4xl lg:text-6xl font-bold leading-tight mb-6">
                                Crafting scalable <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                    digital solutions.
                                </span>
                            </h2>
                        </div>

                        <div className="font-manrope text-slate-400 text-lg leading-relaxed space-y-6">
                            <p>
                                I’m <strong className="text-white">Ravi Shankar Patro</strong>, a Computer Science undergraduate at Koneru Lakshmaiah University (GPA: 9.33). I specialize in developing secure, scalable, and user-focused web applications using React, Node.js, and modern database systems.
                            </p>
                            <p>
                                I have hands-on experience building real-time systems like a multi-role Q-Commerce platform with live order tracking and scalable REST APIs. With a strong foundation in Data Structures, OOP, DBMS, and backend architecture, I focus on writing clean, maintainable code that performs efficiently in real-world environments.
                            </p>
                            <p>
                                Currently preparing for software development roles where I can contribute to building production-ready systems and scalable backend services.
                            </p>
                        </div>

                        {/* Buttons & Socials */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <a
                                href="/image.png"
                                download="Ravi_Shankar_CV.png"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-syne font-bold text-sm rounded-full transition-all duration-300 shadow-lg shadow-blue-600/25 flex items-center gap-2 group"
                            >
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:translate-y-0.5 transition-transform">
                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M2.25 21.75a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/RaviShankar000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                                    aria-label="GitHub"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com/in/ravishankarpatro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Header for What I Do */}
                <div className="mb-20">
                    <h2 className="font-syne text-[clamp(2.5rem,5vw,5rem)] font-bold leading-none text-slate-100">
                        WHAT I DO
                    </h2>
                    <div className="h-1 w-24 bg-blue-600 mt-6" />
                </div>

                {/* Services List */}
                <div className="space-y-12">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            ref={el => itemsRef.current[i] = el}
                            className="group relative border-t border-slate-800 pt-12 transition-all duration-500 hover:border-blue-600/50"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                                {/* Number */}
                                <span className="col-span-1 md:col-span-2 font-syne text-4xl text-slate-600 group-hover:text-blue-500 transition-colors duration-300">
                                    ({service.id})
                                </span>

                                {/* Title */}
                                <h3 className="col-span-1 md:col-span-5 font-syne text-3xl md:text-5xl font-bold group-hover:translate-x-4 transition-transform duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="col-span-1 md:col-span-5 font-manrope text-slate-400 text-lg leading-relaxed max-w-md">
                                    {service.description}
                                </p>

                                {/* Hover Icon */}
                                <div className="absolute top-12 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 text-blue-500">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
