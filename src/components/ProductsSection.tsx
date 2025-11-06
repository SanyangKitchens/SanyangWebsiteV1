import { useState, useEffect } from "react";
import { allProducts, Product } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Shuffle the array and take the first 5 products
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    setProducts(shuffled.slice(0, 5));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Products</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A selection of our most popular kitchen and bathroom styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Loop through products and render the card for each one */}
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="gold-outline" size="lg" asChild>
            <Link to="/products/kitchen-cabinets">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;