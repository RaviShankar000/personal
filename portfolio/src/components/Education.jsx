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
                    {/* Vertical line - positioned left on mobile, center on desktop */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <div key={edu.id} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ml-10 md:ml-0`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#020617] border-2 border-blue-500 rounded-full transform -translate-x-1/2 z-20 transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color}`} />
                                </div>

                                {/* Content Spacer for Desktop Alternating Layout */}
                                <div className="flex-1 hidden md:block" />

                                {/* Card */}
                                <div className="flex-1 w-full group">
                                    <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-slate-800/40 hover:border-white/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">

                                        {/* Glow Effect on Hover */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                        <div className="flex items-start gap-5 relative z-10">
                                            {/* Icon */}
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                {edu.icon}
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="font-syne text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                                    {edu.institution}
                                                </h3>
                                                <p className="font-manrope text-sm text-slate-400 mb-4">
                                                    {edu.degree}
                                                </p>

                                                <div className="flex items-center justify-between flex-wrap gap-3">
                                                    <span className="text-sm font-mono text-slate-200 bg-white/5 px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                                        {edu.duration}
                                                    </span>

                                                    {/* Gradient Badge - Fixed Visibility */}
                                                    <div className="relative px-3 py-1 rounded-full border border-white/10 overflow-hidden group/badge">
                                                        <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-20 group-hover/badge:opacity-30 transition-opacity`} />
                                                        <span className="relative z-10 text-xs font-bold text-white tracking-wide">
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
