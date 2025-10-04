import { Clock, Shield, IndianRupee, Headphones as HeadphonesIcon, Star, Quote } from 'lucide-react';

const valueProps = [
  {
    icon: Clock,
    title: 'Same-Day Service Available',
    description: 'Need it urgently? We offer same-day turnaround for most services when you need to meet tight deadlines.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every project undergoes rigorous quality checks. We stand behind our work with a satisfaction guarantee.',
  },
  {
    icon: IndianRupee,
    title: 'Competitive Kochi Pricing',
    description: 'Fair, transparent pricing with no hidden charges. Best value for post-printing services in the area.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Consultation',
    description: 'Not sure what you need? Our experienced team provides free consultation to help you choose the right solution.',
  },
];

const testimonials = [
  {
    text: 'Surya Post Press has been our go-to partner for binding and lamination for 5 years. Consistently excellent quality and fast turnaround.',
    author: 'Rajesh Kumar',
    business: 'Print Solutions, Kochi',
    rating: 5,
  },
  {
    text: 'The foiling work they did on our wedding invitations was absolutely stunning. Professional service and attention to detail!',
    author: 'Priya Menon',
    business: 'Individual Customer',
    rating: 5,
  },
];

export default function Trust() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mb-4">
            Why Choose Surya Post Press?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            We're committed to delivering excellence in every project, backed by years of experience and customer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-brand transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-charcoal mb-2">
              What Our Customers Say
            </h3>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
              ))}
              <span className="ml-2 text-gray-600 font-body">5.0 Average Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-brand-light rounded-xl p-8 border border-gray-200"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gold/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-700 font-body leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-brand-charcoal">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 rounded-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-brand-charcoal mb-1">98%</div>
                <div className="text-sm text-gray-600 font-body">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-charcoal mb-1">15+</div>
                <div className="text-sm text-gray-600 font-body">Years Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-charcoal mb-1">5000+</div>
                <div className="text-sm text-gray-600 font-body">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
