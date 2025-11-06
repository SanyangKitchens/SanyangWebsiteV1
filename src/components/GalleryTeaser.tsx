import { Link } from "react-router-dom";
import { galleryPhotos } from "@/lib/gallery_photos";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teaserPhotos = galleryPhotos.slice(0, 4);

const GalleryTeaser = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Inspiration Gallery
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              See how our premium cabinets transform real-world spaces.
            </p>
          </div>
          <Button variant="gold" asChild>
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teaserPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-elegant"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryTeaser;