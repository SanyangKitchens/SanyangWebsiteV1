import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-secondary py-12 px-4 mt-16">
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
                <li><Link to="#" className="text-muted-foreground hover:text-gold transition-colors">Products</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact Us</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-gold transition-colors">Sitemap</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Our Policies</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-muted-foreground hover:text-gold transition-colors">Conditions of Use</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-gold transition-colors">Warranty</Link></li>
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
