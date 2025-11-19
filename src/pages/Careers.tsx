import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Globe, 
  Upload, 
  TrendingUp, 
  Users, 
  Package, 
  CheckCircle2, 
  MapPin
} from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would handle the file upload via a backend service
    // For now, we simulate a successful submission
    
    toast({
      title: "Application Received",
      description: "Thank you for your interest. We have added your CV to our talent pool.",
    });
    
    e.currentTarget.reset();
    setFileName(null);
  };

  const targetRoles = [
    {
      title: "Supply Chain Finance",
      icon: TrendingUp,
      description: "Experts who can navigate complex cross-border logistics, optimize cash flow, and manage financial risks across our global manufacturing network."
    },
    {
      title: "Executive Assistance",
      icon: Users,
      description: "Highly organized professionals to support our leadership team, managing communications and operations between our Asian and Western hubs."
    },
    {
      title: "Warehousing & Logistics",
      icon: Package,
      description: "Operational leaders to oversee inventory management, quality control, and distribution efficiency in our USA and UAE facilities."
    }
  ];

  const regions = [
    {
      name: "North America (USA)",
      type: "Sales & Distribution",
      desc: "Focus on customer experience, logistics, and showroom operations."
    },
    {
      name: "Middle East (UAE)",
      type: "Hub & Distribution",
      desc: "Strategic gateway for our EMEA operations and luxury project management."
    },
    {
      name: "Asia (China, Thailand, Vietnam)",
      type: "Manufacturing & R&D",
      desc: "The heart of production, engineering, and product development."
    },
    {
      name: "United Kingdom (London, Birmingham)",
      type: "Showrooms & Distribution",
      desc: "Strategic distribution hubs, corporate strategy and product design."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/products/factory_display5.webp')`,
              filter: "brightness(0.3)",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge className="mb-4 bg-gold text-primary-foreground hover:bg-gold/90 border-none px-4 py-1 text-sm">
              Join Our Network
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Build the Future with Us
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
              We are always scouting for exceptional talent to drive our global supply chain and operations.
            </p>
          </div>
        </section>

        {/* Current Status & Target Roles */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Current Opportunities
              </h2>
              <div className="p-4 bg-muted/30 border border-border rounded-lg inline-block">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <span className="text-gold font-bold mr-2">Note:</span>
                  We are not actively filling specific vacancies at this moment. However, we are proactively building a shortlist of talent for upcoming roles in <span className="text-foreground font-medium">Supply Chain Finance</span>, <span className="text-foreground font-medium">Executive Support</span>, and <span className="text-foreground font-medium">Warehousing</span>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {targetRoles.map((role, index) => (
                <Card key={index} className="group hover:shadow-gold transition-all duration-300 border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/5 text-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <role.icon size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Context */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Drop Your CV
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Tell us about yourself. Select your preferred region and area of expertise, and we will contact you when a matching opportunity arises.
                  </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-foreground flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-gold" />
                        Where do you want to work?
                    </h3>
                    <div className="grid gap-4">
                        {regions.map((region, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-4 rounded-lg bg-background border border-border shadow-sm">
                                <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-foreground text-sm">{region.name}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{region.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              </div>

              {/* Right Side: The Form */}
              <div className="lg:col-span-7">
                <Card className="border-none shadow-2xl bg-background/80 backdrop-blur-md">
                  <CardHeader className="bg-primary text-primary-foreground rounded-t-lg py-6">
                    <CardTitle className="text-2xl flex items-center">
                        <Briefcase className="mr-3 text-gold" />
                        Talent Pool Application
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Jane" required className="bg-white/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required className="bg-white/50" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="jane@example.com" required className="bg-white/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="+1 ..." className="bg-white/50" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="role">Area of Expertise</Label>
                            <Select required>
                                <SelectTrigger className="bg-white/50">
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="finance">Supply Chain Finance</SelectItem>
                                    <SelectItem value="executive-assistant">Executive Assistant</SelectItem>
                                    <SelectItem value="warehousing">Warehousing & Operations</SelectItem>
                                    <SelectItem value="logistics">Logistics</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="region">Preferred Region</Label>
                            <Select required>
                                <SelectTrigger className="bg-white/50">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="uae">United Arab Emirates (Dubai)</SelectItem>
                                    <SelectItem value="uk">United Kingdom (London, Birmingham)</SelectItem>
                                    <SelectItem value="usa">United States (Houston, Los Angeles)</SelectItem>
                                    <SelectItem value="china">China (Shandong)</SelectItem>
                                    <SelectItem value="thailand">Thailand (Rayong)</SelectItem>
                                    <SelectItem value="vietnam">Vietnam (Binh Duong)</SelectItem>
                                    <SelectItem value="any">Open to Relocation</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Short Message</Label>
                        <Textarea 
                            id="message" 
                            placeholder="Tell us briefly about your experience and why you'd be a great fit." 
                            className="min-h-[100px] bg-white/50 resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cv">Upload CV (PDF/Word)</Label>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="cv-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors border-muted-foreground/25">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-3 text-gold" />
                                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {fileName ? <span className="text-green-600 font-semibold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> {fileName}</span> : "PDF, DOC or DOCX (MAX. 5MB)"}
                                    </p>
                                </div>
                                <input id="cv-upload" type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                            </label>
                        </div>
                      </div>

                      <Button type="submit" variant="gold" size="lg" className="w-full font-bold text-primary-foreground">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Careers;