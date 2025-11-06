import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

// Placeholder Social Links (replace '#' with your actual URLs)
const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

const Footer = () => {
  return (
    // Set the base text color to text-primary-foreground (light)
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="/SanyangCabinetry.png"
                alt="Sanyang Logo"
                className="w-64" // Slightly smaller logo for footer
              />
            </Link>
            {/* Use a lighter, slightly muted text color */}
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Your trusted London-based wholesaler for premium kitchen and bathroom cabinets, serving contractors, builders, and remodelers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Use lighter text with a gold hover effect
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {/* Use lighter text with a gold hover effect */}
              <li><Link to="/products/kitchen-cabinets" className="text-primary-foreground/80 hover:text-gold transition-colors">Kitchens</Link></li>
              <li><Link to="/products/bathrooms" className="text-primary-foreground/80 hover:text-gold transition-colors">Bathrooms</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/80 hover:text-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {/* Use lighter text with a gold hover effect */}
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/warranty" className="text-primary-foreground/80 hover:text-gold transition-colors">Warranty</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">For Trade</Link></li>
              <li><Link to="/SanyangBrochure.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-gold transition-colors">Brochure</Link></li>
              <li><Link to="/sitemap.xml" className="text-primary-foreground/80 hover:text-gold transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-gold" />
                {/* Use lighter text with a gold hover effect */}
                <a href="tel:+447955170009" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  +44 (0)7 9551 70009
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-gold" />
                {/* Use lighter text with a gold hover effect */}
                <a href="mailto:sales@sanyang.co.uk" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  sales@sanyang.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          {/* Use a more muted light text for the copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Sanyang Cabinetry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;