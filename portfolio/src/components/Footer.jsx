import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#020617] py-4 border-t border-white/5 font-manrope">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>
                    © 2026 Ravi Shankar. Licensed under the MIT License.
                </p>
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
