import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Factory, Warehouse, Store, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Data for the locations
const locations = [
  {
    country: "USA",
    city: "Houston, Texas",
    types: ["Warehouse", "Showroom"],
    description: "Our North American hub ensures rapid distribution across the continent. Visit our showroom to experience our cabinetry quality firsthand.",
    address: "TBC", // Placeholder address
    image: "/products/factory_display1.webp", // Reusing an existing asset as placeholder
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    types: ["Showroom", "Distribution Center"],
    description: "Serving the Middle East and North Africa, our Dubai center showcases our premium luxury collections suited for high-end developments.",
    address: "TBC", // Placeholder address
    image: "/products/home_pro1.jpg", // Reusing an existing asset
  },
  {
    country: "Thailand",
    city: "Rayong",
    types: ["Factory", "Manufacturing"],
    description: "Our state-of-the-art Thai facility specializes in high-volume production of our Shaker style lines, utilizing sustainable plywood sourcing.",
    address: "TBC", // Placeholder
    image: "/products/Sanyang_factory.webp",
  },
  {
    country: "Vietnam",
    city: "Binh Duong",
    types: ["Factory", "Manufacturing"],
    description: "Focused on precision engineering, our Vietnam facility handles our complex joinery and specialized finish applications.",
    address: "TBC", // Placeholder
    image: "/products/factory_display2.webp",
  },
  {
    country: "China",
    city: "Shandong",
    types: ["Headquarters", "Factory"],
    description: "The heart of our operations. Our massive Shandong facility combines R&D, raw material processing, and global logistics coordination.",
    address: "TBC", // Placeholder
    image: "/products/factory_display3.webp",
  },
];

const Locations = () => {
  // Helper to get icon based on type
  const getTypeIcon = (type: string) => {
    if (type.includes("Factory") || type.includes("Manufacturing")) return <Factory className="w-3 h-3 mr-1" />;
    if (type.includes("Warehouse") || type.includes("Distribution")) return <Warehouse className="w-3 h-3 mr-1" />;
    return <Store className="w-3 h-3 mr-1" />;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/products/about_us_hero.JPG')`, // Reusing a good hero image
              filter: "brightness(0.4)",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="secondary" className="mb-4 bg-gold text-primary-foreground border-none px-4 py-1">
              Global Presence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Our Locations
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
              Connecting the world through quality craftsmanship. From our factories in Asia to showrooms in the West.
            </p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center px-4">
            <Globe className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">A Network of Excellence</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sanyang Cabinetry operates a vertically integrated supply chain. 
              By owning our manufacturing facilities in Thailand, Vietnam, and China, and maintaining strategic 
              distribution hubs in the USA and UAE, we guarantee quality control and timely delivery for projects of any scale.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-border shadow-elegant hover:shadow-gold transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                  <img 
                    src={loc.image} 
                    alt={`${loc.country} Location`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white text-2xl font-bold drop-shadow-md">{loc.country}</h3>
                    <p className="text-white/90 text-sm font-medium flex items-center drop-shadow-md">
                      <MapPin className="w-3 h-3 mr-1" /> {loc.city}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {loc.types.map((type, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-normal flex items-center border-muted-foreground/30">
                        {getTypeIcon(type)}
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-base text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {loc.description}
                  </CardDescription>
                  
                  <div className="mt-auto pt-6 border-t border-border">
                    <p className="text-sm text-foreground font-medium mb-1">Address:</p>
                    <p className="text-sm text-muted-foreground italic">{loc.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground" style={{backgroundColor: '#1A090D'}}>
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us or Schedule a Tour</h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    Interested in seeing our production process or viewing our collections in person? 
                    Contact our sales team to arrange a visit to your nearest facility.
                </p>
                <Button asChild size="lg" variant="gold" className="text-primary-foreground font-bold">
                    <Link to="/contact">Contact Our Team</Link>
                </Button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Locations;