import { Star } from "lucide-react";
import { reviews } from "@/lib/reviews";

const ReviewSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-elegant">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{review.quote}"
              </p>
              <div className="font-semibold text-foreground">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
