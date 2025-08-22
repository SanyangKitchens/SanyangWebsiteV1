import Header from "@/components/Header";
import Footer from "@/components/Footer";

const KitchenCabinets = () => {
  const productSections = [
    {
      title: "SHAKER STYLE ESSENTIAL COLLECTION",
      products: [
        { name: "Shaker White", isNew: false, image: "/products/SW-SD-Front_1_1.jpg" },
        { name: "Shaker Gray", isNew: false, image: "/products/GR-SD-Front_2.jpg" },
        { name: "Shaker Espresso", isNew: false, image: "/products/SE-SD-Front_2.jpg" }
      ]
    },
    {
      title: "SHAKER STYLE CHARM COLLECTION", 
      products: [
        { name: "Navy Blue", isNew: false, image: "/products/NB-SD-Front_3.jpg" },
        { name: "Iron Black", isNew: false, image: "/products/IB_1.png" },
        { name: "Treasure Chest", isNew: false, image: "/products/TC_1.png" },
        { name: "Aston Green", isNew: false, image: "/products/AG_1.png" },
        { name: "Smokey Ash", isNew: false, image: "/products/SA_1.png" }
      ]
    },
    {
      title: "SLIM SHAKER STYLE",
      products: [
        { name: "Slim Dove White", isNew: false, image: "/products/SDW-SD_4.jpg" },
        { name: "Slim White Oak", isNew: false, image: "/products/SWO-SD_3.jpg" },
        { name: "Slim Aston Green", isNew: false, image: "/products/SAG_1.png" }
      ]
    },
    {
      title: "CLASSIC STYLE",
      products: [
        { name: "Charleston Whie", isNew: false, image: "/products/CW-SD-Front_2.jpg" },
        { name: "Aspen White", isNew: false, image: "/products/AW-SD-Front_1__2.jpg" },
        { name: "Aspen Charcoal Gray", isNew: false, image: "/products/AC-SD-Front_2.jpg" }
      ]
    },
    {
      title: "HIGH GLOSSY EUROPEAN STYLE",
      products: [
        { name: "High Gloss White", isNew: false, image: "/products/HW-SD-Front_1_1_1.jpg" },
        { name: "High Gloss Grey", isNew: false, image: "/products/HG-SD-Front_1_1_1.jpg" },
      ]
    },
    {
      title: "SHAKER STLE - BUILDER GRADE",
      products: [
        { name: "High Gloss White", isNew: false, image: "/products/FW-SD-Front__2.jpg" },
      ]
    }
  ];

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {section.products.map((product, productIndex) => (
                  <div key={productIndex} className="product-tile bg-card rounded-lg overflow-hidden shadow-elegant">
                    {/* Product Image Container */}
                    <div className="relative">
                      {/* Display product image */}
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                        />
                      ) : (
                        <div className="text-muted-foreground text-center">
                          <div className="text-lg font-medium">{product.name}</div>
                          <div className="text-sm mt-2">Image Placeholder</div>
                        </div>
                      )}
                      
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