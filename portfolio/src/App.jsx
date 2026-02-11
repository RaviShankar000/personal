import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Background3D from './components/Background3D';
import ParticleBackground from './components/ParticleBackground';
import AnimatedGradient from './components/AnimatedGradient';
import MagneticCursor from './components/MagneticCursor';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Custom Magnetic Cursor */}
      <MagneticCursor />

      {/* Left Sidebar Navigation */}
      <Sidebar />

      {/* Fixed Top Navigation */}
      <Navbar />

      {/* Animated Background Layers */}
      <AnimatedGradient />
      <ParticleBackground />
      <Background3D />

      {/* Main content - adjusted for sidebar */}
      <main className="relative z-10 ml-20">
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
