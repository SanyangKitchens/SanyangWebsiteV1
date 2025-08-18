import { useState } from "react";
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

  const onSubmit = (data: FormData) => {
    // Handle form submission here
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    reset();
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
        
        <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Contact Us</h1>
        
        {/* Tagline */}
        <p className="text-xl text-center text-muted-foreground mb-16">
          Reach out to us to open your account today!
        </p>

        {/* 3 Selling Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 border border-border rounded-lg hover-scale cursor-pointer bg-card hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-foreground mb-4">Account Management</h3>
            <p className="text-muted-foreground">Dedicated account management so you can order whatever, whenever.</p>
          </div>
          
          <div className="text-center p-6 border border-border rounded-lg hover-scale cursor-pointer bg-card hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-foreground mb-4">Dedicated Support</h3>
            <p className="text-muted-foreground">Personalized support to fulfill your business needs.</p>
          </div>
          
          <div className="text-center p-6 border border-border rounded-lg hover-scale cursor-pointer bg-card hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-foreground mb-4">Financing Options</h3>
            <p className="text-muted-foreground">Custom financing options made just for your business.</p>
          </div>
        </div>

        {/* Download Brochure Button */}
        <div className="text-center mb-16">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Download Our Brochure
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
                    {...register("name", { required: "Name is required" })}
                    className="mt-2"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
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
                    {...register("message", { required: "Message is required" })}
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
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
                    <p className="text-muted-foreground">888-860-0880</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-gold" size={24} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@sanyangcabinetry.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
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