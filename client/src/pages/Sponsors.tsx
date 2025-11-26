import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, TrendingUp, Users, Target } from "lucide-react";
import { useEffect } from "react";
import dubaiCityscape from "@assets/generated_images/dubai_cityscape_background.png";

export default function Sponsors() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const sponsorBenefits = [
    {
      icon: Target,
      title: "Targeted Exposure",
      description: "Reach decision-makers with genuine buying intent and budget authority"
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Connect with pre-qualified prospects in solution-oriented environment"
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description: "Position your brand through speaking slots and panel participation"
    },
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      description: "Maximize exposure through event marketing and promotional materials"
    },
  ];

  const sponsorTiers = [
    {
      tier: "Platinum",
      color: "from-primary to-primary/60",
      benefits: [
        "Prime exhibition space",
        "Keynote speaking slot",
        "Logo on all marketing materials",
        "Complimentary delegate passes (10)",
        "VIP dinner invitation",
        "Post-event attendee list"
      ]
    },
    {
      tier: "Gold",
      color: "from-secondary to-secondary/60",
      benefits: [
        "Premium exhibition space",
        "Panel participation",
        "Logo on event website",
        "Complimentary delegate passes (5)",
        "Networking reception access",
        "Digital marketing exposure"
      ]
    },
    {
      tier: "Silver",
      color: "from-accent to-accent/60",
      benefits: [
        "Standard exhibition space",
        "Logo recognition",
        "Complimentary delegate passes (3)",
        "Event materials inclusion",
        "Social media mentions"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Partner With Us"
        subtitle="Sponsorship Opportunities"
        description="Maximize your brand exposure and connect with key decision-makers across the MENA region"
        backgroundImage={dubaiCityscape}
        ctaText="Become a Sponsor"
        ctaLink="/contact"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Why Sponsor Our Events?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deliver measurable ROI through strategic partnerships that connect you with your target audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {sponsorBenefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="p-6 lg:p-8 hover-elevate active-elevate-2 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {sponsorTiers.map((tier, index) => (
              <Card
                key={tier.tier}
                className="p-6 lg:p-8 hover-elevate active-elevate-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-testid={`card-sponsor-${tier.tier.toLowerCase()}`}
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${tier.color} text-white font-bold text-lg mb-6`}>
                  {tier.tier}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="w-full" variant="outline" data-testid={`button-inquire-${tier.tier.toLowerCase()}`}>
                    Inquire Now
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
            <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
              Custom Sponsorship Packages
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We understand that every organization has unique objectives. Let's create a tailored
            sponsorship package that aligns with your goals and maximizes your investment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-12 h-14 font-semibold" data-testid="button-custom-package">
                Request Custom Package
              </Button>
            </Link>
            <a href="mailto:info@verve-management.com">
              <Button size="lg" variant="outline" className="text-lg px-12 h-14 font-semibold" data-testid="button-email-sponsor">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
