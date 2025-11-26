import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { EVENTS } from "@/config/events";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import conferenceHero from "@assets/generated_images/conference_hero_background.png";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const stats = [
    { icon: Users, label: "Industry Leaders", value: "500+" },
    { icon: Award, label: "Successful Events", value: "50+" },
    { icon: Globe, label: "Countries Represented", value: "30+" },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Global Events"
        subtitle="MENA Region"
        description="Join industry leaders, innovators, and decision-makers at our world-class summits across the Middle East"
        backgroundImage={conferenceHero}
        ctaText="Explore Events"
        ctaLink="#events"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="p-8 text-center hover-elevate active-elevate-2">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-16 lg:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our portfolio of Global Event designed to drive innovation and foster collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {EVENTS.map((event, index) => (
              <Link key={event.id} href={`/events/${event.slug}`}>
                <Card
                  className="p-6 lg:p-8 hover-elevate active-elevate-2 cursor-pointer group relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-testid={`card-event-${event.slug}`}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={event.logo}
                        alt={event.name}
                        className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-md bg-background/50 p-3"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {event.name}
                        </h3>
                        <p className="text-sm text-muted-foreground italic mb-4">
                          {event.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/10 border border-secondary/20">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium">{event.location}</span>
                      </div>
                    </div>

                    {event.hasContent ? (
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="text-muted-foreground text-sm">
                        Details coming soon
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24  bg-primary/90 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-6">
              <span className="bg-white bg-clip-text text-transparent">
                Why Attend Our Summits?
              </span>
            </h2>
            <p className="text-lg text-white mb-8 lg:mb-12">
              Join thousands of industry professionals who trust us to deliver exceptional networking opportunities,
              cutting-edge insights, and transformative experiences
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {[
                {
                  title: "Network with Leaders",
                  description: "Connect with C-level executives and decision-makers from across the region"
                },
                {
                  title: "Gain Expert Insights",
                  description: "Learn from industry pioneers through keynotes, panels, and case studies"
                },
                {
                  title: "Discover Innovations",
                  description: "Explore the latest technologies and trends shaping your industry"
                },
                {
                  title: "Build Partnerships",
                  description: "Form strategic alliances and business relationships that drive growth"
                },
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-left p-6 rounded-md bg-card/50 backdrop-blur-sm border border-card-border"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Link href="/register">
              <Button size="lg" className="text-lg px-12 h-14 font-semibold" data-testid="button-cta-register">
                Register for an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
