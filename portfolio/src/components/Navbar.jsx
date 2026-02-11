import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Works', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#020617]/50 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="font-syne font-bold text-2xl text-slate-100 tracking-tighter">
                    RAVI SHANKAR<span className="text-blue-600">.</span>
                </a>

                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-manrope text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="px-6 py-2.5 bg-white text-[#020617] font-syne font-bold text-sm rounded-full 
            hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
}
