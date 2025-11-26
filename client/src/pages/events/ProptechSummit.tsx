import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Briefcase, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import dubaiCityscape from "@assets/generated_images/dubai_cityscape_background.png";

export default function ProptechSummit() {
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
    "Big Data collection and analysis of property data",
    "AI and cloud-based software to streamline administration tasks",
    "Virtual Reality tools to enhance the property viewing experience",
    "Automated Property Management",
    "Blockchain powered Real Estate transactions",
    "IoT 'smart' network devices and sensors for efficient property maintenance",
    "Online platforms and chatbots to facilitate the customer experience",
    "A new era of Crowdfunding as an alternate source of property funding",
    "Innovation in mobile applications for tenants and landlords",
    "Impact of Cryptocurrency on Real Estate sector",
  ];

  const attendees = [
    "CEOs/Managing Directors",
    "CTOs/CIOs/Heads of Technology Innovation",
    "Heads of Property Management",
    "Heads of Sales & Marketing",
    "Heads of Investments",
    "Heads of Facility Management",
  ];

  const industries = [
    "Property Developers",
    "Property Management Companies",
    "Real-Estate Consultants",
    "Community Management Companies",
    "Real-Estate Brokers",
    "Investors & VCs",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Middle East Proptech Innovation Summit"
        subtitle="2023"
        description="Embracing Proptech to drive Innovation in Real Estate"
        backgroundImage={dubaiCityscape}
        date="23rd & 24th May 2023"
        location="Dubai, UAE"
        ctaText="Register for This Event"
        ctaLink="/register"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12 mb-12" data-aos="fade-up">
            <div className="flex items-start gap-6 mb-8">
              <img
                src="/assets/logos/eventLogo3.png"
                alt="Proptech Summit"
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-md bg-background/50 p-3"
              />
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Event Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Despite global headwinds, the real estate market in Dubai continues to leap over other metropolises amid
                  global economic challenges. The influx of HNWIs and overseas buyers investing in Dubai's high-end developments
                  with residents eyeing for stability and benefits from the new freehold and visa-related reforms has proven the
                  resiliency of the Emirate.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Proptech, a combination of property and technology, cites to the management, handling, and monetization of
                  real estate assets using technologies such as AI, blockchain and automation. The rising digital transformation
                  throughout the property sector such as predictive analytics, asset digitization, IoT in workplace management,
                  data analytics on market performance, and predictive analytics in asset performance is revolutionizing the
                  industry and cannot be ignored.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Who Will You Meet?</h3>
              </div>
              <ul className="space-y-3">
                {attendees.map((attendee) => (
                  <li key={attendee} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{attendee}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold">Industries Covered</h3>
              </div>
              <div className="space-y-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="px-4 py-3 rounded-md bg-secondary/10 border border-secondary/20 font-medium"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8 lg:p-12 mb-12" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h3 className="text-2xl lg:text-3xl font-bold">Topic Highlights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="p-5 rounded-md bg-card border border-card-border hover-elevate"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" data-aos="fade-up">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Why Attend?</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              This Summit will focus on the emerging trends in digital transformation of the Real Estate Industry. Delegates
              will learn from real-life case studies, business insights and lessons learned from leaders to discover the best
              strategies, tools & methods for tapping into the potential of tech-driven management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe",
                "Network with Industry Peers in a solution-oriented environment",
                "Discuss Significant Partnerships and Collaborations with Industry leaders",
                "Deep Dive into Insights derived from real-time case studies",
                "Build Industry Ecosystem Collaboration to address latest challenges",
              ].map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{reason}</p>
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
