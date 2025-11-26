import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock, Bell } from "lucide-react";
import { useEffect } from "react";
import abstractPattern from "@assets/generated_images/abstract_innovation_pattern.png";

export default function EventFour() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Future Innovation Summit"
        subtitle="Coming Soon"
        description="Transforming Business Excellence - Details to be announced"
        backgroundImage={abstractPattern}
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 lg:p-16 text-center" data-aos="fade-up">
            <img
              src="/assets/logos/eventLogo4.png"
              alt="Future Innovation Summit"
              className="w-32 h-32 object-contain rounded-md bg-background/50 p-4 mx-auto mb-8"
            />

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Exciting New Event Coming Soon
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're preparing something special for you. This upcoming summit will bring together industry leaders,
              innovators, and decision-makers for an unforgettable experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center p-6 rounded-md bg-card">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Date</h3>
                <p className="text-sm text-muted-foreground">To Be Announced</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-md bg-card">
                <Clock className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-sm text-muted-foreground">Multi-Day Event</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-md bg-card">
                <Bell className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-bold mb-2">Updates</h3>
                <p className="text-sm text-muted-foreground">Subscribe for News</p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 mb-8">
              <h3 className="font-bold text-xl mb-4">Get Notified</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know when registration opens and receive exclusive early-bird offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Link href="/contact" className="flex-1">
                  <Button size="lg" className="w-full" data-testid="button-notify-me">
                    Contact Us for Updates
                  </Button>
                </Link>
              </div>
            </Card>

            <div className="text-sm text-muted-foreground">
              <p>For more information or sponsorship inquiries, please contact us at:</p>
              <a
                href="mailto:info@verve-management.com"
                className="text-primary hover:underline font-medium"
                data-testid="link-email-info"
              >
                info@verve-management.com
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
