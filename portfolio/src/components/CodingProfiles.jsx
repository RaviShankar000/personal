import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const profiles = [
    {
        platform: 'GitHub',
        username: 'RaviShankar000',
        stats: '50+ Repositories | Active Contributor',
        link: 'https://github.com/RaviShankar000',
        color: 'from-slate-700 to-slate-900',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]',
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        )
    },
    {
        platform: 'LeetCode',
        username: '6eoSbxJLjw',
        stats: '200+ Problems Solved',
        link: 'https://leetcode.com/u/6eoSbxJLjw/',
        color: 'from-orange-400 to-yellow-600',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.24 4.24a1.374 1.374 0 0 0 0 1.942l4.24 4.24a1.374 1.374 0 0 0 1.942 0l4.24-4.24a1.374 1.374 0 0 0 0-1.942L14.444.414A1.374 1.374 0 0 0 13.483 0zm-5.45 6.452l-1.94 1.94a1.374 1.374 0 0 0 0 1.942l4.24 4.24a1.374 1.374 0 0 0 1.942 0l1.94-1.94-1.94-1.94-4.24-4.242zm-5.45 5.451l-1.94 1.94a1.374 1.374 0 0 0 0 1.942l4.24 4.24a1.374 1.374 0 0 0 1.942 0l1.94-1.94-1.94-1.94-4.24-4.242z" />
            </svg>
        )
    },
    {
        platform: 'Codeforces',
        username: 'ravishankar82923',
        stats: '900+ Rating',
        link: 'https://codeforces.com/profile/ravishankar82923',
        color: 'from-blue-400 to-blue-600',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.5 7.5h3v15h-3v-15zm4.5-4.5h3v19.5h-3V3zm4.5 9h3v10.5h-3V12z" />
            </svg>
        )
    },
    {
        platform: 'CodeChef',
        username: 'ravi_patro',
        stats: '2★ | 150+ Problems Solved',
        link: 'https://www.codechef.com/users/ravi_patro',
        color: 'from-amber-700 to-amber-900',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(180,83,9,0.25)]',
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 4.5v15c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-15c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zM9 13l-4 4h14l-4-4H9z" />
            </svg>
        )
    }
];

export default function CodingProfiles() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="coding-profiles"
            ref={sectionRef}
            className="relative py-32 px-6 bg-[#020617] overflow-hidden"
        >
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-20 px-4">
                    <p className="font-manrope text-sm tracking-[0.2em] text-blue-500 mb-4 uppercase">
                        Digital Footprint
                    </p>
                    <h2 className="block w-fit mx-auto font-syne text-[clamp(1.2rem,2.8vw,4.5rem)] font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight whitespace-nowrap px-4">
                        Coding Profiles
                    </h2>
                    <p className="font-manrope text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        My competitive programming and open-source presence
                    </p>
                </div>

                {/* Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {profiles.map((profile) => (
                        <div
                            key={profile.platform}
                            className={`group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 ${profile.glowColor}`}
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-white shadow-lg`}>
                                    {profile.icon}
                                </div>
                                <div className="text-right">
                                    <h3 className="font-syne text-2xl font-bold text-white mb-1">
                                        {profile.platform}
                                    </h3>
                                    <p className="font-manrope text-slate-400 text-sm">
                                        @{profile.username}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="font-manrope text-slate-300 text-lg">
                                    {profile.stats}
                                </p>
                            </div>

                            <a
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-syne font-bold text-sm group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 gap-2"
                            >
                                Visit Profile
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
