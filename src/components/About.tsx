import workshopImg from "@/assets/workshop.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
              About Surya Post Press
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Established in the heart of Kochi, Kerala, Surya Post Press has been 
                delivering exceptional post-printing services to businesses and individuals 
                throughout the region.
              </p>
              <p>
                Our commitment to quality, precision, and customer satisfaction has made us 
                a trusted name in the printing industry. We combine traditional craftsmanship 
                with modern technology to ensure every project meets the highest standards.
              </p>
              <p>
                From small personal projects to large commercial orders, we treat every job 
                with the same dedication and attention to detail. Our experienced team works 
                closely with clients to bring their vision to life with precision finishing 
                and timely delivery.
              </p>
              <p className="text-foreground font-semibold">
                Years of experience. Trusted by local businesses. Committed to excellence.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={workshopImg}
              alt="Surya Post Press workshop in Kochi, Kerala"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-accent rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
