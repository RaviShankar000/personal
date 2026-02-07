import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const bgTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
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

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/RaviShankar000' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/ravishakar000' },
        { name: 'Twitter', url: 'https://twitter.com/yourusername' },
        { name: 'Email', url: 'mailto:kravishankarpatro@gmail.com' }
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-[#020617] overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

            {/* Large decorative background text */}
            <div
                ref={bgTextRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            >
                <h2
                    className="font-syne text-[15vw] font-black text-transparent leading-none tracking-tighter opacity-30"
                    style={{ WebkitTextStroke: '2px #1e293b' }}
                >
                    CONTACT
                </h2>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto w-full text-center" ref={contentRef}>
                <h2 className="font-syne text-5xl md:text-7xl font-bold mb-8 text-slate-100">
                    Let's Work <br />
                    <span className="text-blue-600">Together</span>
                </h2>

                <p className="font-manrope text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Have a project in mind? I'm always open to new opportunities and interesting projects.
                </p>

                <a
                    href="mailto:kravishankarpatro@gmail.com"
                    className="inline-block font-syne text-3xl md:text-5xl font-bold text-slate-200 hover:text-blue-500 transition-colors duration-300 border-b-2 border-slate-700 hover:border-blue-500 pb-2 mb-20"
                >
                    kravishankarpatro@gmail.com
                </a>

                {/* Social links */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-manrope text-sm uppercase tracking-widest text-slate-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mt-32 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm font-manrope">
                    <p>© 2026 Ravi Shankar</p>
                    <p>Designed & Built with React</p>
                </div>
            </div>
        </section>
    );
}
