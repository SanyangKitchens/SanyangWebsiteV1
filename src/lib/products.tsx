export interface Product {
  name: string;
  isNew: boolean;
  image: string;
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
        { name: "Shaker White", isNew: false, image: "/products/SW-SD-Front_1_1.jpg" },
        { name: "Shaker Gray", isNew: false, image: "/products/GR-SD-Front_2.jpg" },
        { name: "Shaker Espresso", isNew: false, image: "/products/SE-SD-Front_2.jpg" }
      ]
    },
    {
      title: "SHAKER STYLE CHARM COLLECTION",
      products: [
        { name: "Navy Blue", isNew: false, image: "/products/NB-SD-Front_3.jpg" },
        { name: "Iron Black", isNew: true, image: "/products/IB_1.png" },
        { name: "Treasure Chest", isNew: true, image: "/products/TC_1.png" },
        { name: "Aston Green", isNew: true, image: "/products/AG_1.png" },
        { name: "Smokey Ash", isNew: true, image: "/products/SA_1.png" }
      ]
    },
    {
      title: "SLIM SHAKER STYLE",
      products: [
        { name: "Slim Dove White", isNew: false, image: "/products/SDW-SD_4.jpg" },
        { name: "Slim White Oak", isNew: false, image: "/products/SWO-SD_3.jpg" },
        { name: "Slim Aston Green", isNew: true, image: "/products/SAG_1.png" }
      ]
    },
    {
      title: "CLASSIC STYLE",
      products: [
        { name: "Charleston White", isNew: false, image: "/products/CW-SD-Front_2.jpg" },
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
        { name: "Factory White", isNew: false, image: "/products/FW-SD-Front__2.jpg" },
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
