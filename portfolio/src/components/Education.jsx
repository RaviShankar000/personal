import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                timelineRef.current.children,
                { x: -60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const educationData = [
        {
            id: 1,
            icon: '🎓',
            institution: 'KL University',
            degree: 'BTech CSE',
            duration: '2023 - 2027',
            grade: '9.32 CGPA',
            color: 'from-blue-400 to-cyan-400'
        },
        {
            id: 2,
            icon: '🏫',
            institution: 'D.A.V. Public School',
            degree: 'CBSE, Applied Mathematics',
            duration: 'Apr 2021 - Mar 2023',
            grade: '76%',
            color: 'from-violet-400 to-fuchsia-400'
        },
        {
            id: 3,
            icon: '🎒',
            institution: 'DAV Public School',
            degree: 'SSC, CBSE',
            duration: 'Mar 2020 - Apr 2021',
            grade: '81.2%',
            color: 'from-emerald-400 to-teal-400'
        }
    ];

    return (
        <section
            id="education"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-[#020617] overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="font-syne text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        Education
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Vertical line - positioned left on mobile, center on desktop with glow */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                    <div className="space-y-12 lg:space-y-24">
                        {educationData.map((edu, index) => (
                            <div key={edu.id} className={`relative flex flex-col md:flex-row gap-8 lg:gap-20 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ml-10 md:ml-0`}>

                                {/* Timeline Dot with Pulse */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 lg:w-6 lg:h-6 bg-[#020617] border-2 border-blue-500 rounded-full transform -translate-x-1/2 z-20 transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center group-hover:scale-125 transition-transform">
                                    <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r ${edu.color}`} />
                                </div>

                                {/* Content Spacer for Desktop Alternating Layout */}
                                <div className="flex-1 hidden md:block" />

                                {/* Card */}
                                <div className="flex-1 w-full group lg:max-w-[550px]">
                                    <div className="relative bg-slate-900/40 lg:bg-white/5 backdrop-blur-xl border border-white/5 lg:border-white/10 rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 hover:bg-slate-800/40 lg:hover:bg-white/10 hover:border-white/10 lg:hover:border-white/20 transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-blue-900/20">

                                        {/* Glow Effect on Hover */}
                                        <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                        <div className="flex items-start gap-5 lg:gap-8 relative z-10 flex-col lg:flex-row">
                                            {/* Icon */}
                                            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl lg:text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                {edu.icon}
                                            </div>

                                            <div className="flex-1 w-full">
                                                <h3 className="font-syne text-xl lg:text-3xl font-bold text-white mb-1 lg:mb-2 group-hover:text-blue-400 transition-colors">
                                                    {edu.institution}
                                                </h3>
                                                <p className="font-manrope text-sm lg:text-lg text-slate-400 mb-4 lg:mb-6 font-medium">
                                                    {edu.degree}
                                                </p>

                                                <div className="flex items-center justify-between flex-wrap gap-3 lg:gap-4 mt-auto">
                                                    <span className="text-sm lg:text-base font-mono text-slate-200 bg-white/5 px-3 py-1 lg:px-4 lg:py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors shadow-sm">
                                                        {edu.duration}
                                                    </span>

                                                    {/* Gradient Badge */}
                                                    <div className="relative px-3 py-1 lg:px-4 lg:py-1.5 rounded-full border border-white/10 overflow-hidden group/badge shadow-md">
                                                        <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-20 group-hover/badge:opacity-30 transition-opacity`} />
                                                        <span className="relative z-10 text-xs lg:text-sm font-bold text-white tracking-wide">
                                                            GRADE: {edu.grade}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
