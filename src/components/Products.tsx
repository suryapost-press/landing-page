import { CalendarDays, NotebookPen, Wallet, Gift } from 'lucide-react';

const products = [
  {
    icon: CalendarDays,
    title: 'Custom Table Calendars',
    description: 'Branded desk/table calendars with your logo, colors, and key dates. Perfect for client gifting.',
  },
  {
    icon: NotebookPen,
    title: 'Personalized Diaries',
    description: 'Durable diaries with custom covers, foil branding, and page inserts for teams or events.',
  },
  {
    icon: Wallet,
    title: 'Bank Passbooks',
    description: 'High-quality custom passbooks for banks and co-operatives with secure, accurate finishing.',
  },
  {
    icon: Gift,
    title: 'Premium Gift Boxes',
    description: 'Rigid or foldable gift boxes with custom inserts, foiling, and specialty finishes.',
  },
] as const;

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
          {products.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-brand-light rounded-xl p-8 shadow-sm hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gold/10 rounded-lg mb-6 group-hover:bg-brand-gold/20 transition-colors">
                <Icon className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">{title}</h3>
              <p className="text-gray-600 font-body leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg shadow-brand-lg hover:bg-yellow-500 transition-all duration-300"
          >
            Call to Discuss Your Custom Order
          </a>
        </div>
      </div>
    </section>
  );
}