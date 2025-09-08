import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { galleryPhotos } from "@/lib/gallery_photos";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${'/products/home_pro1.jpg'})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
            A perfect blend of elegance and functionality with premium solid wood cabinets.
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
                src="/public/products/AG1.png"
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
                src="/public/products/cabinets_page_hero.JPG"
                alt="Showcase 2"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Luxury Wardrobe</h3>
                <p className="text-muted-foreground">
                  Custom-made cabinets that combine style and practicality for every home.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Masonry Style Gallery */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Product Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryPhotos.map((photo, index) => (
              <div key={index} className={`${photo.colSpan} ${photo.rowSpan}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Slideshow / Carousel Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Inspiration Carousel</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {galleryPhotos.map((photo, index) => (
                <CarouselItem key={index}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
