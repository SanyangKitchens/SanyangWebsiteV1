import { Star } from "lucide-react";

const ReviewSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Excellent quality and professional installation. Highly recommend!"
              </p>
              <div className="font-semibold">Customer {i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;