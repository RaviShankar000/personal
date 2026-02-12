import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const orbs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Dramatic text reveal with 3D rotation
            tl.from(textRef.current.children, {
                y: 150,
                opacity: 0,
                rotationX: -90,
                transformOrigin: "50% 50% -100px",
                stagger: 0.15,
                duration: 1.8,
                ease: 'power4.out',
                delay: 0.3
            })
                .from(subRef.current, {
                    y: 30,
                    opacity: 0,
                    scale: 0.8,
                    duration: 1.2,
                    ease: 'back.out(1.7)'
                }, '-=1')
                .from(ctaRef.current, {
                    scale: 0,
                    opacity: 0,
                    rotation: 180,
                    duration: 1,
                    ease: 'elastic.out(1, 0.5)'
                }, '-=0.5');

            // Parallax scroll effects
            gsap.to(textRef.current, {
                y: -150,
                scale: 0.9,
                opacity: 0.3,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });

            // Animated gradient orbs
            orbs.current.forEach((orb, i) => {
                gsap.to(orb, {
                    x: `random(-100, 100)`,
                    y: `random(-100, 100)`,
                    scale: `random(0.8, 1.2)`,
                    duration: `random(4, 8)`,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: i * 0.3
                });
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden"
        >
            {/* Animated Gradient Orbs */}
            <div ref={el => orbs.current[0] = el} className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-[120px] animate-pulse" />
            <div ref={el => orbs.current[1] = el} className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px]" />
            <div ref={el => orbs.current[2] = el} className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-[80px]" />

            {/* Floating 3D Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[15%] w-20 h-20 border-2 border-blue-500/30 rounded-lg rotate-45 animate-spin-slow"
                    style={{ animationDuration: '20s' }} />
                <div className="absolute top-[60%] right-[20%] w-16 h-16 border-2 border-purple-500/30 rounded-full animate-bounce"
                    style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-[30%] left-[25%] w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg rotate-12 animate-pulse" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">

                {/* Main Heading with 3D Effect */}
                <div ref={textRef} className="mb-8 perspective-1000 flex flex-col items-center">
                    <h1 className="font-syne text-[clamp(2.5rem,12vw,6rem)] sm:text-7xl md:text-[clamp(4rem,10vw,10rem)] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-2 md:mb-4">
                        <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x whitespace-nowrap">
                            RAVI
                        </span>
                    </h1>
                    <h1 className="font-syne text-[clamp(2.5rem,12vw,6rem)] sm:text-7xl md:text-[clamp(4rem,10vw,10rem)] font-black leading-[0.9] md:leading-[0.85] tracking-tighter">
                        <span className="inline-block text-transparent whitespace-nowrap"
                            style={{
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)',
                                textShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
                            }}>
                            SHANKAR
                        </span>
                    </h1>
                </div>

                {/* Subtitle with Glitch Effect */}
                <div ref={subRef} className="space-y-6 mb-12 px-4">
                    <div className="font-manrope text-lg md:text-2xl text-blue-300/90 tracking-[0.2em] md:tracking-[0.3em] uppercase font-light relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
                        <span className="relative inline-block whitespace-nowrap">
                            Full Stack Engineer
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-shimmer" />
                        </span>
                        <span className="hidden md:inline mx-4 text-blue-500/50">|</span>
                        <span className="relative inline-block whitespace-nowrap">
                            Backend Architecture
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-shimmer"
                                style={{ animationDelay: '0.5s' }} />
                        </span>
                    </div>

                    <p className="font-manrope text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
                        Building scalable, production-grade web systems with a focus on high-performance APIs and distributed architecture.
                    </p>
                </div>

                {/* CTA Buttons with 3D Hover */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 w-full max-w-md mx-auto sm:max-w-none">
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-syne font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]"
                    >
                        <span className="relative z-10">Explore My Work</span>
                        <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    </a>

                    <a
                        href="#" // TODO: Replace with resume link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:py-5 bg-transparent border border-blue-500/30 text-blue-300 font-syne font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                    >
                        <span className="relative z-10">Download Resume</span>
                        <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-12" />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-slate-500 font-manrope text-sm tracking-widest uppercase">Scroll</span>
                    <div className="w-6 h-10 border-2 border-slate-700 rounded-full p-1">
                        <div className="w-1.5 h-3 bg-blue-500 rounded-full mx-auto animate-scroll" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(12px); opacity: 0; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
                .animate-scroll {
                    animation: scroll 2s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin 20s linear infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
