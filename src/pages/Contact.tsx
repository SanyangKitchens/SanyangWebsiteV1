import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Convert FormData to a plain JavaScript object for JSON serialization
    const data = Object.fromEntries(formData.entries());

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
        form.reset();
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+44 (0)7 9551 70009",
      link: "tel:+447955170009",
      sub: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "sales@sanyang.co.uk",
      link: "mailto:sales@sanyang.co.uk",
      sub: "We'll respond within 24 hours"
    },
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   value: "Unit 19, The IO Centre, Hatfield",
    //   link: "https://maps.google.com",
    //   sub: "Hearle Way, AL10 9EW"
    // },
    // {
    //   icon: Clock,
    //   title: "Working Hours",
    //   value: "Monday - Friday",
    //   link: null,
    //   sub: "8:00 AM - 6:00 PM"
    // }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 hover:scale-100"
            style={{
              backgroundImage: `url('/products/kitchen_design5.jpg')`,
              filter: "brightness(0.35)",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
              Whether you're a trade professional or a homeowner, we're here to bring your vision to life.
            </p>
          </div>
        </section>

        {/* Main Content Split */}
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info & Text */}
            <div className="space-y-12 animate-in slide-in-from-left duration-700 delay-100">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Let's discuss your project
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Sanyang Cabinetry, we believe in building lasting partnerships. 
                  Our team of experts is ready to assist you with product specifications, 
                  bulk orders, or general inquiries about our manufacturing capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link || "#"} 
                    className={`group block ${!item.link ? 'cursor-default' : ''}`}
                  >
                    <Card className="h-full border-border shadow-sm hover:shadow-elegant hover:border-gold/50 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col items-start">
                        <div className="p-3 bg-primary/5 rounded-lg text-primary mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-1 text-foreground">{item.title}</h3>
                        <p className="text-foreground/90 font-medium mb-1">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.sub}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
              
              {/* Trade CTA Mini */}
              <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-elegant">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Trade Professional?</h3>
                    <p className="text-primary-foreground/80 mb-4">
                      Register for a trade account to access exclusive pricing, bulk discounts, and priority support.
                    </p>
                    <Button variant="link" className="text-gold p-0 hover:text-white transition-colors font-semibold">
                      Ask about Trade Accounts &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="relative animate-in slide-in-from-right duration-700 delay-100">
              {/* Decorative backdrop element */}
              <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-2xl -z-10" />
              
              <Card className="border-border shadow-elegant bg-background/95 backdrop-blur-sm">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Send us a Message</h3>
                  <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input name="firstName" id="firstName" placeholder="John" className="bg-muted/30" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input name="lastName" id="lastName" placeholder="Doe" className="bg-muted/30" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input name="email" id="email" type="email" placeholder="john@example.com" className="bg-muted/30" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input name="phone" id="phone" type="tel" placeholder="+44 ..." className="bg-muted/30" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input name="subject" id="subject" placeholder="Product Inquiry, Partnership, etc." className="bg-muted/30" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        name="message"
                        id="message" 
                        placeholder="How can we help you?" 
                        className="min-h-[150px] bg-muted/30 resize-none" 
                        required
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full font-bold text-primary-foreground transition-transform active:scale-95">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        {/* Map Placeholder Section
        <section className="h-[400px] w-full bg-muted relative">
          <div className="absolute inset-0 bg-[url('/products/kitchen_design3.jpg')] bg-cover bg-center opacity-20 grayscale"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/5">
             <MapPin className="w-12 h-12 text-gold mb-4 animate-bounce" />
             <h3 className="text-2xl font-bold text-foreground">Visit Our UK Showroom</h3>
             <p className="text-muted-foreground mt-2">Hatfield, United Kingdom</p>
             <Button variant="outline" className="mt-6 border-gold text-gold hover:bg-gold hover:text-white bg-background">
                Get Directions
             </Button>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;