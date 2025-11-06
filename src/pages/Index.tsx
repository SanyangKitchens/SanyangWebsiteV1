import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ProductsSection from "@/components/ProductsSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

// New sections for the upgraded homepage
import OurProcess from "@/components/OurProcess"
import GalleryTeaser from "@/components/GalleryTeaser";
import TradeCTA from "@/components/TradeCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <OurProcess />
        <ProductsSection />
        <TradeCTA />
        <GalleryTeaser />
        
        {/* <ReviewSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;