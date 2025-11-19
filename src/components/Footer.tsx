import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-white p-4 w-fit rounded-sm">
                <img 
                src="/SanyangCabinetry.png" 
                alt="Sanyang Cabinetry" 
                className="w-48"
                />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Sanyang Cabinetry is a premier manufacturer and distributor of high-quality solid wood kitchen cabinets and bathroom vanities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products/kitchen-cabinets" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Kitchen Cabinets
                </Link>
              </li>
              <li>
                <Link to="/products/bathrooms" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Bathroom Vanities
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Our Locations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Inspiration Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gold font-serif text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Warranty Information
                </Link>
              </li>
              <li>
                <a href="/BrochureWithSKU.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span>
                  Unit 19, The IO Centre<br />
                  Hearle Way, Hatfield<br />
                  AL10 9EW, United Kingdom
                </span>
              </li> */}
              <li className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+447955170009" className="hover:text-white transition-colors">
                  +44 (0)7 9551 70009
                </a>
              </li>
              <li className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:sales@sanyang.co.uk" className="hover:text-white transition-colors">
                  sales@sanyang.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Sanyang Cabinetry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;