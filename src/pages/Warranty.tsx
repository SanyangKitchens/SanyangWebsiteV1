import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck, MessageSquare, Award } from "lucide-react";

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/products/warranty-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our 10-Year Warranty
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
            Quality craftsmanship, guaranteed for a decade.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Sanyang Cabinetry's Commitment to Quality
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-border rounded-lg bg-card">
              <ShieldCheck className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">10-Year Guarantee</h3>
              <p className="text-muted-foreground">
                We stand behind our products with a decade-long warranty, ensuring your peace of mind.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-card">
              <Award className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">3-Year Full Refund</h3>
              <p className="text-muted-foreground">
                If your cabinets fail due to a manufacturing defect within 3 years, we offer a full refund and product return.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-card">
              <MessageSquare className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Flexible Support</h3>
              <p className="text-muted-foreground">
                We're always open to discussing your needs and providing support beyond the standard warranty.
              </p>
            </div>
          </div>
        </section>
        
        <section className="prose lg:prose-xl max-w-none text-muted-foreground leading-relaxed">
          <h3 className="text-2xl font-bold text-foreground">Our Warranty Policy</h3>
          <p>
            At Sanyang Cabinetry, we pride ourselves on delivering high-quality kitchen and bath cabinets that are built to last. Our 10-year limited warranty reflects our confidence in our craftsmanship and materials. This warranty applies to all our cabinet collections, including our popular Shaker Style, Classic, and High Gloss European lines.
          </p>

          <h4 className="font-bold text-foreground">What a 10-year warranty means for you</h4>
          <p>
            This warranty covers defects in materials and workmanship for a period of 10 years from the date of purchase. We guarantee that our solid wood cabinets will be free from defects in material and craftsmanship under normal use. Should any part of your cabinetry fail during this period, we will repair or replace the defective component at our discretion.
          </p>

          <h4 className="font-bold text-foreground">3-year full refund policy</h4>
          <p>
            For the first three years of your warranty, we offer an enhanced level of protection. If your cabinets break or wear out due to a manufacturing fault (not caused by the customer), you are entitled to a full refund and a product return. This is our promise to you that your investment is protected.
          </p>

          <h4 className="font-bold text-foreground">Exclusions and limitations</h4>
          <p>
            This warranty does not cover damage resulting from improper installation, accidents, misuse, abuse, or normal wear and tear. It is essential to follow our care and maintenance guidelines to ensure the longevity of your cabinets. This warranty is non-transferable and applies only to the original purchaser.
          </p>

          <h4 className="font-bold text-foreground">How to make a claim</h4>
          <p>
            To make a warranty claim, please contact our customer service team with your proof of purchase and a description of the issue. We are committed to resolving your claim as quickly and efficiently as possible.
          </p>

          <h4 className="font-bold text-foreground">Bespoke warranty solutions</h4>
          <p>
            We understand that every project is unique. If you have specific warranty requirements or would like to discuss extended coverage, please reach out to our team. We are always willing to negotiate and find a solution that works for you.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Warranty;

