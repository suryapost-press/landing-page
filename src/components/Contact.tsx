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
<div className="relative rounded-2xl overflow-hidden h-80 sm:h-96 bg-gray-200">
  {/* Embedded map (approximate query) */}
  <iframe
    className="absolute inset-0 w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.5808946913551!2d76.27713812311157!3d9.992529528635162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5dd157df7b%3A0xe70ef53ead2fb408!2sKhadeeja%20Building%2C%2068%2F2007%2C%20Mathai%20Manjooran%20Rd%2C%20Ayyappankavu%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682018!5e0!3m2!1sen!2sin!4v1759650537123!5m2!1sen!2sin"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />

  {/* Button to open your exact pin in Google Maps */}
  <a
    href="https://maps.app.goo.gl/ykEFo6fm9gQGZmyV6"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-xs font-medium text-brand-charcoal shadow hover:bg-white"
  >
    <MapPin className="w-4 h-4 text-brand-gold" />
    View on Google Maps
  </a>
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
                    href="tel:+918281054873"
                    className="text-gray-300 hover:text-brand-gold transition-colors font-body"
                  >
                    +918281054873
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
              href="tel:+918281054873"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/918281054873"
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