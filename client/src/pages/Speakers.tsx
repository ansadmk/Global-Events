import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import speakerImage from "@assets/generated_images/speaker_presenting_image.png";

export default function Speakers() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const speakers = [
    {
      name: "Dr. Sarah Al-Mansoori",
      title: "Chief Customer Experience Officer",
      company: "Leading BFSI Institution",
      expertise: ["CX Transformation", "Digital Strategy"],
      initials: "SM"
    },
    {
      name: "Mohammed Hassan",
      title: "Head of Digital Banking",
      company: "Major Regional Bank",
      expertise: ["Fintech", "Innovation"],
      initials: "MH"
    },
    {
      name: "Fatima Al-Rashid",
      title: "VP Technology & Innovation",
      company: "PropTech Leader",
      expertise: ["Real Estate Tech", "AI"],
      initials: "FR"
    },
    {
      name: "Omar Abdullah",
      title: "Director of Customer Loyalty",
      company: "Global Retail Brand",
      expertise: ["Loyalty Programs", "Analytics"],
      initials: "OA"
    },
    {
      name: "Layla Ibrahim",
      title: "Chief Marketing Officer",
      company: "Telecom Giant",
      expertise: ["Brand Strategy", "CX"],
      initials: "LI"
    },
    {
      name: "Ahmed Khalil",
      title: "Head of PropTech",
      company: "Major Developer",
      expertise: ["Smart Buildings", "IoT"],
      initials: "AK"
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="World-Class Speakers"
        subtitle="Industry Experts"
        description="Learn from the brightest minds and most influential leaders shaping the future of business"
        backgroundImage={speakerImage}
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Featured Speakers
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry pioneers sharing insights, strategies, and real-world case studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {speakers.map((speaker, index) => (
              <Card
                key={speaker.name}
                className="p-6 lg:p-8 hover-elevate active-elevate-2 cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-testid={`card-speaker-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      {speaker.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {speaker.title}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {speaker.company}
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {speaker.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <Card className="p-8 lg:p-12 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-4">Become a Speaker</h3>
              <p className="text-muted-foreground mb-6">
                Share your expertise and insights with hundreds of industry professionals. We're always looking
                for thought leaders to join our speaker lineup.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:info@verve-management.com" className="inline-block" data-testid="link-speaker-inquiry">
                  <Badge variant="outline" className="px-4 py-2 text-sm hover-elevate cursor-pointer">
                    speakers@premiersummits.com
                  </Badge>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
