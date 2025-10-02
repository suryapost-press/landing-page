import { Award, Clock, DollarSign, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Precision Craftsmanship",
    description: "Every project receives meticulous attention to detail, ensuring flawless results that exceed expectations.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your deadlines. Our efficient workflow ensures your projects are completed and delivered on schedule.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium quality doesn't mean premium prices. We offer competitive rates without compromising on excellence.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Your project is unique. We work closely with you to understand your needs and deliver customized solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-4">
            Why Choose Surya Post Press?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that quality and dedication make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
            </div>
            <div>
              <p className="text-lg text-foreground italic mb-4">
                "Surya Post Press has been our go-to partner for all post-printing needs. 
                Their attention to detail and commitment to quality is unmatched. Highly recommended!"
              </p>
              <p className="text-muted-foreground font-semibold">
                — Satisfied Client, Kochi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
