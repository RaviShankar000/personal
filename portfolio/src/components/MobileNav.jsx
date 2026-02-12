import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

// --- SVG ICON COMPONENTS ---
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.632 8.632a.75.75 0 01-1.06 1.06l-.353-.353V21.75A.75.75 0 0119 22.5H5a.75.75 0 01-.75-.75V13.18l-.353.353a.75.75 0 01-1.06-1.06l8.632-8.632z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
);

const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.182-.311a51.004 51.004 0 016.89-3.432.75.75 0 01.624 1.372 49.509 49.509 0 00-5.115 2.378l2.915 1.542.49.259-.49.259a48.42 48.42 0 01-6.108 2.659.75.75 0 01-.606-1.397c1.884-.817 3.82-1.503 5.798-2.053v-2.074a49.526 49.526 0 01-11.002-2.68.75.75 0 01.232-1.337A60.653 60.653 0 0111.7 2.805z" />
    </svg>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
);

const BoltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5h-9zM4.5 5.25v13.5a3 3 0 003 3h9a3 3 0 003-3V5.25a3 3 0 00-3-3h-9a3 3 0 00-3 3zm9.75 6.75a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0v-3.75zm-4.5 0a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0v-3.75z" clipRule="evenodd" />
        <path d="M6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75z" />
    </svg>
);

const EnvelopeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

export default function MobileNav() {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', icon: HomeIcon, label: 'Home' },
        { id: 'about', icon: UserIcon, label: 'About' },
        { id: 'education', icon: EducationIcon, label: 'Education' },
        { id: 'achievements', icon: TrophyIcon, label: 'Awards' },
        { id: 'skills', icon: BoltIcon, label: 'Skills' },
        { id: 'works', icon: BriefcaseIcon, label: 'Works' },
        { id: 'contact', icon: EnvelopeIcon, label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:hidden">
            <nav className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-black/50 overflow-x-auto">
                <div className="flex items-center justify-between p-2 min-w-max mx-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${isActive
                                    ? 'text-blue-500'
                                    : 'text-slate-400 hover:text-white'
                                    } ${item.id === 'hero' ? 'hidden md:block' : ''}`}
                            >
                                <div className={`p-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-blue-500/10' : 'bg-transparent'}`}>
                                    <Icon />
                                </div>
                                <span className={`text-[10px] mt-1 font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-slate-500'}`}>
                                    {item.label}
                                </span>

                                {/* Active Indicator Dot */}
                                {isActive && (
                                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
