import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { EVENTS } from "@/config/events";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/speakers", label: "Speakers" },
    { path: "/agenda", label: "Agenda" },
    { path: "/sponsors", label: "Sponsors" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer hover-elevate rounded-md px-3 py-2 transition-all">
              <div className="text-xl lg:text-2xl font-bold font-serif">
                <span className="bg-gradient-to-r from-primary/90 via-primary/100 to-primary/90 bg-clip-text text-transparent">
                  Global Events
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                <span
                  className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                    location === link.path
                      ? "text-primary"
                      : "text-black/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium" data-testid="button-events-dropdown">
                    Events
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="grid gap-3">
                        {EVENTS.map((event) => (
                          <Link key={event.id} href={`/events/${event.slug}`}>
                            <NavigationMenuLink asChild>
                              <div
                                className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2 cursor-pointer"
                                data-testid={`link-event-${event.slug}`}
                              >
                                <img
                                  src={event.logo}
                                  alt={event.name}
                                  className="w-12 h-12 object-contain rounded-md bg-card/50 p-2"
                                />
                                <div className="flex-1">
                                  <div className="text-sm font-semibold">
                                    {event.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {event.date} • {event.location}
                                  </div>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/register">
              <Button size="default" className="font-semibold" data-testid="button-register">
                Register Now
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover-elevate rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border mt-2">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <div
                    className={`px-4 py-2 rounded-md hover-elevate cursor-pointer ${
                      location === link.path ? "bg-primary/10 text-primary" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              
              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                Events
              </div>
              {EVENTS.map((event) => (
                <Link key={event.id} href={`/events/${event.slug}`}>
                  <div
                    className="px-4 py-2 pl-8 rounded-md hover-elevate cursor-pointer text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-link-event-${event.slug}`}
                  >
                    {event.name}
                  </div>
                </Link>
              ))}

              <Link href="/register">
                <Button
                  className="w-full mt-4"
                  size="default"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="mobile-button-register"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
