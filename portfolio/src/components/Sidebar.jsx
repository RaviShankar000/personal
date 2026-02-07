import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [darkMode, setDarkMode] = useState(true);

    const navItems = [
        { id: 'hero', icon: '🏠', label: 'Home' },
        { id: 'about', icon: '👤', label: 'About' },
        { id: 'education', icon: '🎓', label: 'Education' },
        { id: 'achievements', icon: '🏆', label: 'Achievements' },
        { id: 'skills', icon: '⚡', label: 'Skills' },
        { id: 'works', icon: '💼', label: 'Works' },
        { id: 'contact', icon: '📧', label: 'Contact' },
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

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('light-mode');
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-20 bg-slate-900/80 backdrop-blur-xl border-r border-slate-800 z-50 flex flex-col items-center py-8">
            {/* Logo/Brand */}
            <div className="mb-12">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    R
                </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 flex flex-col gap-6">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeSection === item.id
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                        aria-label={item.label}
                    >
                        <span className="text-xl">{item.icon}</span>

                        {/* Tooltip */}
                        <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                            {item.label}
                            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800" />
                        </div>
                    </button>
                ))}
            </nav>

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group"
                aria-label="Toggle dark mode"
            >
                <span className="text-xl">{darkMode ? '🌙' : '☀️'}</span>

                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800" />
                </div>
            </button>
        </aside>
    );
}
