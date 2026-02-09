import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Social Media Icons as SVG Components
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
);

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

export default function Contact() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current.children,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
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

    const contactMethods = [
        {
            name: 'LinkedIn',
            icon: LinkedInIcon,
            value: 'Ravi Shankar',
            url: 'https://www.linkedin.com/in/ravi-shankar-7670962ab/',
            color: 'from-blue-500 to-blue-600'
        },
        {
            name: 'GitHub',
            icon: GitHubIcon,
            value: 'RaviShankar000',
            url: 'https://github.com/RaviShankar000',
            color: 'from-slate-600 to-slate-700'
        },
        {
            name: 'Instagram',
            icon: InstagramIcon,
            value: '@ravi_patroo',
            url: 'https://www.instagram.com/ravi_patroo/',
            color: 'from-pink-500 to-purple-600'
        },
        {
            name: 'Telegram',
            icon: TelegramIcon,
            value: '@ravi_31387',
            url: 'https://t.me/ravi_31387',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            name: 'Twitter',
            icon: TwitterIcon,
            value: '@shankar_pa24834',
            url: 'https://x.com/shankar_pa24834',
            color: 'from-sky-400 to-blue-500'
        },
        {
            name: 'Email',
            icon: EmailIcon,
            value: '2300031387cseird@gmail.com',
            url: 'mailto:2300031387cseird@gmail.com',
            color: 'from-red-500 to-orange-600'
        }
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
            {/* Animated background gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-6xl mx-auto w-full" ref={contentRef}>
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="font-syne text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="font-manrope text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Let's Connect! 👋
                    </p>
                    <p className="font-manrope text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                        I'd love to hear from you! Whether you have a question or just want to chat, feel free to drop me a message.
                    </p>
                </div>

                {/* Two Column Layout: Social Cards + Contact Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column: Social Cards */}
                    <div>
                        <h3 className="font-syne text-2xl font-bold text-white mb-6">Direct Contact</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <a
                                        key={method.name}
                                        href={method.url}
                                        target={method.name !== 'Email' ? '_blank' : undefined}
                                        rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                        className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-800 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] overflow-hidden"
                                    >
                                        {/* Gradient overlay on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                        <div className="relative flex items-center gap-4">
                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h4 className="font-syne text-sm font-bold text-slate-300 mb-0.5 group-hover:text-white transition-colors">
                                                    {method.name}
                                                </h4>
                                                <p className="font-manrope text-xs text-slate-500 group-hover:text-slate-400 transition-colors break-all">
                                                    {method.value}
                                                </p>
                                            </div>

                                            {/* Arrow icon */}
                                            <svg
                                                className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div>
                        <h3 className="font-syne text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <form className="space-y-4">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                required
                            />

                            {/* Message */}
                            <textarea
                                placeholder="Your Message"
                                rows="6"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                required
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-syne font-bold rounded-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Send Message 🚀
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-32 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm font-manrope">
                    <p>© 2026 Ravi Shankar. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Designed & Built with
                        <span className="text-red-500 animate-pulse">❤️</span>
                        using React
                    </p>
                </div>
            </div>
        </section>
    );
}
