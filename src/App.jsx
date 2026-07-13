import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="app" style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Decorative vertical blueprint lines that stretch 100% height */}
      <div className="bg-grid-overlay" />
      
      {/* Background horizontal lines placed behind content */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        <div className="horizontal-grid-line" style={{ top: '3rem' }} />
        <div className="horizontal-grid-line" style={{ top: '6rem' }} />
        <div className="horizontal-grid-line" style={{ top: '16rem' }} />
        <div className="horizontal-grid-line" style={{ top: '24rem' }} />
        <div className="horizontal-grid-line" style={{ top: '45rem' }} />
        <div className="horizontal-grid-line" style={{ top: '68rem' }} />
      </div>

      <Navbar />
      
      <main className="portfolio-layout border-dashed-x" style={{ zIndex: 10, position: 'relative' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
