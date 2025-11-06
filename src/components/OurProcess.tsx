import { ListStart, Building, Truck, Users2 } from "lucide-react";

const steps = [
  {
    icon: ListStart,
    title: "1. Consult & Design",
    description:
      "We start with your vision. Our team works with your plans to specify the perfect cabinetry solution for your project.",
  },
  {
    icon: Building,
    title: "2. Global Manufacturing",
    description:
      "Our 85,000m² state-of-the-art facilities build your order to exact international standards.",
  },
  {
    icon: Truck,
    title: "3. UK-Based Logistics",
    description:
      "We manage the entire supply chain, ensuring reliable and timely delivery directly to your UK site.",
  },
  {
    icon: Users2,
    title: "4. Dedicated Support",
    description:
      "Your local UK-based partner is here to support you, providing expert assistance for a seamless project.",
  },
];

const OurProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            A Seamless Process, Built for Professionals
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial design to final delivery, we provide a reliable,
            end-to-end partnership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;