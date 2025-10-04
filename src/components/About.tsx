import { Award, Users, MapPin, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-brand-charcoal to-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-charcoal/40 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Award className="w-24 h-24 mx-auto mb-4 text-brand-gold" />
                  <p className="text-xl font-semibold">Professional Workshop</p>
                  <p className="text-gray-300 mt-2">State-of-the-art equipment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-sm font-medium mb-6">
              About Surya Post Press
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Trusted Partner in
              <span className="block text-brand-gold">Post-Printing Excellence</span>
            </h2>

            <div className="space-y-4 text-gray-300 font-body leading-relaxed mb-8">
              <p>
                Established in Kochi, Surya Post Press has been serving the printing community and local businesses
                with dedication and precision for over 15 years. We understand that post-printing work is where
                quality truly comes to life.
              </p>
              <p>
                Our team of skilled craftsmen combines traditional expertise with modern technology to deliver
                flawless finishing on every project. From small individual orders to large business contracts,
                we treat every job with the same commitment to excellence.
              </p>
              <p>
                As a proud Kochi-based business, we've built lasting relationships with print shops, offices,
                educational institutions, and individuals throughout Kerala who trust us for reliable service
                and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">15+ Years</div>
                  <div className="text-sm text-gray-400">Industry Experience</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">5000+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Local</div>
                  <div className="text-sm text-gray-400">Kochi-Based Service</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Same Day</div>
                  <div className="text-sm text-gray-400">Service Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
