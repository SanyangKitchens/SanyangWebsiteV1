import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Briefcase } from "lucide-react";
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
import AnimatedHamburgerIcon from "@/components/ui/AnimatedHamburgerIcon.jsx";
import { cn } from "@/lib/utils";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopNavLinkClass = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent font-medium text-foreground"
  );

  const mobileNavLinkClass =
    "block p-3 rounded-md text-base font-medium text-foreground hover:bg-muted";

  return (
    <div className="w-full sticky top-0 z-50">
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

      <nav className="bg-background/90 backdrop-blur-sm shadow-elegant py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/SanyangCabinetry.png"
              alt="Sanyang Logo"
              className="w-64 md:w-72" 
            />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
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
                <Link to="/locations" className={desktopNavLinkClass}>
                  Locations
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/gallery" className={desktopNavLinkClass}>
                  Gallery
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={desktopNavLinkClass}>
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/careers" className={desktopNavLinkClass}>
                  Careers
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
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
                            <Link
                              to="/products/kitchen-cabinets"
                              className={mobileNavLinkClass}
                            >
                              Kitchens
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
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
                      <Link to="/locations" className={mobileNavLinkClass}>
                        Locations
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/gallery" className={mobileNavLinkClass}>
                        Gallery
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/about" className={mobileNavLinkClass}>
                        About Us
                      </Link>
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