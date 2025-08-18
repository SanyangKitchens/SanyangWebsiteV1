const ProductsSection = () => {
  const products = [
    {
      title: "Shaker Essential Collection",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400&h=300&fit=crop"
    },
    {
      title: "Shaker Charm Collection", 
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      title: "Slim Shaker Style",
      image: "https://images.unsplash.com/photo-1556909088-4d9e8b90c6d4?w=400&h=300&fit=crop"
    },
    {
      title: "Double Shaker Style",
      image: "https://images.unsplash.com/photo-1556909087-9394bb22e4c9?w=400&h=300&fit=crop"
    },
    {
      title: "Classic Style",
      image: "https://images.unsplash.com/photo-1556909074-c6e38ac87f48?w=400&h=300&fit=crop"
    },
    {
      title: "High Glossy European",
      image: "https://images.unsplash.com/photo-1556909088-4d9e8b90c6d4?w=400&h=300&fit=crop"
    },
    {
      title: "Shaker Builder Grade",
      image: "https://images.unsplash.com/photo-1556909087-890c4b8d3644?w=400&h=300&fit=crop"
    },
    {
      title: "Modern Minimalist",
      image: "https://images.unsplash.com/photo-1556909114-75c0feca4a7e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Products</h2>
          <p className="text-xl text-muted-foreground">Discover our premium cabinet collections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;