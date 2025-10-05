// src/components/Products.tsx

// Local product images
import calendarImg from '../assets/products/table-calendar.jpg';
import diaryImg from '../assets/products/diary.jpg';
import passbookImg from '../assets/products/passbook.jpg';
import giftBoxImg from '../assets/products/gift-box.jpg';

type Product = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    title: 'Custom Table Calendars',
    description:
      'Branded desk/table calendars with your logo, colors, and key dates. Perfect for client gifting.',
    image: calendarImg,
    alt: 'Custom table calendar on a desk',
  },
  {
    title: 'Personalized Diaries',
    description:
      'Durable diaries with custom covers, foil branding, and page inserts for teams or events.',
    image: diaryImg,
    alt: 'Personalized diaries with custom covers',
  },
  {
    title: 'Bank Passbooks',
    description:
      'High-quality custom passbooks for banks and co-operatives with secure, accurate finishing.',
    image: passbookImg,
    alt: 'Custom bank passbook sample',
  },
  {
    title: 'Premium Gift Boxes',
    description:
      'Rigid or foldable gift boxes with custom inserts, foiling, and specialty finishes.',
    image: giftBoxImg,
    alt: 'Premium custom gift box with insert',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mb-4">
            Custom Stationery & Gifts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            Branded, made-to-order products designed to impress—crafted with the same precision as our post-printing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(({ title, description, image, alt }) => (
            <div
              key={title}
              className="group bg-brand-light rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-100">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">{title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+918281054873"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg shadow-brand-lg hover:bg-yellow-500 transition-all duration-300"
          >
            Call to Discuss Your Custom Order
          </a>
        </div>
      </div>
    </section>
  );
}