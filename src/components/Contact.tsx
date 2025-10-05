import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {/* Google Map (Top) */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-80 sm:h-96">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-200">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                <p className="font-body">Google Maps Integration</p>
                <p className="text-sm text-gray-500 mt-1">MG Road, Kochi, Kerala</p>
              </div>
            </div>
          </div>

          {/* Contact Information (Below Map) */}
          <div className="bg-gradient-to-br from-brand-charcoal to-brand-dark rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-300 hover:text-brand-gold transition-colors font-body"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <p className="text-gray-300 font-body">
                    Surya Post Press
                    <br />
                    MG Road, Kochi
                    <br />
                    Kerala 682016, India
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Business Hours</div>
                  <div className="text-gray-300 font-body space-y-1">
                    <div>Monday - Saturday: 9:00 AM - 6:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}