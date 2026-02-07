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
            icon: '🏫',
            institution: 'DAV Public School',
            degree: 'SSC, CBSE',
            duration: 'Mar 2020 - Apr 2021',
            grade: 'GRADE - 81.2%',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            icon: '🏫',
            institution: 'D.A.V. Public School',
            degree: 'CBSE, Applied Mathematics',
            duration: 'Apr 2021 - Mar 2023',
            grade: 'GRADE - 76%',
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            icon: '🎓',
            institution: 'KL University',
            degree: 'BTech CSE',
            duration: '2023 - 2027',
            grade: 'GRADE - 9.32 CGPA',
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <section
            id="education"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="font-syne text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        EDUCATION
                    </h2>
                    <p className="font-manrope text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        My academic journey and achievements
                    </p>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                    {/* Education items */}
                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <div key={edu.id} className="relative flex gap-8 group">
                                {/* Timeline dot */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${edu.color}`} />
                                    </div>
                                </div>

                                {/* Content card */}
                                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                                            {edu.icon}
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1">
                                            <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-1">
                                                {edu.institution}
                                            </h3>
                                            <p className="font-manrope text-base md:text-lg text-slate-300 mb-2">
                                                {edu.degree}
                                            </p>
                                            <p className="font-manrope text-sm text-slate-400 mb-3">
                                                {edu.duration}
                                            </p>
                                            <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-10 border border-opacity-30`}>
                                                <p className="font-syne text-sm font-bold text-white">
                                                    {edu.grade}
                                                </p>
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
