import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { productSections } from "../lib/products";
import ProductCard from "../components/ui/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TradeCTA from "../components/TradeCTA";
import { Package, Layers, Palette } from "lucide-react";

// Key features for the new section
const features = [
  {
    icon: Package,
    title: "All-Plywood Construction",
    description:
      "Our cabinets are built with durable, all-plywood boxes for superior strength and longevity. No particle board.",
  },
  {
    icon: Layers,
    title: "Dovetail Drawers",
    description:
      "Experience the mark of quality with sturdy dovetail joinery and soft-close hardware on all our drawers.",
  },
  {
    icon: Palette,
    title: "Premium Finishes",
    description:
      "From high-gloss acrylics to durable paints, our multi-step finishing process ensures a beautiful, long-lasting surface.",
  },
];

const KitchenCabinets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${'/products/our_products_hero.jpg'})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Dream Kitchen
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
            Explore our curated collections, crafted for quality and timeless style.
          </p>
        </div>
      </section>

      {/* NEW: Key Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The Sanyang Standard
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Every cabinet we build is backed by a commitment to quality materials and
              lasting craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-elegant border-border h-full">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-gradient-gold rounded-full inline-flex mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      {/* Main Product Section with Tabs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Kitchen Collections
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Find the perfect style for your project.
            </p>
          </div>

          <Tabs defaultValue={productSections[0].title} className="w-full">
            <TabsList className="flex flex-wrap h-auto justify-center mb-12">
              {productSections.map((section, sectionIndex) => (
                <TabsTrigger 
                  key={sectionIndex} 
                  value={section.title} 
                  className="text-xs sm:text-sm"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {productSections.map((section, sectionIndex) => (
              <TabsContent key={sectionIndex} value={section.title}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {section.products.map((product, productIndex) => (
                    <ProductCard
                      key={productIndex}
                      product={{ ...product, category: section.title }}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* NEW: Trade CTA Section */}
      <TradeCTA />

      <Footer />
    </div>
  );
};

export default KitchenCabinets;