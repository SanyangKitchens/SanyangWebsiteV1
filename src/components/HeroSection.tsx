import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
        <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
          The Standard of Quality for British Homes.
        </p>

        <Link to="/products/kitchen-cabinets">
          <Button variant="hero" className="animate-fade-in">
            VIEW OUR PRODUCTS
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;