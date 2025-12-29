import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Briefcase, MapPin, ArrowUpRight, Globe2, Users, Star, Building2, Sparkles, Upload, CheckCircle2, Loader2, Car, MessageSquare } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// Job Data Structure - Sanyang Global Recruitment
const jobData = {
  dubai: {
    country: "United Arab Emirates",
    city: "Dubai",
    description: "Join our flagship Middle Eastern expansion as we redefine luxury cabinetry. We are building an elite founding team for our upcoming Dubai showroom and regional operations.",
    openings: [
      {
        id: "dxb-001",
        title: "Senior Business Development Officer - Projects",
        type: "Full-time",
        experience: "5+ Years (UAE Real Estate/Furniture)",
        link: "https://www.linkedin.com/jobs/",
        highlight: "Leadership Role",
        details: "Seeking an ambitious professional with a vast network of developers, leadership experience to hire/lead 2-5 BDRs, and a charm for sales. Must have a driving license and excellent English. Arabic is a bonus. Q2 2026 Start."
      },
      {
        id: "dxb-002",
        title: "Business Development Representative",
        type: "Full-time",
        experience: "3+ Years (Sales/Real Estate)",
        link: "https://www.linkedin.com/jobs/",
        highlight: "Showroom Opening Team",
      },
      {
        id: "dxb-003",
        title: "Showroom Manager",
        type: "Full-time",
        experience: "2+ Years Experience",
        link: "https://www.linkedin.com/jobs/",
        highlight: "Brand Ambassador",
      }
    ],
  },
  uk: {
    country: "United Kingdom",
    city: "London",
    description: "Our center of British excellence. While we are not currently recruiting for new roles in the UK, we are always eager to meet world-class talent for future growth phases.",
    openings: [], // Trigger for the "No openings" state
  },
};

