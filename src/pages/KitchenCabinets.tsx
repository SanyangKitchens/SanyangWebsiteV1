import Header from "../components/Header";
import Footer from "../components/Footer";
import { productSections } from "../lib/products";
import ProductCard from "@/components/ui/ProductCard";

const KitchenCabinets = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner Section */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${'/products/our_products_hero.jpg'})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Our Products
        </h1>
      </div>
    </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* 2. Loop through each product section */}
          {productSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h1><strong>{section.title}</strong></h1>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* 3. Loop through products in the section and render the card */}
                {section.products.map((product, productIndex) => (
                  <ProductCard key={productIndex} product={{...product, category: section.title}} />
                ))}
              </div>
              
              {/* ... */}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KitchenCabinets;

