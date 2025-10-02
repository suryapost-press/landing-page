import { BookOpen, Sparkles, Package, Scissors, Layers, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookOpen,
    title: "Binding",
    description: "Professional binding solutions including perfect binding, spiral, and hardcover for all your printed materials.",
  },
  {
    icon: Layers,
    title: "Lamination",
    description: "Protect and enhance your prints with high-quality matte, glossy, and specialty lamination finishes.",
  },
  {
    icon: Sparkles,
    title: "Foiling",
    description: "Add premium metallic finishes with hot foil stamping in gold, silver, and custom colors.",
  },
  {
    icon: Scissors,
    title: "Die-Cutting",
    description: "Precision die-cutting services for custom shapes, packaging, and creative print projects.",
  },
  {
    icon: Package,
    title: "Packaging",
    description: "Custom packaging solutions designed to protect and showcase your products beautifully.",
  },
  {
    icon: PenTool,
    title: "Custom Finishing",
    description: "Specialized finishing services tailored to your unique project requirements and vision.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive post-printing solutions delivered with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <service.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
          >
            Request Custom Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
