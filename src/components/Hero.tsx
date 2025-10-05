import { Phone } from 'lucide-react';
import heroBg from '../assets/hero.jpg'; // If you use path alias "@", use: import heroBg from '@/assets/hero.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Surya Post Press - Precision post-printing services in Kochi"
          className="w-full h-full object-cover object-center"
        />
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />
        {/* Optional subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-sm font-medium tracking-wide">
            Trusted by Businesses Across Kochi
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Precision Post-Printing Services
          <span className="block text-brand-gold mt-2">in Kochi</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-body leading-relaxed">
          Professional binding, lamination, and custom finishing with same-day service.
          Trusted by local businesses for quality and reliability since establishment.
        </p>

        {/* Single centered CTA */}
        <div className="mt-10 flex justify-center items-center">
          <a
            href="tel:+918281054873"
            className="group inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg shadow-brand-lg hover:bg-yellow-500 transition-all duration-300 gap-2 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now: +91 82810 54873
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-1">15+</div>
            <div className="text-sm text-gray-400 font-body">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-1">5000+</div>
            <div className="text-sm text-gray-400 font-body">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-1">200+</div>
            <div className="text-sm text-gray-400 font-body">Business Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
}