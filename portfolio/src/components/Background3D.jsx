import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D shape with mouse interaction
function FloatingShape({ position, scale, color, speed = 1, distort = 0.4 }) {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Continuous rotation
        meshRef.current.rotation.x = time * 0.3 * speed;
        meshRef.current.rotation.y = time * 0.4 * speed;
        meshRef.current.rotation.z = time * 0.2 * speed;

        // Pulsing scale effect
        const pulse = Math.sin(time * speed) * 0.1 + 1;
        meshRef.current.scale.setScalar(scale * pulse);
    });

    return (
        <Float
            speed={speed * 2}
            rotationIntensity={1.5}
            floatIntensity={2}
            floatingRange={[-1, 1]}
        >
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={3}
                    roughness={0.2}
                    metalness={0.9}
                    emissive={color}
                    emissiveIntensity={0.3}
                />
            </mesh>
        </Float>
    );
}

// Glowing ring
function GlowingRing({ position, color }) {
    const ringRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        ringRef.current.rotation.x = time * 0.5;
        ringRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={ringRef} position={position}>
                <torusGeometry args={[2, 0.1, 16, 100]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
        </Float>
    );
}

// Particle field
function ParticleField() {
    const particlesRef = useRef();
    const particleCount = 100;

    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        particlesRef.current.rotation.y = time * 0.05;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#3b82f6"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

// Main 3D scene
function Scene() {
    return (
        <>
            {/* Lighting setup for dramatic effect */}
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={2} color="#3b82f6" />
            <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />
            <pointLight position={[0, -10, 0]} intensity={1.5} color="#8b5cf6" />

            {/* Floating geometric shapes */}
            <FloatingShape
                position={[-5, 3, -5]}
                scale={1.5}
                color="#3b82f6"
                speed={0.8}
                distort={0.6}
            />
            <FloatingShape
                position={[5, -2, -8]}
                scale={1.2}
                color="#06b6d4"
                speed={1.2}
                distort={0.5}
            />
            <FloatingShape
                position={[0, 4, -10]}
                scale={1}
                color="#8b5cf6"
                speed={1}
                distort={0.7}
            />
            <FloatingShape
                position={[-4, -3, -12]}
                scale={1.3}
                color="#0ea5e9"
                speed={0.9}
                distort={0.4}
            />
            <FloatingShape
                position={[4, 2, -6]}
                scale={0.8}
                color="#6366f1"
                speed={1.1}
                distort={0.8}
            />

            {/* Glowing rings */}
            <GlowingRing position={[0, 0, -15]} color="#3b82f6" />
            <GlowingRing position={[-6, 2, -10]} color="#8b5cf6" />

            {/* Particle field */}
            <ParticleField />
        </>
    );
}

// Background3D component - fullscreen canvas
export default function Background3D() {
    return (
        <div className="fixed inset-0 -z-10 opacity-50">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
