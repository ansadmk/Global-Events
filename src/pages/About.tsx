import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import networkingImage from "@assets/generated_images/networking_event_image.png";

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver world-class events that exceed expectations and set industry standards"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting connections between professionals, leaders, and innovators"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Curated content, exceptional speakers, and premium experiences every time"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Showcasing cutting-edge ideas and emerging trends that shape the future"
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="About Global Events"
        subtitle="Our Story"
        description="Leading the way in business events across the MENA region"
        backgroundImage={networkingImage}
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
                <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                  Empowering Business Leaders
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For over a decade, we have been at the forefront of organizing Global Event
                  that bring together the brightest minds and most influential leaders across the Middle East
                  and North Africa region.
                </p>
                <p>
                  Our mission is to create transformative experiences that foster innovation, drive business
                  growth, and build lasting professional relationships. Through carefully curated content,
                  world-class speakers, and exceptional networking opportunities, we help organizations
                  stay ahead of industry trends and navigate the evolving business landscape.
                </p>
                <p>
                  Each summit is designed with a singular focus: to deliver tangible value to our attendees.
                  From CXOs to department heads, marketing leaders to technology innovators, our events
                  cater to professionals who are shaping the future of their industries.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To create world-class platforms where business leaders connect, learn, and collaborate
                      to drive innovation and excellence across industries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the most trusted and sought-after organizer of business summits in the MENA region,
                      recognized for delivering exceptional value and transformative experiences.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 lg:p-8 hover-elevate active-elevate-2 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Why Partner With Us?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We offer comprehensive sponsorship and partnership opportunities that deliver measurable ROI
              and unparalleled brand exposure
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Targeted Audience",
                  description: "Reach decision-makers with budget authority and genuine buying intent"
                },
                {
                  title: "Thought Leadership",
                  description: "Position your brand as an industry leader through speaking opportunities"
                },
                {
                  title: "Lead Generation",
                  description: "Connect directly with qualified prospects in a solution-oriented environment"
                },
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-md bg-card border border-card-border"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
