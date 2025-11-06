import React, { useState } from "react";
import { Phone, Mail, ChevronDown, Briefcase } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
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
// Corrected relative path with .jsx extension
import AnimatedHamburgerIcon from "./ui/AnimatedHamburgerIcon.jsx"; 
import { cn } from "@/lib/utils";

// Helper component for NavigationMenu
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
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      navigationMenuTriggerStyle(),
      "bg-transparent font-medium", // Removed hover:text-gold
      isActive ? "bg-accent/50" : "text-foreground" // Use text-foreground for non-active
    );

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
            <Link to="/contact">
              <Briefcase size={14} className="mr-2" />
              For Trade Professionals
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Navigation - With Backdrop Blur */}
      <nav className="bg-background/90 backdrop-blur-sm shadow-elegant py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/SanyangCabinetry.png"
              alt="Sanyang Logo"
              className="w-64 md:w-72" // Reduced width for better proportion
            />
          </Link>

          {/* Desktop Navigation Menu (shadcn NavigationMenu) */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink to="/" className={getNavLinkClass}>
                  Home
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-medium text-foreground">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/products/kitchen-cabinets" title="Kitchens">
                      Explore our full range of solid wood kitchen cabinets.
                    </ListItem>
                    <ListItem href="/products/bathrooms" title="Bathrooms">
                      Discover elegant and durable bathroom vanities.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/gallery" className={getNavLinkClass}>
                  Gallery
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/about" className={getNavLinkClass}>
                  About Us
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="gold" size="sm" asChild>
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
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          cn(
                            "block p-3 rounded-md text-base font-medium text-foreground hover:bg-muted",
                            isActive && "bg-muted text-gold"
                          )
                        }
                      >
                        Home
                      </NavLink>
                    </SheetClose>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="p-3 text-base font-medium text-foreground hover:bg-muted hover:no-underline rounded-md [&[data-state=open]]:text-gold">
                          Products
                        </AccordionTrigger>
                        <AccordionContent className="pl-6">
                          <SheetClose asChild>
                            <NavLink
                              to="/products/kitchen-cabinets"
                              className={({ isActive }) =>
                                cn(
                                  "block p-3 rounded-md text-base font-medium text-foreground hover:bg-muted",
                                  isActive && "bg-muted text-gold"
                                )
                              }
                            >
                              Kitchens
                            </NavLink>
                          </SheetClose>
                          <SheetClose asChild>
                            <NavLink
                              to="/products/bathrooms"
                              className={({ isActive }) =>
                                cn(
                                  "block p-3 rounded-md text-base font-medium text-foreground hover:bg-muted",
                                  isActive && "bg-muted text-gold"
                                )
                              }
                            >
                              Bathrooms
                            </NavLink>
                          </SheetClose>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <SheetClose asChild>
                      <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                          cn(
                            "block p-3 rounded-md text-base font-medium text-foreground hover:bg-muted",
                            isActive && "bg-muted text-gold"
                          )
                        }
                      >
                        Gallery
                      </NavLink>
                    </SheetClose>
                    <SheetClose asChild>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          cn(
                            "block p-3 rounded-md text-base font-medium text-foreground hover:bg-muted",
                            isActive && "bg-muted text-gold"
                          )
                        }
                      >
                        About Us
                      </NavLink>
                    </SheetClose>
                  </div>
                  <Separator className="my-4" />
                  <Button variant="gold" size="lg" asChild>
                    <SheetClose asChild>
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