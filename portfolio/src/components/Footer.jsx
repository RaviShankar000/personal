import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#020617] py-8 border-t border-white/5 font-manrope mb-20 md:mb-0">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 text-center md:text-left">
                <p>
                    © 2026 Ravi Shankar. Licensed under the MIT License.
                </p>

                <a
                    href="#" // TODO: Replace with resume link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all font-syne font-bold"
                >
                    Download Resume
                </a>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <span className="flex items-center gap-1">
                        Designed & Built with <span className="text-red-500 animate-pulse">❤️</span> using React
                    </span>
                    <span className="hidden sm:inline text-slate-700">|</span>
                    <a
                        href="https://github.com/RaviShankar000/personal/blob/main/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors underline decoration-blue-500/30 underline-offset-4"
                    >
                        License
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
