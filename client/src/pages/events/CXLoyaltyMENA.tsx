import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, MapPin, Users, Briefcase, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import conferenceHero from "@assets/generated_images/conference_hero_background.png";

export default function CXLoyaltyMENA() {
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
    "Corporate Culture Focus: Top tips to successfully spearhead Customer Experience Transformation internally",
    "Brand communities driving Loyalty, Retention & Advocacy",
    "Delivering the 'Unattainable' CX dream and transformation towards Hyper Personalization",
    "Unveiling how exceptional brands retain their customers and build loyalty",
    "Simultaneously improve Customer Experience and Operational Excellence",
    "Using Data, CRM, and Marketing Automation to drive friction-free experiences",
    "Multichannel Focus: Strategies to deliver world-class customer experience across multiple channels",
    "Driving Customer Loyalty and Top-line revenue through Gamification",
    "Linking Voice of the Employee and Voice of the Customer",
    "Using social media to improve brand perception and shape the Customer Experience",
    "Exploring advances in Customer Analytics and Segmentation",
    "Effective complaint handling as the foundation of a Customer Retention Strategy",
  ];

  const attendees = [
    "CXOs, VPs, Directors",
    "Chief Marketing Officers",
    "Heads of Customer Experience & UX",
    "Heads of Customer Insights & Analytics",
    "Heads of Digital Transformation",
    "Heads of Customer Loyalty & Brand Loyalty",
    "Heads of Customer Value & Loyalty Partnerships",
    "Heads of Rewards and Loyalty",
  ];

  const industries = [
    "BFSI",
    "Retail & E-Commerce",
    "Telecommunication",
    "Hospitality",
    "Travel & Tourism",
    "Aviation",
    "FMCG & CPG",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="CX & Loyalty Summit MENA"
        subtitle="2nd Annual"
        description="Driving revenue building relations through cx transformation & increased brand Loyalty"
        backgroundImage={conferenceHero}
        date="1st - 2nd November 2023"
        location="Dubai, UAE"
        ctaText="Register for This Event"
        ctaLink="/register"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12 mb-12" data-aos="fade-up">
            <div className="flex items-start gap-6 mb-8">
              <img
                src="/assets/logos/eventLogo1.png"
                alt="CX & Loyalty Summit"
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-md bg-background/50 p-3"
              />
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Event Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A strong customer experience, employee experience and customer loyalty program management are the hallmark
                  of many of the world's most successful brands – setting the bar for organizations across all industries to
                  prioritize their CX, EX & CL strategies and deliver superior experiences across all channels.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The 2nd Annual CX & Loyalty Summit MENA 2023 shifts focus on innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value
A stellar line-up featuring leading brands and organizations who have established CX, EX &amp; Customer Loyalty at the top of their boardroom agenda will share insights into how digital experiences are transforming the way we work, deliver, transact, communicate, and live in an ever-changing world. With interactive keynote sessions, expert-led panels, and live case studies, we aim to pack value into every minute of the attendee experience, covering the topics that mean the most to the CX industry.
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
                <h3 className="text-2xl font-bold">Target Industries</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="px-4 py-3 rounded-md bg-secondary/10 border border-secondary/20 text-center font-medium"
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
                  className="p-4 rounded-md bg-card border border-card-border hover-elevate"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-accent">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" data-aos="fade-up">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Why Attend?</h3>
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
