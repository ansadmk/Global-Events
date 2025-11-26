import { Link } from "wouter";
import { EVENTS } from "@/config/events";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-lg font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Global Events
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Leading business summits across the MENA region, bringing together industry leaders and innovators.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:info@verve-management.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                <Mail className="w-4 h-4" />
                info@verve-management.com
              </a>
              <a href="tel:+97142434677" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-phone">
                <Phone className="w-4 h-4" />
                +971 4 243 4677
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/speakers">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-speakers">
                    Speakers
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/agenda">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-agenda">
                    Agenda
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sponsors">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-sponsors">
                    Sponsors
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Events</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {EVENTS.map((event) => (
                <li key={event.id}>
                  <Link href={`/events/${event.slug}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid={`footer-link-event-${event.slug}`}>
                      {event.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest updates and event announcements.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button size="default" data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Premier Business Summits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
