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
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.438.227 2.945.271 4.502.012.449-.022.898-.103 1.337a.75.75 0 01-1.472-.257 58.267 58.267 0 00-.097-3.64 48.243 48.243 0 01-5.148 2.375.75.75 0 01-1.117-.935z" />
        <path d="M9.596 13.522a49.02 49.02 0 01-2.209-4.82 49.19 49.19 0 00-2.169 4.386.75.75 0 001.282.68c.277-.523.57-1.026.877-1.506.49 1.83 1.05 3.567 1.666 5.186.136.356.326.696.565 1.004.223.287.497.536.81.74a7.65 7.65 0 01-1.79-1.38c-.372-.373-.708-.787-1-1.23-.292-.444-.543-.92-.746-1.42a17.476 17.476 0 01-.286-.84z" />
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

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
);

export default function Sidebar({ darkMode, toggleDarkMode }) {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', icon: HomeIcon, label: 'Home' },
        { id: 'about', icon: UserIcon, label: 'About' },
        { id: 'education', icon: EducationIcon, label: 'Education' },
        { id: 'achievements', icon: TrophyIcon, label: 'Achievements' },
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
        <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-slate-900/80 backdrop-blur-xl border-r border-slate-800 z-50 flex-col items-center py-8 transition-colors duration-300">
            {/* Logo/Brand */}
            <div className="mb-12">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    R
                </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 flex flex-col gap-6">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeSection === item.id
                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                            aria-label={item.label}
                        >
                            <Icon />

                            {/* Tooltip */}
                            <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
                                {item.label}
                                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800" />
                            </div>
                        </button>
                    );
                })}
            </nav>

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group shadow-md"
                aria-label="Toggle dark mode"
            >
                {darkMode ? <MoonIcon /> : <SunIcon />}

                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800" />
                </div>
            </button>
        </aside>
    );
}
