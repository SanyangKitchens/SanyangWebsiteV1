import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">
          About Us
        </h1>

        {/* Two-column layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">Company Overview</h2>
            <p>
              Founded in 2002 in Shouguang, China, <strong>Sanyang</strong> has
              become a global leader in the design and manufacture of
              high-quality cabinetry. Over the past two decades, we have grown
              from a single facility to three advanced production plants with a
              combined area of <strong>85,000㎡</strong>, supported by dedicated
              warehouses for solid wood materials and finished products. In
              2019, we established our manufacturing base in Vietnam, where our
              workforce has grown to more than <strong>2,700 skilled
              employees</strong>.
            </p>
            <p>
              From the very beginning, we have specialised in creating
              <strong> American-style solid wood cabinets, European-style
              cabinets, and decorative woodwork</strong>. These products have
              been widely exported to the United States, where Sanyang has built
              a strong reputation for <strong>quality, reliability, and timeless
              design</strong>. Now, we are bringing this same level of expertise
              to the <strong>UK market</strong>, offering homeowners,
              developers, and trade professionals access to premium cabinetry
              solutions that combine <strong>international craftsmanship with
              large-scale efficiency</strong>.
            </p>
          </div>

          {/* Image Section */}
          <div>
            {/* Replace src with your image */}
            <img
              src="/your-image.jpg"
              alt="Sanyang Production Facility"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* Strengths Section */}
        <section className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Our Strengths</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>End-to-End Manufacturing</strong> – From raw wood
              selection to the final product, every stage of production is
              carefully controlled to maintain the highest standards.
            </li>
            <li>
              <strong>Large-Scale Efficiency</strong> – With three modern plants
              and an integrated supply chain, we can deliver high-volume
              projects without compromising on detail.
            </li>
            <li>
              <strong>Global Expertise</strong> – With over 20 years of
              international experience and a strong presence in the US market,
              Sanyang brings proven designs and tested solutions to the UK.
            </li>
            <li>
              <strong>Quality Commitment</strong> – Our philosophy is simple:
              <em> quality first, client-oriented</em>. Every cabinet undergoes
              strict quality control to meet international standards.
            </li>
            <li>
              <strong>Skilled Teams</strong> – A cohesive Chinese management
              team and experienced Vietnamese technical workforce ensure both
              craftsmanship and innovation.
            </li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Our Vision in the UK</h2>
          <p className="text-muted-foreground leading-relaxed">
            As we enter the UK market, our goal is to become a trusted name in
            <strong> premium cabinetry and home storage solutions</strong>.
            Whether you are a homeowner looking to upgrade your kitchen, an
            interior designer seeking tailored solutions, or a developer
            managing large-scale projects, Sanyang offers:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Beautiful, functional cabinetry</strong> designed to
              elevate every space
            </li>
            <li>
              <strong>Durable products</strong> built from carefully sourced
              solid wood and premium materials
            </li>
            <li>
              <strong>Customisable solutions</strong> that combine style and
              practicality
            </li>
            <li>
              <strong>Reliable supply and delivery</strong> backed by our
              international production capacity
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Looking to the future, Sanyang is committed to long-term growth in
            the UK and to building lasting partnerships with clients who share
            our passion for <strong>quality, craftsmanship, and innovation</strong>.
          </p>
        </section>
      </main>
        {/* Factory Gallery Section */}
        <section className="mt-16 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Inside Our Production Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src="/images/factory1.jpg"
              alt="Factory 1"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/images/factory2.jpg"
              alt="Factory 2"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/images/factory3.jpg"
              alt="Factory 3"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/images/factory4.jpg"
              alt="Factory 4"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/images/factory5.jpg"
              alt="Factory 5"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/images/factory6.jpg"
              alt="Factory 6"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/images/factory7.jpg"
              alt="Factory 7"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
            <img
              src="/images/factory8.jpg"
              alt="Factory 8"
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
          </div>
        </section>


      <Footer />
    </div>
  );
};

export default About;
