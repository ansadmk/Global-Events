import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EVENTS } from "@/config/events";
import { Clock, MapPin as MapPinIcon } from "lucide-react";
import { useEffect } from "react";
import abstractPattern from "@assets/generated_images/abstract_innovation_pattern.png";

export default function Agenda() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const sampleAgenda = [
    {
      time: "08:30 - 09:00",
      title: "Registration & Networking Coffee",
      type: "Networking",
      track: "General"
    },
    {
      time: "09:00 - 09:15",
      title: "Opening Remarks & Welcome Address",
      speaker: "Event Chair",
      type: "Keynote",
      track: "General"
    },
    {
      time: "09:15 - 10:00",
      title: "Strategic Vision: The Future of Digital Transformation",
      speaker: "Industry Leader",
      type: "Keynote",
      track: "Strategy"
    },
    {
      time: "10:00 - 10:45",
      title: "Panel Discussion: Innovation in the Digital Age",
      speaker: "Multiple Speakers",
      type: "Panel",
      track: "Innovation"
    },
    {
      time: "10:45 - 11:15",
      title: "Networking Break",
      type: "Networking",
      track: "General"
    },
    {
      time: "11:15 - 12:00",
      title: "Case Study: Customer-Centric Transformation Success",
      speaker: "CX Leader",
      type: "Case Study",
      track: "CX"
    },
    {
      time: "12:00 - 13:00",
      title: "Lunch & Exhibition",
      type: "Networking",
      track: "General"
    },
    {
      time: "13:00 - 13:45",
      title: "Technology Deep Dive: AI and Automation",
      speaker: "Tech Expert",
      type: "Workshop",
      track: "Technology"
    },
    {
      time: "13:45 - 14:30",
      title: "Interactive Workshop: Best Practices Implementation",
      speaker: "Consultant",
      type: "Workshop",
      track: "Strategy"
    },
    {
      time: "14:30 - 15:00",
      title: "Afternoon Networking Break",
      type: "Networking",
      track: "General"
    },
    {
      time: "15:00 - 16:00",
      title: "Closing Panel: Key Takeaways & Future Outlook",
      speaker: "Multiple Speakers",
      type: "Panel",
      track: "General"
    },
    {
      time: "16:00 - 17:00",
      title: "Cocktail Reception & Networking",
      type: "Networking",
      track: "General"
    },
  ];

  const getSessionColor = (type: string) => {
    switch (type) {
      case "Keynote": return "border-l-4 border-l-primary";
      case "Panel": return "border-l-4 border-l-secondary";
      case "Workshop": return "border-l-4 border-l-accent";
      case "Case Study": return "border-l-4 border-l-chart-1";
      default: return "border-l-4 border-l-muted";
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Event Agendas"
        subtitle="Schedule"
        description="Comprehensive programs designed to maximize your learning and networking experience"
        backgroundImage={abstractPattern}
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                Summit Schedules
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Power-packed agendas featuring keynotes, panels, case studies, and networking sessions
            </p>
          </div>

          <Tabs defaultValue={EVENTS[0].slug} className="w-full">
            <TabsList className="w-full justify-start flex-wrap h-auto gap-2 mb-8 bg-card/50 p-2" data-testid="tabs-event-selector">
              {EVENTS.map((event) => (
                <TabsTrigger
                  key={event.id}
                  value={event.slug}
                  className="flex items-center gap-2"
                  data-testid={`tab-${event.slug}`}
                >
                  <img src={event.logo} alt={event.name} className="w-6 h-6 object-contain" />
                  <span className="hidden sm:inline">{event.name}</span>
                  <span className="sm:hidden">Event {event.id}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {EVENTS.map((event) => (
              <TabsContent key={event.id} value={event.slug} className="mt-0">
                <Card className="p-6 lg:p-8 mb-8" data-aos="fade-up">
                  <div className="flex items-start gap-4 mb-6">
                    <img src={event.logo} alt={event.name} className="w-16 h-16 object-contain rounded-md bg-background/50 p-2" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {event.hasContent ? (
                    <div className="space-y-3">
                      {sampleAgenda.map((session, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-md bg-card hover-elevate ${getSessionColor(session.type)}`}
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <div className="flex items-center gap-2 min-w-[140px]">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium text-sm">{session.time}</span>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold mb-1">{session.title}</div>
                              {session.speaker && (
                                <div className="text-sm text-muted-foreground">
                                  {session.speaker}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <span className="px-3 py-1 rounded-md bg-background text-xs font-medium">
                                {session.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <p>Agenda details will be available soon</p>
                    </div>
                  )}
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
