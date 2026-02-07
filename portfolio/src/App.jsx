import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import ParticleBackground from './components/ParticleBackground';
import AnimatedGradient from './components/AnimatedGradient';
import MagneticCursor from './components/MagneticCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Custom Magnetic Cursor */}
      <MagneticCursor />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Animated Background Layers */}
      <AnimatedGradient />
      <ParticleBackground />
      <Background3D />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

