import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
