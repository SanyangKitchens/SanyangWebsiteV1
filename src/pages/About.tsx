import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, // Icon for facilities
  Users2,    // Icon for employees
  Timer,     // Icon for experience
  Globe,     // Icon for global expertise
  ShieldCheck, // Icon for quality
  Briefcase  // Icon for partnership
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section: More confident headline */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${'/products/about_us_hero.JPG'})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Story: A Legacy of Quality
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
            Two decades of global craftsmanship, now available in the UK.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16 md:py-24">

        {/* Section 1: Our Narrative (Rewritten Copy) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              From Global Leader to Your Local Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2002, Sanyang has grown into a global leader in high-quality cabinetry. Our journey began with a focus on American-style solid wood and European-style cabinets, earning a formidable reputation in the US market for reliability and timeless design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Now, we are proud to bring this same level of expertise to the UK. We offer homeowners, developers, and trade professionals access to premium, large-scale manufacturing combined with the dedicated service of a local partner.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/products/Sanyang_factory.webp"
              alt="Sanyang Production Facility"
              className="rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Section 2: By the Numbers (NEW) */}
        <section className="py-20 bg-muted rounded-2xl mb-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Scale You Can Rely On
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <Timer className="w-12 h-12 text-gold mb-3" />
                <span className="text-4xl lg:text-5xl font-bold text-foreground">20+</span>
                <span className="text-muted-foreground mt-2">Years of Expertise</span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <Building2 className="w-12 h-12 text-gold mb-3" />
                <span className="text-4xl lg:text-5xl font-bold text-foreground">85,000</span>
                <span className="text-muted-foreground mt-2">m² Production Area</span>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <Users2 className="w-12 h-12 text-gold mb-3" />
                <span className="text-4xl lg:text-5xl font-bold text-foreground">2,700+</span>
                <span className="text-muted-foreground mt-2">Skilled Craftspeople</span>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col items-center">
                <Globe className="w-12 h-12 text-gold mb-3" />
                <span className="text-4xl lg:text-5xl font-bold text-foreground">3</span>
                <span className="text-muted-foreground mt-2">Global Factories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Philosophy (NEW) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            The Sanyang Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="shadow-elegant border-border h-full">
              <CardHeader>
                <ShieldCheck className="w-10 h-10 text-gold mb-4" />
                <CardTitle className="text-xl font-semibold text-foreground">
                  Quality First, Client-Oriented
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  This is our core philosophy. From raw timber to final polish, every stage is meticulously controlled to meet and exceed international standards.
                </p>
              </CardContent>
            </Card>
            {/* Card 2 */}
            <Card className="shadow-elegant border-border h-full">
              <CardHeader>
                <Globe className="w-10 h-10 text-gold mb-4" />
                <CardTitle className="text-xl font-semibold text-foreground">
                  End-to-End Manufacturing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  With three modern plants and an integrated supply chain, we manage the entire process. This ensures unparalleled reliability, efficiency, and quality control.
                </p>
              </CardContent>
            </Card>
            {/* Card 3 */}
            <Card className="shadow-elegant border-border h-full">
              <CardHeader>
                <Briefcase className="w-10 h-10 text-gold mb-4" />
                <CardTitle className="text-xl font-semibold text-foreground">
                  Your Partner in Trade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We bring our 20+ years of market success to the UK, offering proven designs, flexible MOQs, and dedicated support for trade professionals and developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Factory Gallery */}
        <section className="mb-24 p-8 md:p-12 bg-muted rounded-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Inside Our State-of-the-Art Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src="/products/factory_display1.webp"
              alt="Factory 1"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/products/factory_display2.webp"
              alt="Factory 2"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/products/factory_display3.webp"
              alt="Factory 3"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/products/factory_display4.webp"
              alt="Factory 4"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/products/factory_display5.webp"
              alt="Factory 5"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/products/factory_display8.webp"
              alt="Factory 6"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/products/factory_display6.webp"
              alt="Factory 7"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/products/factory_display7.webp"
              alt="Factory 8"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
          </div>
        </section>

        {/* Section 5: Call to Action (NEW) */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you are a developer managing large-scale projects, a contractor seeking a reliable partner, or a homeowner upgrading your space, we have the quality and scale to bring your vision to life.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;