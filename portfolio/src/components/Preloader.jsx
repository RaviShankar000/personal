import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
    const counterRef = useRef(null);
    const overlayRef = useRef(null);
    const shutterRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
                // Enable interactions after loader finishes
                overlayRef.current.style.pointerEvents = "none";
            }
        });

        // 1. Counter Animation (Simulation)
        tl.to({ val: 0 }, {
            val: 100,
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
                if (counterRef.current) counterRef.current.innerText = Math.round(this.targets()[0].val) + "%";
            }
        })
            .to(counterRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.in"
            })

            // 2. Shutter Reveal (Dramatic wipe)
            .to(shutterRef.current, {
                scaleY: 0,
                transformOrigin: "top", // Wipes up
                duration: 1.2,
                ease: "power4.inOut"
            }, "-=0.4")

            // 3. Final Wipe (Overlay)
            .to(overlayRef.current, {
                opacity: 0,
                duration: 0.5
            }, "-=0.8");

    }, [onComplete]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Shutter Effect Layer */}
            <div
                ref={shutterRef}
                className="absolute inset-0 bg-[#020617] origin-bottom z-40"
            />

            {/* Animated Counter */}
            <h1
                ref={counterRef}
                className="relative z-50 font-syne text-[15vw] font-bold text-transparent stroke-text mix-blend-difference"
                style={{
                    color: 'white',// Use white for contrast against dark shutter
                    WebkitTextStroke: '2px rgba(255,255,255,0.5)'
                }}
            >
                0%
            </h1>
        </div>
    );
}
