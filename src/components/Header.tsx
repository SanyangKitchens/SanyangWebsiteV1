import { Phone, Mail, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return <div className="w-full">
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
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-foreground">Sanyang</span>
              <span className="text-gold ml-2">Cabinetry</span>
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-gold transition-colors font-medium">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="flex items-center text-foreground hover:text-gold transition-colors font-medium">
                Products
                <ChevronDown size={16} className="ml-1" />
              </a>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-background shadow-elegant rounded-lg border border-muted opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a 
                    href="/products/kitchen-cabinets" 
                    className="block px-4 py-2 text-foreground hover:text-gold hover:bg-muted/50 transition-colors"
                  >
                    Kitchen Cabinets
                  </a>
                </div>
              </div>
            </div>
            
            
            <a href="/about" className="text-foreground hover:text-gold transition-colors font-medium">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-gold transition-colors font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>;
};
export default Header;