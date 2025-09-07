export interface Product {
  name: string;
  isNew: boolean;
  image: string;
  images?: string[];
  description?: string;
  tags?: string[];
  category?: string;
}

export interface ProductSection {
  title: string;
  products: Omit<Product, 'category'>[];
}

const productSectionsData: ProductSection[] = [
    {
      title: "SHAKER STYLE ESSENTIAL COLLECTION",
      products: [
        { 
          name: "Shaker White", 
          isNew: false, 
          image: "/products/SW-SD-Front_1_1.jpg",
          images: ["/products/SW-SD-Front_1_1.jpg", "/products/SW_1_.jpg"],
          description: "A timeless classic, our Shaker White cabinets offer a clean, bright look that suits any kitchen style. Made from high-quality solid wood, they are as durable as they are beautiful.",
          tags: ["Classic", "Bright", "Solid Wood"]
        },
        { 
          name: "Shaker Gray", 
          isNew: false, 
          image: "/products/GR-SD-Front_2.jpg",
          images: ["/products/GR-SD-Front_2.jpg"],
          description: "Sophisticated and modern, our Shaker Gray cabinets provide a neutral yet elegant backdrop for your kitchen design.",
          tags: ["Modern", "Neutral", "Elegant"]
        },
        { 
          name: "Shaker Espresso", 
          isNew: false, 
          image: "/products/SE-SD-Front_2.jpg",
          images: ["/products/SE-SD-Front_2.jpg"],
          description: "Rich and luxurious, the Shaker Espresso cabinets bring a sense of warmth and depth to your kitchen space.",
          tags: ["Rich", "Luxurious", "Warm"]
        }
      ]
    },
    {
      title: "SHAKER STYLE CHARM COLLECTION",
      products: [
        { 
          name: "Navy Blue", 
          isNew: false, 
          image: "/products/NB-SD-Front_3.jpg",
          images: ["/products/NB-SD-Front_3.jpg"],
          description: "Bold and dramatic, our Navy Blue cabinets make a statement in any kitchen, offering a touch of modern luxury.",
          tags: ["Bold", "Modern", "Luxury"]
        },
        { 
          name: "Iron Black", 
          isNew: true, 
          image: "/products/IB_1.png",
          images: ["/products/IB_1.png"],
          description: "Sleek and contemporary, Iron Black cabinets provide a stunning contrast and a sophisticated finish.",
          tags: ["Sleek", "Contemporary", "Sophisticated"]
        },
        { 
          name: "Treasure Chest", 
          isNew: true, 
          image: "/products/TC_1.png",
          images: ["/products/TC_1.png"],
          description: "With warm, inviting tones, the Treasure Chest cabinets bring a rustic yet refined charm to your home.",
          tags: ["Warm", "Rustic", "Refined"]
        },
        { 
          name: "Aston Green", 
          isNew: true, 
          image: "/products/AG_1.png",
          images: ["/products/AG_1.png", "/products/AG.jpg", "/products/AG1.png"],
          description: "Earthy and calming, Aston Green cabinets create a serene and natural atmosphere in your kitchen.",
          tags: ["Earthy", "Calming", "Natural"]
        },
        { 
          name: "Smokey Ash", 
          isNew: true, 
          image: "/products/SA_1.png",
          images: ["/products/SA_1.png"],
          description: "A unique and stylish choice, Smokey Ash cabinets offer a subtle yet distinctive look for a modern kitchen.",
          tags: ["Stylish", "Modern", "Distinctive"]
        }
      ]
    },
    {
      title: "SLIM SHAKER STYLE",
      products: [
        { 
          name: "Slim Dove White", 
          isNew: false, 
          image: "/products/SDW-SD_4.jpg",
          images: ["/products/SDW-SD_4.jpg"],
          description: "Clean and minimalist, the Slim Dove White cabinets are perfect for creating a light and airy kitchen space.",
          tags: ["Minimalist", "Light", "Airy"]
        },
        { 
          name: "Slim White Oak", 
          isNew: false, 
          image: "/products/SWO-SD_3.jpg",
          images: ["/products/SWO-SD_3.jpg"],
          description: "Featuring a natural wood grain, our Slim White Oak cabinets add warmth and texture to any kitchen design.",
          tags: ["Natural Wood", "Warmth", "Texture"]
        },
        { 
          name: "Slim Aston Green", 
          isNew: true, 
          image: "/products/SAG_1.png",
          images: ["/products/SAG_1.png"],
          description: "A fresh take on a classic color, the Slim Aston Green cabinets bring a touch of nature indoors.",
          tags: ["Fresh", "Classic", "Nature"]
        }
      ]
    },
    {
      title: "CLASSIC STYLE",
      products: [
        { 
          name: "Charleston White", 
          isNew: false, 
          image: "/products/CW-SD-Front_2.jpg",
          images: ["/products/CW-SD-Front_2.jpg"],
          description: "Timeless and elegant, the Charleston White cabinets feature intricate detailing for a sophisticated look.",
          tags: ["Timeless", "Elegant", "Detailed"]
        },
        { 
          name: "Aspen White", 
          isNew: false, 
          image: "/products/AW-SD-Front_1__2.jpg",
          images: ["/products/AW-SD-Front_1__2.jpg"],
          description: "Bright and inviting, Aspen White cabinets are a versatile choice for any classic kitchen.",
          tags: ["Bright", "Inviting", "Versatile"]
        },
        { 
          name: "Aspen Charcoal Gray", 
          isNew: false, 
          image: "/products/AC-SD-Front_2.jpg",
          images: ["/products/AC-SD-Front_2.jpg"],
          description: "A deep, rich gray, the Aspen Charcoal Gray cabinets add a touch of drama and sophistication.",
          tags: ["Rich", "Dramatic", "Sophisticated"]
        }
      ]
    },
    {
      title: "HIGH GLOSSY EUROPEAN STYLE",
      products: [
        { 
          name: "High Gloss White", 
          isNew: false, 
          image: "/products/HW-SD-Front_1_1_1.jpg",
          images: ["/products/HW-SD-Front_1_1_1.jpg", "/products/high-glossy-european-style.jpg"],
          description: "Sleek and modern, our High Gloss White cabinets create a stunning, reflective surface that brightens any space.",
          tags: ["Sleek", "Modern", "Reflective"]
        },
        { 
          name: "High Gloss Grey", 
          isNew: false, 
          image: "/products/HG-SD-Front_1_1_1.jpg",
          images: ["/products/HG-SD-Front_1_1_1.jpg"],
          description: "Chic and contemporary, High Gloss Grey cabinets offer a sophisticated, polished look for the modern home.",
          tags: ["Chic", "Contemporary", "Polished"]
        },
      ]
    },
    {
      title: "SHAKER STLE - BUILDER GRADE",
      products: [
        { 
          name: "Factory White", 
          isNew: false, 
          image: "/products/FW-SD-Front__2.jpg",
          images: ["/products/FW-SD-Front__2.jpg", "/products/shaker-style-builder-grade_1.jpg"],
          description: "A practical and affordable option, our Factory White cabinets are perfect for large-scale projects and renovations.",
          tags: ["Practical", "Affordable", "Builder Grade"]
        },
      ]
    }
];

export const productSections: ProductSection[] = productSectionsData;

// Flatten all products into a single array and add the category
export const allProducts: Product[] = productSectionsData.flatMap(section =>
    section.products.map(product => ({
        ...product,
        category: section.title
    }))
);
