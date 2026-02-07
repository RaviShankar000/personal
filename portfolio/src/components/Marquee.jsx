import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee = ({ text, outline = false, speed = 1, direction = 'left', className = '' }) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        const scrollContent = Array.from(scroller.children);

        // Duplicate content to create seamless loop
        scrollContent.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.ariaHidden = true;
            scroller.appendChild(clone);
        });

        const totalWidth = scroller.scrollWidth / 2;

        gsap.to(scroller, {
            x: direction === 'left' ? -totalWidth : 0,
            duration: 20 / speed,
            ease: "none",
            repeat: -1,
            modifier: direction === 'right' ? (x) => {
                const xVal = parseFloat(x);
                return `${xVal % totalWidth - totalWidth}px`;
            } : undefined
        });
    }, [speed, direction]);

    return (
        <div
            ref={containerRef}
            className={`relative flex overflow-hidden whitespace-nowrap py-4 ${className}`}
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
            <div ref={scrollerRef} className="flex gap-8 items-center">
                {[1, 2, 3, 4].map((i) => (
                    <span
                        key={i}
                        className={`text-[8vw] md:text-[10vw] font-bold uppercase leading-none ${outline
                            ? 'text-transparent stroke-text'
                            : 'text-slate-200'
                            }`}
                        style={outline ? {
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                        } : {}}
                    >
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
