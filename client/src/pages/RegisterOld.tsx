import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EVENTS } from "@/config/events";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import networkingImage from "@assets/generated_images/networking_event_image.png";

export default function Register() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!selectedEvent) {
      toast({
        title: "Event Required",
        description: "Please select an event to register for.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      eventSlug: selectedEvent,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      jobTitle: formData.get("jobTitle") as string,
      industry: (formData.get("industry") as string) || "other",
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description: result.message || "Check your email for confirmation details.",
        });
        (e.target as HTMLFormElement).reset();
        setSelectedEvent("");
      } else {
        toast({
          title: "Registration Failed",
          description: result.message || "Please check your information and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Access to all keynote sessions and panels",
    "Comprehensive event materials and resources",
    "Networking opportunities with industry leaders",
    "Lunch and refreshments throughout the day",
    "Certificate of attendance",
    "Post-event networking reception",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Register Now"
        subtitle="Join Us"
        description="Secure your spot at one of our premier business summits"
        backgroundImage={networkingImage}
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
                <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                  Why Attend?
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our summits bring together the brightest minds in business, technology, and innovation.
                Join us for an unparalleled learning and networking experience.
              </p>

              <Card className="p-6 lg:p-8 mb-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                <h3 className="font-bold text-lg mb-4">Your Registration Includes:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 lg:p-8">
                <h3 className="font-bold text-lg mb-4">Special Offers</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
                    <div className="font-semibold mb-1">Early Bird Discount</div>
                    <div className="text-muted-foreground">Register now and save 20% on ticket price</div>
                  </div>
                  <div className="p-4 rounded-md bg-secondary/10 border border-secondary/20">
                    <div className="font-semibold mb-1">Group Registration</div>
                    <div className="text-muted-foreground">Bring 3+ colleagues and get 30% off</div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 lg:p-10" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6">Registration Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="event">Select Event *</Label>
                  <Select value={selectedEvent} onValueChange={setSelectedEvent} required>
                    <SelectTrigger className="mt-2" data-testid="select-event">
                      <SelectValue placeholder="Choose an event" />
                    </SelectTrigger>
                    <SelectContent>
                      {EVENTS.map((event) => (
                        <SelectItem key={event.id} value={event.slug} data-testid={`option-${event.slug}`}>
                          {event.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                      className="mt-2"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                      className="mt-2"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="mt-2"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    className="mt-2"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="Your Company Name"
                    className="mt-2"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    required
                    placeholder="Your Job Title"
                    className="mt-2"
                    data-testid="input-job-title"
                  />
                </div>

                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select name="industry" required>
                    <SelectTrigger className="mt-2" data-testid="select-industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bfsi">Banking & Financial Services</SelectItem>
                      <SelectItem value="retail">Retail & E-Commerce</SelectItem>
                      <SelectItem value="telecom">Telecommunications</SelectItem>
                      <SelectItem value="hospitality">Hospitality & Tourism</SelectItem>
                      <SelectItem value="realestate">Real Estate & Property</SelectItem>
                      <SelectItem value="technology">Technology & IT</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Processing..." : "Complete Registration"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
