import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Briefcase, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import bankingTech from "@assets/generated_images/banking_tech_background.png";

export default function FutureBanksKSA() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const topics = [
    "VISION 2030 - EMERGENCE OF THE KINGDOM AS A GLOBAL FINANCIAL LEADER",
    "DIGITAL TRANSFORMATION - THE FOUNDATIONAL PLATFORM FOR ACHIEVING BUSINESS AGILITY",
    "PAYMENTS TODAY & TOMORROW - THE FUTURE OF DIGITAL PAYMENTS",
    "PROVIDING A NEXT-GEN SEAMLESS BANKING CUSTOMER EXPERIENCE",
    "DATA & ANALYTICS PROVIDING A 360° OVERVIEW TO BANKS & CUSTOMERS",
    "INCLUSIVE BANKING THROUGH OPEN BANKING",
    "THE CLOUD IMPERATIVE - A KEY ENABLER FOR BANKS TO ACHIEVE BUSINESS AGILITY",
    "THE FUTURE OF NBFIs - REVOLUTIONIZING THE MONEY MARKET IN KSA",
    "'DIGITAL ONLY' BANKS - THE RISE OF 'INVISIBLE BANKS' FOR GEN-Z CUSTOMERS",
    "EXPERIENTIAL BANKING IN METAVERSE - THE THIRD WORLD BANKING",
  ];

  const attendees = [
    "CIOs, CTOs, Heads of Technology",
    "Chief Digital Officers, Heads of Digital Transformation",
    "Chief Marketing Officers, Heads of Marketing",
    "Heads of Retail Banking",
    "Heads of Corporate Banking",
    "Heads of Customer Experience",
    "Heads of Cards & Payments",
    "Head of Data & Analytics",
    "Heads of Governance & Compliance",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Future Banks Summit KSA"
        subtitle="4th Annual"
        description="Digital Innovations Transforming the Kingdom's Banking Landscape"
        backgroundImage={bankingTech}
        date="September 11th - 12th 2023"
        location="Riyadh Marriott Hotel"
        ctaText="Register for This Event"
        ctaLink="/register"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12 mb-12" data-aos="fade-up">
            <div className="flex items-start gap-6 mb-8">
              <img
                src="/assets/logos/eventLogo2.png"
                alt="Future Banks Summit"
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-md bg-background/50 p-3"
              />
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Event Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The banking industry worldwide is undergoing phenomenal change, giving the banks an opportunity to relook
                  into their existing business models and take a huge leap towards the future. The shift in consumers' digital
                  experience, adoption of next-gen technologies, transformation of customer service to customer engagement,
                  mobile workforce with a need to 'right-size' the branch network are all opportunities for regional banks to
                  seize and accelerate the shift to digital.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The 4th Annual Future Banks Summit KSA 2023 will showcase the latest innovations and practical case studies,
                  along with interactive panel discussions designed to guide the banking sector in KSA in identifying the right
                  strategies to overcome long-standing resistance and be future-ready!
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-12" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Who Will You Meet?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {attendees.map((attendee) => (
                <div
                  key={attendee}
                  className="p-4 rounded-md bg-primary/5 border border-primary/10 hover-elevate"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{attendee}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 lg:p-12 mb-12" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h3 className="text-2xl lg:text-3xl font-bold">Topic Highlights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="p-5 rounded-md bg-accent/5 border border-accent/10 hover-elevate"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent">{index + 1}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground leading-relaxed">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" data-aos="fade-up">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Why Attend?</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              The 4th Annual Future Banks Summit KSA 2023 will highlight the enabling role of digitalization in reshaping
              the future of banking. The pandemic has forced digital acceleration at such a massive scale that banks are not
              just looking to transform but are forced to reimagine their business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                "Gain knowledge and insights from top industry leaders and experts from across the globe",
                "Network with industry peers in a solution-oriented environment",
                "Discuss significant partnerships and collaborations with industry leaders",
              ].map((reason, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{reason}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Link href="/register">
                <Button size="lg" className="text-lg px-12 h-14 font-semibold" data-testid="button-register-event">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 h-14 font-semibold" data-testid="button-sponsor-inquiry">
                  Sponsorship Inquiries
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
