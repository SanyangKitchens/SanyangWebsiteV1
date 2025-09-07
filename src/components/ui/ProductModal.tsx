import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] flex p-0" onPointerDownOutside={(e) => e.preventDefault()}>
        <div className="w-1/2 relative grid grid-rows-[1fr_auto] bg-muted/30 overflow-hidden group">
          {/* Main Image Viewer */}
          <div className="relative flex items-center justify-center w-full overflow-hidden">
            {isZoomed ? (
              <div 
              className="absolute inset-0 flex items-center justify-center cursor-zoom-out"
              onClick={toggleZoom}
            >
              <img src={images[selectedImageIndex]} alt={product.name} className="max-w-full max-h-full object-contain" />
            </div>
            ) : (
              <>
              <img src={images[selectedImageIndex]} alt={product.name} className="max-w-full max-h-full object-contain p-4"/>
              
              {images.length > 1 && (
                  <>
                  <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100">
                      <ChevronLeft size={24} />
                  </button>
                  <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100">
                      <ChevronRight size={24} />
                  </button>
                  </>
              )}
              <button onClick={toggleZoom} className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100">
                  <ZoomIn size={24} />
              </button>
              </>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && !isZoomed && (
            <div className="row-start-2 row-end-3 p-4 bg-background/50 backdrop-blur-sm">
              <div className="flex justify-center gap-2">
                {images.map((img, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleThumbnailClick(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      selectedImageIndex === index ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'
                    }`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-1/2 p-8 flex flex-col overflow-hidden">
          <h2 className="text-2xl font-bold text-foreground mb-2">{product.name}</h2>
          <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags?.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <div className="prose prose-sm text-muted-foreground overflow-y-auto flex-grow pr-4">
            <p>{product.description}</p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;

