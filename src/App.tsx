// src/App.tsx (Updated)

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import KitchenCabinets from "./pages/KitchenCabinets";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/ui/CookieConsent";
import Gallery from "./pages/Gallery";
import Warranty from "./pages/Warranty";
import Bathrooms from "./pages/Bathrooms";
import Locations from "./pages/Locations"; // Import the new page
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/kitchen-cabinets" element={<KitchenCabinets />} />
          <Route path="/products/bathrooms" element={<Bathrooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;