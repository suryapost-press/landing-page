import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@suryapostpress.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    info@suryapostpress.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Kochi, Kerala<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125449.63866897098!2d76.18380245!3d9.93988685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Surya Post Press Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full text-lg py-6"
              >
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
