import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ChevronDown, Briefcase } from "lucide-react";
// Removed Link and NavLink from react-router-dom
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
// Corrected path to use the alias with the .jsx extension
import AnimatedHamburgerIcon from "@/components/ui/AnimatedHamburgerIcon.jsx";
import { cn } from "@/lib/utils";

// Helper component for NavigationMenu
// This component already renders an <a> tag, so it's fine.
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/50 hover:text-accent-foreground focus:bg-muted/50 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper for NavLink active state
  // Removed `isActive` logic as <a> tags don't support it.
  const desktopNavLinkClass = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent font-medium text-foreground"
  );

  // Base class for mobile nav links
  const mobileNavLinkClass =
    "block p-3 rounded-md text-base font-medium text-foreground hover:bg-muted";

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Bar - Premium Dark Theme */}
      <div className="bg-primary text-primary-foreground/80 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="tel:+447955170009"
              className="flex items-center space-x-2 hover:text-gold transition-colors"
            >
              <Phone size={14} />
              <span>+44 (0)7 9551 70009</span>
            </a>
            <a
              href="mailto:sales@sanyang.co.uk"
              className="flex items-center space-x-2 hover:text-gold transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">sales@sanyang.co.uk</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
          <Button
            size="sm"
            variant="link"
            className="text-primary-foreground/80 hover:text-gold h-auto p-0 text-xs sm:text-sm"
            asChild
          >
            {/* Changed Link to a */}
            <a href="/contact">
              <Briefcase size={14} className="mr-2" />
              For Trade Professionals
            </a>
          </Button>
        </div>
      </div>

      {/* Main Navigation - With Backdrop Blur */}
      <nav className="bg-background/90 backdrop-blur-sm shadow-elegant py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          {/* Changed Link to a */}
          <a
            href="/"
            className="flex items-center gap-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/SanyangCabinetry.png"
              alt="Sanyang Logo"
              className="w-64 md:w-72" // Reduced width for better proportion
            />
          </a>

          {/* Desktop Navigation Menu (shadcn NavigationMenu) */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Changed NavLink to a */}
                <Link to="/" className={desktopNavLinkClass}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-medium text-foreground">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {/* ListItem already uses href and <a>, so it's fine */}
                    <ListItem title="Kitchens">
                    <Link to={"/products/kitchen-cabinets"}>
                      Explore our full range of solid wood kitchen cabinets.
                    </Link>
                    </ListItem>
                    <ListItem title="Bathrooms">
                      <Link to={"/products/bathrooms"}>
                        Discover elegant and durable bathroom vanities.
                      </Link>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {/* Changed NavLink to a */}
                <Link to="/gallery" className={desktopNavLinkClass}>
                  Gallery
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* Changed NavLink to a */}
                <Link to="/about" className={desktopNavLinkClass}>
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="gold" size="sm" asChild>
                  {/* Changed Link to a */}
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex items-center justify-center p-2"
                  aria-label="Toggle mobile menu"
                >
                  <AnimatedHamburgerIcon isOpen={isMenuOpen} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-0">
                <SheetHeader className="p-4 border-b">
                  {/* Changed Link to a */}
                  <Link
                    to="/"
                    className="flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src="/SanyangCabinetry.png"
                      alt="Sanyang Logo"
                      className="w-48"
                    />
                  </Link>
                </SheetHeader>
                <div className="flex flex-col h-full p-4">
                  <div className="flex-grow flex flex-col gap-y-2">
                    <SheetClose asChild>
                      {/* Changed NavLink to a and removed active styling */}
                      <Link to="/" className={mobileNavLinkClass}>
                        Home
                      </Link>
                    </SheetClose>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="p-3 text-base font-medium text-foreground hover:bg-muted hover:no-underline rounded-md [&[data-state=open]]:text-gold">
                          Products
                        </AccordionTrigger>
                        <AccordionContent className="pl-6">
                          <SheetClose asChild>
                            {/* Changed NavLink to a and removed active styling */}
                            <Link
                              to="/products/kitchen-cabinets"
                              className={mobileNavLinkClass}
                            >
                              Kitchens
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            {/* Changed NavLink to a and removed active styling */}
                            <Link
                              to="/products/bathrooms"
                              className={mobileNavLinkClass}
                            >
                              Bathrooms
                            </Link>
                          </SheetClose>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <SheetClose asChild>
                      {/* Changed NavLink to a and removed active styling */}
                      <Link to="/gallery" className={mobileNavLinkClass}>
                        Gallery
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      {/* Changed NavLink to a and removed active styling */}
                      <Link to="/about" className={mobileNavLinkClass}>
                        About Us
                      </Link>
                    </SheetClose>
                  </div>
                  <Separator className="my-4" />
                  <Button variant="gold" size="lg" asChild>
                    <SheetClose asChild>
                      {/* Changed Link to a */}
                      <Link to="/contact">Contact Us</Link>
                    </SheetClose>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;