const Footer = () => {
  return <footer className="bg-light-gray py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: About Us */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">About Us</h3>
            <p className="text-muted-foreground leading-relaxed">Sanyang Cabinetry is a kitchen and bath cabinets wholesaler based in London, England that provides great products for contractors, stores, builders, and remodelers.</p>
          </div>

          {/* Right Column: Links */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Our Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Products</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-gold transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Sitemap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Our Policies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Conditions of Use</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Warranty</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Sanyang Cabinetry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;