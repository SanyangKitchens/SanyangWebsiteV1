import { Award, Clock, PoundSterling } from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Great Plywood RTA Cabinets with Low Price",
      description: "Get premium quality materials at unbeatable wholesale prices"
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support", 
      description: "Get peace of mind with expert assistance available anytime you need it, 24/7."
    },
    {
      icon: PoundSterling,
      title: "Flexible Financing Options",
      description: "Get the right financing options built around your specific requirements."
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;