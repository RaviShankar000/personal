import { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Background3D from './components/Background3D';
import ParticleBackground from './components/ParticleBackground';
import AnimatedGradient from './components/AnimatedGradient';
import MagneticCursor from './components/MagneticCursor';
import Hero from './components/Hero';
import About from './components/About';
import Loader from './components/Loader';
import MobileNav from './components/MobileNav';
import { useLoading } from './context/LoadingContext';
import DelayedLoader from './components/DelayedLoader';
import ScrollProgress from './components/ScrollProgress';

// Lazy Load Heavy Components
const Education = lazy(() => import('./components/Education'));
const Achievements = lazy(() => import('./components/Achievements'));
const Skills = lazy(() => import('./components/Skills'));
const CodingProfiles = lazy(() => import('./components/CodingProfiles'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to Light Mode (white theme check)
  const { isLoading } = useLoading();

  // Sync theme with state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Loading Screen */}
      <Loader loading={isLoading} />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Magnetic Cursor */}
      <MagneticCursor />

      {/* Left Sidebar Navigation (Desktop) */}
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Bottom Navigation (Mobile) */}
      <MobileNav />

      {/* Fixed Top Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Animated Background Layers */}
      <AnimatedGradient />
      <ParticleBackground />
      <Background3D />

      {/* Main content - adjusted for sidebar and mobile nav */}
      <main className="relative z-10 ml-0 md:ml-20 pb-24 md:pb-0 transition-all duration-300">
        <Hero />
        <About />

        <Suspense fallback={<DelayedLoader />}>
          <Education />
          <Achievements />
          <Skills />
          <CodingProfiles />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
