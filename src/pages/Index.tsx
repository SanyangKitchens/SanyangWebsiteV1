import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ProductsSection from "@/components/ProductsSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HighlightsSection />
      <ProductsSection />     
      {/* <ReviewSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
