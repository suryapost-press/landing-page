import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', service: '', details: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-brand-light rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700 font-body">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-colors bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="binding">Professional Binding</option>
                    <option value="lamination">Lamination Services</option>
                    <option value="foiling">Foiling & Embossing</option>
                    <option value="die-cutting">Die-Cutting</option>
                    <option value="packaging">Custom Packaging</option>
                    <option value="finishing">Finishing Services</option>
                    <option value="other">Other / Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg shadow-brand hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-brand-charcoal to-brand-dark rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+919876543210" className="text-gray-300 hover:text-brand-gold transition-colors font-body">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-brand-gold transition-colors font-body"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@suryapostpress.com" className="text-gray-300 hover:text-brand-gold transition-colors font-body">
                      info@suryapostpress.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="text-gray-300 font-body">
                      Surya Post Press<br />
                      MG Road, Kochi<br />
                      Kerala 682016, India
                    </p>
                  </div>
                </div>

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

            <div className="bg-gray-200 rounded-2xl overflow-hidden h-80">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-200">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                  <p className="font-body">Google Maps Integration</p>
                  <p className="text-sm text-gray-500 mt-1">MG Road, Kochi, Kerala</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="flex-1 px-6 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg text-center hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-4 bg-green-600 text-white font-semibold rounded-lg text-center hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
