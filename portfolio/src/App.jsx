import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import ParticleBackground from './components/ParticleBackground';
import AnimatedGradient from './components/AnimatedGradient';
import MagneticCursor from './components/MagneticCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <SmoothScroll>
          <div className={`relative min-h-screen bg-slate-900 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <MagneticCursor />
            <Background3D />
            <div className="fixed inset-0 z-0">
              <ParticleBackground />
              <AnimatedGradient />
            </div>

            <Navbar />

            <main className="relative z-10">
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
