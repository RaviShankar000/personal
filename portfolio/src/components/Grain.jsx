
export default function Grain() {
    return (
        <div className="fixed inset-0 z-[200] pointer-events-none opacity-[0.07] mix-blend-overlay">
            <svg className="w-full h-full">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"
                        stitchTiles="stitch"
                        numOctaves="3"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
}
