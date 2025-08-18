import { Button } from "@/components/ui/button";
import { UserPlus, Search, ShoppingBag } from "lucide-react";

const HowToPurchaseSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register to Become a Dealer",
      description: "Join our network of professional dealers and gain access to wholesale pricing and exclusive benefits.",
      buttonText: "Get Started",
      videoPlaceholder: "Register as Dealer Video"
    },
    {
      icon: Search,
      title: "Browse Product",
      description: "Explore our extensive catalog of premium cabinets and find the perfect styles for your projects.",
      buttonText: "Choose Door Style", 
      videoPlaceholder: "Product Browse Video"
    },
    {
      icon: ShoppingBag,
      title: "Select Products to Order",
      description: "Use our easy ordering system to select quantities, finishes, and specifications for your cabinet orders.",
      buttonText: "Start Shopping",
      videoPlaceholder: "Order Process Video"
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">How to Purchase</h2>
          <p className="text-xl text-muted-foreground">Simple steps to get started with Sanyang Cabinetry</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-gold transition-all duration-300 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Video Placeholder */}
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">{step.videoPlaceholder}</span>
                  </div>
                </div>

                <Button variant="gold-outline" className="w-full">
                  {step.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToPurchaseSection;