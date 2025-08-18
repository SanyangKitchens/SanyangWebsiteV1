import Header from "@/components/Header";
import Footer from "@/components/Footer";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">About Us</h1>
        
        {/* Company Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Company Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Sanyang Cabinetry is a kitchen and bath cabinets wholesaler based in London, England that provides great products for contractors, stores, builders, and remodelers.</p>
            <p>
              Our product has a purpose: to expand and express your possibilities — not your budget.
            </p>
          </div>
        </section>

        {/* Cabinet Types & Installation */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Cabinet Types & Installation</h2>
          
          <div className="space-y-8">
            {/* RTA Cabinets */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">RTA CABINETS</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ready to Assemble (RTA) cabinets require assembly prior to installation</li>
                <li>• Quick and easy assembly: only 15–20 minutes per cabinet</li>
                <li>• On average 12–15% savings vs. pre-assembled cabinets</li>
              </ul>
            </div>

            {/* Pre-Assembled Cabinets */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">PRE-ASSEMBLED CABINETS</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pre-assembled cabinets are ready to install right out of the box</li>
                <li>• Manufacturer-assembled by cabinet professionals</li>
              </ul>
            </div>

            {/* Install */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">INSTALL</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Please ask your sales team professional if you need installation</li>
                <li>• Pricing can be included</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;