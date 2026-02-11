import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#020617] py-8 text-center border-t border-white/5 font-manrope">
            <div className="container mx-auto px-4">
                <p className="text-sm text-slate-400 mb-2">
                    © 2026 Ravi Shankar. Licensed under the MIT License.
                </p>
                <a
                    href="https://github.com/RaviShankar000/personal/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors duration-300"
                >
                    View the MIT License
                </a>
            </div>
        </footer>
    );
};

export default Footer;
