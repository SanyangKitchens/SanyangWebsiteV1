import { useForm } from "react-hook-form";
import heroImage from "@/assets/hero-kitchen.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/movlorjw", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Network issue. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 bg-background/95 backdrop-blur-sm min-h-screen">
        <Header />

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
              Let's build something great together. Get in touch with our team to start your project.
            </p>
          </div>
        </section>
        
        <main className="max-w-6xl mx-auto px-4 py-16">

          {/* 3 Selling Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Dedicated Support</h3>
              <p className="text-muted-foreground">Personalised support to fulfill your business needs.</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Financing Options</h3>
              <p className="text-muted-foreground">Custom financing options made just for your business.</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Custom Designs, Low MOQ</h3>
              <p className="text-muted-foreground">Get personalised cabinet designs tailored to your projects, with minimum order quantities that work for you.</p>
            </div>
          </div>

          {/* Download Brochure Button */}
          <div className="text-center mb-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
              <a href="/SanyangBrochure.pdf" target="_blank" rel="noopener noreferrer">
                Download Our Brochure
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                    <Input 
                      id="name" 
                      {...register("name", { required: true })} 
                      className="mt-2" 
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...register("email", { required: true })} 
                      className="mt-2" 
                    />
                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      {...register("phone")} 
                      className="mt-2" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea 
                      id="message" 
                      {...register("message", { required: true })} 
                      className="mt-2 min-h-[120px]" 
                      placeholder="Tell us about your project or inquiry..." 
                    />
                    {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
                  </div>
                  <Button type="submit" variant="gold" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-gold" size={24} />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+44 (0)7 9551 70009</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="text-gold" size={24} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">sales@sanyang.co.uk</p>
                    </div>
                  </div>
                </CardContent>
              </Card>                      
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
