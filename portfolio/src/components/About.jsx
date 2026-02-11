import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: '01',
        title: 'Full Stack Development',
        description: 'Building comprehensive web applications using MERN stack with focus on scalability and performance.'
    },
    {
        id: '02',
        title: 'Interactive Design',
        description: 'Creating immersive user experiences with WebGL, Three.js, and smooth GSAP animations.'
    },
    {
        id: '03',
        title: 'System Architecture',
        description: 'Designing robust backend systems and database structures for complex data requirements.'
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
                {/* Section Header */}
                <div className="mb-20">
                    <h2 className="font-syne text-[clamp(3rem,6vw,6rem)] font-bold leading-none text-slate-100">
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
