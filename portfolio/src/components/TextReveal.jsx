import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = '', delay = 0 }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const element = textRef.current;
        const text = element.textContent;
        element.innerHTML = '';

        // Split text into characters
        const chars = text.split('').map((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(100px) rotateX(-90deg)';
            element.appendChild(span);
            return span;
        });

        // Animate characters
        gsap.to(chars, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.02,
            delay: delay,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, [delay]);

    return (
        <div ref={textRef} className={className}>
            {children}
        </div>
    );
};

export default TextReveal;
