import Header from "@/components/Header";
import Footer from "@/components/Footer";

const KitchenCabinets = () => {
  const productSections = [
    {
      title: "SHAKER STYLE ESSENTIAL COLLECTION",
      products: [
        { name: "Shaker White", isNew: false },
        { name: "Shaker Gray", isNew: false },
        { name: "Shaker Espresso", isNew: false }
      ]
    },
    {
      title: "SHAKER STYLE CHARM COLLECTION", 
      products: [
        { name: "Navy Blue", isNew: false },
        { name: "Iron Black", isNew: true },
        { name: "Treasure Chest", isNew: true },
        { name: "Aston Green", isNew: true },
        { name: "Smokey Ash", isNew: true }
      ]
    },
    {
      title: "SLIM SHAKER STYLE",
      products: [
        { name: "Slim Dove White", isNew: false },
        { name: "Slim White Oak", isNew: false },
        { name: "Slim Aston Green", isNew: true }
      ]
    },
    {
      title: "DOUBLE SHAKER STYLE",
      products: [
        { name: "Double Smokey Grey", isNew: true },
        { name: "Double Dove White", isNew: true }
      ]
    },
    {
      title: "CLASSIC STYLE",
      products: [
        { name: "Classic Door Style 1", isNew: false },
        { name: "Classic Door Style 2", isNew: false },
        { name: "Classic Door Style 3", isNew: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner Section */}
      <section className="relative h-80 bg-muted overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-muted to-muted-foreground/20">
          {/* Insert blurred kitchen background image here */}
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-foreground">OUR PRODUCTS</h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {productSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-foreground mb-8 uppercase tracking-wide">
                {section.title}
              </h2>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.products.map((product, productIndex) => (
                  <div key={productIndex} className="product-tile bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300">
                    {/* Product Image Container */}
                    <div className="relative h-64 bg-muted flex items-center justify-center">
                      {/* Insert image for {product.name} here */}
                      <div className="text-muted-foreground text-center">
                        <div className="text-lg font-medium">{product.name}</div>
                        <div className="text-sm mt-2">Image Placeholder</div>
                      </div>
                      
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
                    <div className="p-4">
                      <p className="text-foreground font-medium text-center">
                        {product.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Section Divider */}
              {sectionIndex < productSections.length - 1 && (
                <div className="mt-16 border-b border-muted"></div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default KitchenCabinets;