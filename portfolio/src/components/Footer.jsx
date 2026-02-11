import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-rose-600 py-6 text-center text-white font-manrope">
            <div className="container mx-auto px-4">
                <p className="text-sm md:text-base font-medium mb-2">
                    © 2026 Ravi Shankar. Licensed under the MIT License.
                </p>
                <a
                    href="https://github.com/RaviShankar000/personal/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-rose-200 transition-colors duration-300"
                >
                    View the MIT License
                </a>
            </div>
        </footer>
    );
};

export default Footer;
