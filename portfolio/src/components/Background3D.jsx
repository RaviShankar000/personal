import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating 3D shape component
function FloatingShape({ position, geometry, color, speed = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2 * speed;
        meshRef.current.rotation.y = time * 0.3 * speed;
    });

    return (
        <Float
            speed={speed}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.5, 0.5]}
        >
            <mesh ref={meshRef} position={position} geometry={geometry} castShadow receiveShadow>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.4}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

// Main 3D scene
function Scene() {
    // Create geometries
    const dodecahedron = new THREE.DodecahedronGeometry(1.2);
    const torus = new THREE.TorusGeometry(0.8, 0.3, 16, 100);
    const octahedron = new THREE.OctahedronGeometry(1);
    const icosahedron = new THREE.IcosahedronGeometry(0.9);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
            <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />

            {/* Multiple floating shapes at different positions */}
            <FloatingShape
                position={[-4, 2, -3]}
                geometry={dodecahedron}
                color="#1e3a8a" // Dark Blue
                speed={0.8}
            />
            <FloatingShape
                position={[4, -1, -4]}
                geometry={torus}
                color="#0ea5e9" // Sky Blue
                speed={1.2}
            />
            <FloatingShape
                position={[0, 3, -5]}
                geometry={octahedron}
                color="#3b82f6" // Blue
                speed={1}
            />
            <FloatingShape
                position={[-3, -2, -6]}
                geometry={icosahedron}
                color="#06b6d4" // Cyan
                speed={0.9}
            />
            <FloatingShape
                position={[3, 2, -7]}
                geometry={dodecahedron}
                color="#1d4ed8" // Royal Blue
                speed={1.1}
            />
        </>
    );
}

// Background3D component - fullscreen canvas
export default function Background3D() {
    return (
        <div className="fixed inset-0 -z-10 opacity-40">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                style={{ background: 'transparent' }}
                shadows
            >
                <Scene />
            </Canvas>
        </div>
    );
}
