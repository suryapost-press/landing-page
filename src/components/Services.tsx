// Local images (update paths/names if yours differ)
import bindingImg from '../assets/services/binding.jpg';
import laminationImg from '../assets/services/lamination.jpg';
import foilingImg from '../assets/services/foiling.jpg';
import dieCuttingImg from '../assets/services/die-cutting.jpg';
import packagingImg from '../assets/services/custom-packaging.jpg';
import finishingImg from '../assets/services/finishing.jpg';

type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    title: 'Professional Binding',
    description:
      'Spiral, comb, perfect, and case binding for documents, books, and reports with precision finishing.',
    image: bindingImg,
    alt: 'Professional binding sample',
  },
  {
    title: 'Lamination Services',
    description:
      'Hot and cold lamination in various sizes and finishes. Protect and enhance your printed materials.',
    image: laminationImg,
    alt: 'Laminated print sample',
  },
  {
    title: 'Foiling & Embossing',
    description:
      'Add premium gold, silver, or custom foiling to business cards, invitations, and certificates.',
    image: foilingImg,
    alt: 'Foiling and embossing detail',
  },
  {
    title: 'Die-Cutting',
    description:
      'Custom shapes and designs for packaging, labels, and promotional materials with precision cutting.',
    image: dieCuttingImg,
    alt: 'Die-cut packaging sample',
  },
  {
    title: 'Custom Packaging',
    description:
      'Professional box-making, folder creation, and custom packaging solutions for businesses.',
    image: packagingImg,
    alt: 'Custom packaging box',
  },
  {
    title: 'Finishing Services',
    description:
      'Scoring, perforating, corner rounding, and other specialty finishing for perfect results.',
    image: finishingImg,
    alt: 'Finishing services detail',
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
          {services.map(({ title, description, image, alt }) => (
            <div
              key={title}
              className="group bg-brand-light rounded-xl p-6 md:p-8 shadow-sm hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              {/* Service image */}
              <div className="relative mb-6 rounded-lg overflow-hidden aspect-[16/9] bg-gray-100">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* optional soft overlay for consistency */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0" />
              </div>

              {/* Icon + content */}
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{title}</h3>
              <p className="text-gray-600 font-body mb-0 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+918281054873"
            className="inline-block px-8 py-4 bg-brand-charcoal text-white font-semibold rounded-lg hover:bg-brand-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            aria-label="Call +91 82810 54873"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}