const Careers = () => {
  const [activeTab, setActiveTab] = useState("dubai");
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // States for Select components
  const [expertise, setExpertise] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add select values to FormData manually
    formData.append("Area of Expertise", expertise);
    formData.append("Preferred Region", region);

    try {
      const response = await fetch("https://formspree.io/f/mlgeagbl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Application Received",
          description: "Thank you for your interest. We have added you to our global talent pool.",
        });
        form.reset();
        setFileName(null);
        setExpertise("");
        setRegion("");
      } else {
        const data = await response.json();
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: data.errors ? data.errors[0].message : "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Could not reach the server. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A]">
      <Header />

      {/* Hero Section - Standardized Height and Typography */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('/products/factory_display1.webp')`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Careers at Sanyang
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
            Join a global team redefining the standard of quality.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group space-y-4">
              <div className="w-12 h-12 bg-[#F8F5EE] rounded-xl flex items-center justify-center text-[#D4AF37]">
                <Globe2 size={24} />
              </div>
              <h3 className="text-xl font-bold">Global Presence</h3>
              <p className="text-gray-500 leading-relaxed">From our Asian roots to our expansion in the UK, we offer an international career path in luxury design.</p>
            </div>
            <div className="group space-y-4">
              <div className="w-12 h-12 bg-[#F8F5EE] rounded-xl flex items-center justify-center text-[#D4AF37]">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">Be part of our flagship expansion into the world's most ambitious luxury interior markets.</p>
            </div>
            <div className="group space-y-4">
              <div className="w-12 h-12 bg-[#F8F5EE] rounded-xl flex items-center justify-center text-[#D4AF37]">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold">Expert Collaboration</h3>
              <p className="text-gray-500 leading-relaxed">Work alongside industry veterans and high-end developers on iconic residential projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Opportunities Section */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Open Opportunities</h2>
            <p className="text-gray-500">Explore current vacancies within our global network.</p>
          </div>

          <Tabs defaultValue="dubai" onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-gray-200 p-1 h-auto shadow-sm rounded-full">
                <TabsTrigger value="dubai" className="px-8 py-2.5 rounded-full data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-500 font-semibold transition-all">
                  Dubai, UAE
                </TabsTrigger>
                <TabsTrigger value="uk" className="px-8 py-2.5 rounded-full data-[state=active]:bg-black data-[state=active]:text-white text-gray-500 font-semibold transition-all">
                  United Kingdom
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(jobData).map(([key, data]) => (
              <TabsContent key={key} value={key} className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500 outline-none">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-md text-gray-600">
                      <MapPin size={16} className="text-[#D4AF37]" />
                      <span className="font-bold uppercase tracking-widest text-[10px]">{data.country}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{data.city}</h3>
                    <p className="text-gray-500 leading-relaxed">{data.description}</p>
                    {data.openings.length > 0 && (
                      <div className="pt-4 flex items-center gap-2 text-gray-400 text-sm border-t border-gray-50">
                        <Building2 size={16} />
                        <span>{data.openings.length} Active Roles</span>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    {data.openings.map((job) => (
                      <Card key={job.id} className="group border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                        <CardContent className="p-6 md:p-8">
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="space-y-3">
                              <div className="flex flex-wrap gap-2">
                                {job.highlight && (
                                  <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-none font-bold rounded-md px-2 text-[10px]">
                                    {job.highlight}
                                  </Badge>
                                )}
                              </div>
                              <h4 className="text-xl font-bold group-hover:text-[#D4AF37] transition-colors">{job.title}</h4>
                              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-medium">
                                <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.type}</span>
                                <span className="flex items-center gap-1.5"><Star size={14} /> {job.experience}</span>
                              </div>
                              {job.details && (
                                <p className="text-sm text-gray-500 max-w-xl bg-gray-50 p-3 rounded-lg border-l-2 border-[#D4AF37]">
                                  {job.details}
                                </p>
                              )}
                            </div>
                            <Button asChild variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-full px-6">
                              <a href={job.link} target="_blank" rel="noopener noreferrer">
                                Apply <ArrowUpRight size={16} className="ml-2" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {data.openings.length === 0 && (
                      <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-gray-100 p-12 text-center">
                        <Users size={48} className="text-gray-200 mb-4" />
                        <h4 className="text-lg font-bold mb-2">No Active Positions</h4>
                        <p className="text-gray-400 max-w-sm mb-6">We are not currently recruiting for additional roles in the UK. However, our expansion is continuous—join the talent pool to stay informed.</p>
                        <Button 
                          variant="link" 
                          className="text-[#D4AF37] font-bold p-0"
                          onClick={() => document.getElementById('talent-pool-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Join the Talent Pool below
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Talent Pool Form - Professional Light Theme */}
      <section id="talent-pool-form" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Join Our Global Talent Pool</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Ambition meets excellence. Submit your credentials to be notified as we continue our global expansion across the UAE, UK, and USA.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-semibold text-xs uppercase tracking-wider text-gray-500">First Name</Label>
                <Input id="firstName" name="first_name" placeholder="Jane" required className="bg-white border-gray-200 h-12 focus-visible:ring-[#D4AF37]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-semibold text-xs uppercase tracking-wider text-gray-500">Last Name</Label>
                <Input id="lastName" name="last_name" placeholder="Doe" required className="bg-white border-gray-200 h-12 focus-visible:ring-[#D4AF37]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold text-xs uppercase tracking-wider text-gray-500">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="jane@example.com" required className="bg-white border-gray-200 h-12 focus-visible:ring-[#D4AF37]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold text-xs uppercase tracking-wider text-gray-500">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+44 ..." className="bg-white border-gray-200 h-12 focus-visible:ring-[#D4AF37]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="role" className="font-semibold text-xs uppercase tracking-wider text-gray-500">Area of Expertise</Label>
                <Select required onValueChange={setExpertise}>
                  <SelectTrigger className="bg-white border-gray-200 h-12">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales & Business Development</SelectItem>
                    <SelectItem value="design">Kitchen Design & Engineering</SelectItem>
                    <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
                    <SelectItem value="operations">Showroom Management</SelectItem>
                    <SelectItem value="other">Other Professional Role</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="region" className="font-semibold text-xs uppercase tracking-wider text-gray-500">Preferred Region</Label>
                <Select required onValueChange={setRegion}>
                  <SelectTrigger className="bg-white border-gray-200 h-12">
                    <SelectValue placeholder="Select a region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uae">United Arab Emirates (Dubai)</SelectItem>
                    <SelectItem value="uk">United Kingdom (London)</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="any">Open to Relocation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-semibold text-xs uppercase tracking-wider text-gray-500">Brief Statement</Label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Share a brief overview of your industry experience and your fit for the Sanyang brand." 
                className="min-h-[120px] bg-white border-gray-200 resize-none focus-visible:ring-[#D4AF37]"
              />
            </div>

            {/* <div className="space-y-2">
              <Label htmlFor="cv" className="font-semibold text-xs uppercase tracking-wider text-gray-500">Curriculum Vitae</Label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="cv-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl cursor-pointer hover:bg-gray-100/50 transition-colors border-gray-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                    <Upload className="w-8 h-8 mb-3 text-[#D4AF37]" />
                    <p className="text-sm text-gray-500 font-medium"><span className="text-[#D4AF37]">Click to upload CV</span> or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {fileName ? <span className="text-green-600 font-bold flex items-center justify-center"><CheckCircle2 className="w-3 h-3 mr-1"/> {fileName}</span> : "PDF, DOC or DOCX (MAX. 5MB)"}
                    </p>
                  </div>
                  <input id="cv-upload" name="cv" type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                </label>
              </div>
            </div> */}

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-black text-white hover:bg-[#D4AF37] hover:text-black px-12 py-6 text-lg font-bold rounded-full transition-all flex items-center justify-center shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                "Submit to Talent Pool"
              )}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;