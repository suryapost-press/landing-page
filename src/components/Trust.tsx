import { Shield, IndianRupee, Headphones as HeadphonesIcon } from 'lucide-react';

const valueProps = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description:
      'Every project undergoes rigorous quality checks. We stand behind our work with a satisfaction guarantee.',
  },
  {
    icon: IndianRupee,
    title: 'Competitive Kochi Pricing',
    description:
      'Fair, transparent pricing with no hidden charges. Best value for post-printing services in the area.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Consultation',
    description:
      'Not sure what you need? Our experienced team provides free consultation to help you choose the right solution.',
  },
] as const;

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-brand-light" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mb-4"
          >
            Why Choose Surya Post Press?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-body">
            We're committed to delivering excellence in every project, backed by years of experience and customer trust.
          </p>
        </div>

        {/* Value props */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          {valueProps.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="text-center bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-brand"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-5">
                <Icon className="w-8 h-8 text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2.5">{title}</h3>
              <p className="text-gray-600 font-body leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>

        {/* Stats card */}
        <div className="mx-auto max-w-5xl bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
          <div className="text-center bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-brand-charcoal mb-1">98%</div>
                <div className="text-sm text-gray-600 font-body">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-brand-charcoal mb-1">15+</div>
                <div className="text-sm text-gray-600 font-body">Years Established</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-brand-charcoal mb-1">5000+</div>
                <div className="text-sm text-gray-600 font-body">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}