import { Book, Layers, Sparkles, Scissors, Package, PenTool } from 'lucide-react';

const services = [
  {
    icon: Book,
    title: 'Professional Binding',
    description:
      'Spiral, comb, perfect, and case binding for documents, books, and reports with precision finishing.',
  },
  {
    icon: Layers,
    title: 'Lamination Services',
    description:
      'Hot and cold lamination in various sizes and finishes. Protect and enhance your printed materials.',
  },
  {
    icon: Sparkles,
    title: 'Foiling & Embossing',
    description:
      'Add premium gold, silver, or custom foiling to business cards, invitations, and certificates.',
  },
  {
    icon: Scissors,
    title: 'Die-Cutting',
    description:
      'Custom shapes and designs for packaging, labels, and promotional materials with precision cutting.',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    description:
      'Professional box-making, folder creation, and custom packaging solutions for businesses.',
  },
  {
    icon: PenTool,
    title: 'Finishing Services',
    description:
      'Scoring, perforating, corner rounding, and other specialty finishing for perfect results.',
  },
];

export default function Services() {

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            Comprehensive post-printing solutions tailored to your needs, delivered with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-brand-light rounded-xl p-8 shadow-sm hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gold/10 rounded-lg mb-6 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="w-7 h-7 text-brand-gold" />
                </div>

                <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 font-body mb-0 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
          href="tel:+918281054873"
          className="inline-block px-8 py-4 bg-brand-charcoal text-white font-semibold rounded-lg hover:bg-brand-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"aria-label="Call +91 78842 13412"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}