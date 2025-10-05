import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="scroll-mt-24"></main>
      <Hero />
      <Services />
      <Products />
      <About />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
