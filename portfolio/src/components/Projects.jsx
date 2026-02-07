import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from './Marquee';

gsap.registerPlugin(ScrollTrigger);

// Custom Hook for Tilt Effect
function useTilt(ref) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation (inverted for natural feel)
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(el, {
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)"
            });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
}

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    useTilt(cardRef); // Apply tilt effect

    return (
        <div
            ref={cardRef}
            className="group relative w-full aspect-[4/3] bg-slate-800 rounded-2xl overflow-hidden cursor-pointer"
        >
            {/* Image with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="font-syne text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="font-manrope text-slate-300">{project.category}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            </div>

            {/* Number */}
            <span className="absolute top-6 left-6 font-syne text-6xl text-white/5 font-bold pointer-events-none">
                0{index + 1}
            </span>
        </div>
    );
};

export default function Projects() {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".pin-sidebar",
                pinSpacing: false
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const projects = [
        { title: "Neon Cyber", category: "Web Experience", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" },
        { title: "Future Finance", category: "App Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" },
        { title: "Zen Space", category: "Architecture", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" },
        { title: "Apex Gear", category: "E-Commerce", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop" }
    ];

    return (
        <section ref={containerRef} id="projects" className="relative bg-[#020617] text-white py-24">
            <Marquee text="SELECTED WORKS • " outline={true} speed={0.5} className="mb-20 opacity-20" />

            <div ref={triggerRef} className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-12">
                {/* Sticky Sidebar */}
                <div className="lg:col-span-2 lg:h-[80vh] flex flex-col justify-center pin-sidebar">
                    <p className="font-manrope text-blue-500 tracking-widest uppercase mb-4">Projects (04)</p>
                    <h2 className="font-syne text-7xl md:text-8xl font-bold leading-[0.9] mb-8">
                        Featured <br /> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px white' }}>Creation</span>
                    </h2>
                    <p className="font-manrope text-slate-400 max-w-sm text-lg">
                        A curated selection of projects that showcase my passion for clean code and immersive design.
                    </p>
                </div>

                {/* Scrollable Projects Grid */}
                <div className="lg:col-span-3 space-y-24 pt-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
