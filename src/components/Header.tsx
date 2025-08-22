import { useState } from "react";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-light-gray py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone size={16} />
              <a href="tel:+447955170009">+44 (0)7 9551 7009</a>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail size={16} />
              <a href="mailto:sales@sanyang.co.uk">sales@sanyang.co.uk</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-elegant py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between">
          {/* Logo */}
          <a className="flex items-center gap-4" href="/">
            <img src="/sanyang logo without text.png" alt="Sanyang Logo" className="w-24" />
            <h1 className="text-2xl font-bold">
              <span className="text-foreground">Sanyang</span>
              <span className="text-gold"> Cabinetry</span>
            </h1>
          </a>
          

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-gold transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <Link to="#" className="flex items-center text-foreground hover:text-gold transition-colors font-medium">
                Products
                <ChevronDown size={16} className="ml-1" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-background shadow-elegant rounded-lg border border-muted opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/products/kitchen-cabinets" className="block px-4 py-2 text-foreground hover:text-gold hover:bg-muted/50 transition-colors">
                    Kitchen Cabinets
                  </Link>
                </div>
              </div>
            </div>
            <Link to="#" className="text-foreground hover:text-gold transition-colors font-medium">
              Gallery
            </Link>
            <Link to="/about" className="text-foreground hover:text-gold transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-gold transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-gold transition-colors font-medium">
              Home
            </Link>
            {/* Note: Dropdowns in mobile can be complex. This is a simplified version. */}
            <Link to="/products/kitchen-cabinets" className="text-foreground hover:text-gold transition-colors font-medium">
              Products
            </Link>
            <Link to="#" className="text-foreground hover:text-gold transition-colors font-medium">
              Gallery
            </Link>
            <Link to="/about" className="text-foreground hover:text-gold transition-colors font-medium">
              About Us
            </Link>
            <Link to="#" className="text-foreground hover:text-gold transition-colors font-medium">
              Assembly Videos
            </Link>
            <Link to="/contact" className="text-foreground hover:text-gold transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;