import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Product } from "../lib/products";
import { bathroomVanities } from "../lib/bathroom_vanities"; // Import the new vanity data
import ProductModal from "@/components/ui/ProductModal";

const Bathrooms = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Banner Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${'/products/bathrooms_hero.jpg'})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Luxury Style Bathrooms
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
              Explore our collection of premium bathroom vanities.
            </p>
          </div>
        </section>

        {/* Masonry Gallery Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            {/* This uses CSS columns to create a masonry-like effect.
              - `columns-1 md:columns-2 lg:columns-3`: Sets the number of columns for different breakpoints.
              - `gap-8`: Sets the spacing between columns (and rows implicitly).
            */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
              {bathroomVanities.map((vanity, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer mb-8 break-inside-avoid shadow-elegant hover:shadow-gold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedProduct(vanity)}
                >
                  <img 
                    src={vanity.image} 
                    alt={vanity.name} 
                    className="w-full h-auto object-cover" 
                  />
                  <div className="p-4 bg-card">
                    <p className="text-foreground font-medium text-center">
                      {vanity.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Bathrooms;