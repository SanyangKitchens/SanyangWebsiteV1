import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${'/products/gallery_hero.jpg'})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg md:text-2xl font-light">
            Explore our craftsmanship, creativity, and premium cabinetry designs.
          </p>
        </div>
      </section>

      {/* Main Gallery */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* Featured Showcase */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-elegant">
              <img
                src="/images/showcase1.jpg"
                alt="Showcase 1"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Modern Kitchen</h3>
                <p className="text-muted-foreground">
                  A perfect blend of elegance and functionality with premium solid wood cabinets.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-elegant">
              <img
                src="/images/showcase2.jpg"
                alt="Showcase 2"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Luxury Wardrobe</h3>
                <p className="text-muted-foreground">
                  Custom-made wardrobes that combine style and practicality for every home.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Masonry Style Gallery */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Product Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="col-span-1 row-span-2">
              <img
                src="/images/gallery1.jpg"
                alt="Gallery 1"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <img
              src="/images/gallery2.jpg"
              alt="Gallery 2"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <img
              src="/images/gallery3.jpg"
              alt="Gallery 3"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <div className="col-span-1 row-span-2">
              <img
                src="/images/gallery4.jpg"
                alt="Gallery 4"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <img
              src="/images/gallery5.jpg"
              alt="Gallery 5"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <img
              src="/images/gallery6.jpg"
              alt="Gallery 6"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Slideshow / Carousel Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Inspiration Carousel</h2>
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            {/* Replace this block with a carousel/slider (e.g., Swiper.js or shadcn/ui carousel) */}
            <img
              src="/images/slider1.jpg"
              alt="Slider Example"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
