import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-4">Surya Post Press</h3>
            <p className="text-gray-300 font-body leading-relaxed">
              Professional post-printing services in Kochi. Quality craftsmanship, reliable service, and competitive pricing for all your finishing needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="tel:+918281054873" className="hover:text-brand-gold transition-colors">
                  +918281054873
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:info@suryapostpress.com" className="hover:text-brand-gold transition-colors">
                  info@suryapostpress.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
                <span>MG Road, Kochi, Kerala 682016</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 font-body text-sm">
            {currentYear} Surya Post Press. All rights reserved. | Precision Post-Printing Services in Kochi, Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
