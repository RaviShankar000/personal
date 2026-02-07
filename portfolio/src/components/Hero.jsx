import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subRef = useRef(null);
    const shapesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Initial reveal
            tl.from(textRef.current.children, {
                y: 100,
                opacity: 0,
                rotationX: 45,
                stagger: 0.1,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.5
            })
                .from(subRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=1');

            // Parallax on scroll
            gsap.to(textRef.current, {
                y: -100,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });

            // Floating shapes animation
            shapesRef.current.forEach((shape, i) => {
                gsap.to(shape, {
                    y: `random(-20, 20)`,
                    x: `random(-20, 20)`,
                    rotation: `random(-10, 10)`,
                    duration: 3 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden"
        >
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[90vw] mx-auto flex flex-col items-center justify-center text-center">

                {/* Main Heading Group */}
                <div ref={textRef} className="perspective-1000 mb-8">
                    <h1 className="font-syne text-[clamp(4rem,10vw,12rem)] font-extrabold leading-[0.9] tracking-tight text-slate-100 mix-blend-overlay opacity-90">
                        RAVI
                    </h1>
                    <h1
                        className="font-syne text-[clamp(4rem,10vw,12rem)] font-extrabold leading-[0.9] tracking-tight text-transparent"
                        style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)' }}
                    >
                        SHANKAR
                    </h1>
                </div>

                {/* Subtitle / Role */}
                <div ref={subRef} className="space-y-6">
                    <p className="font-manrope text-lg md:text-xl text-blue-200/80 tracking-widest uppercase text-sm">
                        Full Stack Developer & Creative Coder
                    </p>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="inline-block px-10 py-4 bg-blue-600 text-white font-syne font-bold text-lg rounded-full 
                        hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    >
                        Let's Create
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-10 flex items-center gap-4 rotate-[-90deg] origin-left">
                <span className="text-slate-500 font-manrope text-sm tracking-widest uppercase">Scroll Down</span>
                <div className="w-12 h-[1px] bg-slate-700" />
            </div>

            <style>{`
                .font-syne { font-family: 'Syne', sans-serif; }
                .font-manrope { font-family: 'Manrope', sans-serif; }
            `}</style>
        </section>
    );
}
