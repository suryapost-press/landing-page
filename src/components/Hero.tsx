import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          Precision Printing.<br />
          Perfect Finishing.<br />
          <span className="text-accent">Trusted in Kochi.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
          Your reliable partner for premium post-printing services in Kerala
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold"
          >
            Get a Quote
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
          >
            <a href="tel:+919876543210" className="flex items-center gap-2">
              <Phone size={20} />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
