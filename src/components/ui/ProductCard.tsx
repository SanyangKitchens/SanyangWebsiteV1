import { useState } from "react";
import { Product } from "../../lib/products";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group cursor-pointer block h-full"
      >
        <div className="product-tile bg-card rounded-lg overflow-hidden shadow-elegant h-full flex flex-col transition-all duration-300 group-hover:shadow-gold group-hover:scale-105">
          {/* Product Image Container */}
          <div className="relative">
              {/* Display product image */}
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
              />
              
              {/* NEW Ribbon */}
              {product.isNew && (
              <div className="absolute top-0 right-0">
                  <div className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-bl-lg">
                      NEW
                  </div>
              </div>
              )}
          </div>
          
          {/* Product Label */}
          <div className="p-4 flex-grow flex flex-col justify-center items-center">
              <p className="text-foreground font-medium text-center">
              {product.name}
              </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ProductModal 
          product={product}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
