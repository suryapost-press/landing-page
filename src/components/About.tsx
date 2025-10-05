// src/components/About.tsx
import workshopImg from '../assets/about-workshop.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-brand-charcoal to-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={workshopImg}
                alt="Surya Post Press workshop"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content on the right */}
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
          </div>
        </div>
      </div>
    </section>
  );
}