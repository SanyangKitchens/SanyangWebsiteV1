import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          SANYANG CABINETRY
        </h1>
        <p className="text-2xl md:text-3xl mb-6 leading-relaxed font-light">
          The Standard of Quality for British Homes.
        </p>
        <p className="text-lg md:text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
          Supplying premium, ready-to-assemble cabinetry to UK trade
          professionals and homeowners.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center">
          <Button variant="hero" asChild className="animate-fade-in">
            <Link to="/products/kitchen-cabinets">
              VIEW OUR PRODUCTS
            </Link>
          </Button>
          <Button variant="gold-outline" size="lg" asChild className="animate-fade-in font-semibold text-base px-8 py-4">
            <Link to="/contact">
              For Trade Enquiries
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;