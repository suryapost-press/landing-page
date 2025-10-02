const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-heading font-bold text-2xl mb-2">Surya Post Press</h3>
          <p className="text-primary-foreground/70 mb-4">
            Premium Post-Printing Services in Kochi, Kerala
          </p>
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Surya Post Press. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
