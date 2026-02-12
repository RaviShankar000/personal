import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#020617] py-4 border-t border-white/5 font-manrope">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>
                    © 2026 Ravi Shankar. Licensed under the MIT License.
                </p>

                <a
                    href="#" // TODO: Replace with resume link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-4 md:my-0 px-4 py-2 border border-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all font-syne font-bold"
                >
                    Download Resume
                </a>

                <div className="flex items-center gap-1 mt-2 md:mt-0">
                    <span>Designed & Built with</span>
                    <span className="text-red-500">❤️</span>
                    <span>using React</span>
                    <span className="mx-2">|</span>
                    <a
                        href="https://github.com/RaviShankar000/personal/blob/main/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                    >
                        License
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
