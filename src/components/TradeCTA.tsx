import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const TradeCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground" style={{backgroundColor: '#1A090D'}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-gold" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              A Partner You Can Rely On
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto lg:mx-0">
              Are you a builder, contractor, or developer? Apply for a trade
              account today to get access to exclusive pricing, flexible
              financing, and dedicated UK support.
            </p>
          </div>
          <div className="flex-shrink-0 mt-6 lg:mt-0">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Apply for a Trade Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeCTA;