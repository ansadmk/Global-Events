import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EVENTS } from "@/config/events";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRegistrationMutation } from "@/hooks/useRegistrationMutation";
import { useForm } from "react-hook-form";
import networkingImage from "@assets/generated_images/networking_event_image.png";

export default function Register() {
  const { toast } = useToast();
  const mutation = useRegistrationMutation();

  const form = useForm({
    defaultValues: {
      eventSlug: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      industry: "",
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: (response: any) => {
        toast({
          title: "Registration Successful!",
          description: response.message || "Check your email for confirmation details.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Registration Failed",
          description: "Please check your information and try again.",
          variant: "destructive",
        });
      },
    });
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="eventSlug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Event *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-event">
                              <SelectValue placeholder="Choose an event" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {EVENTS.map((event) => (
                              <SelectItem key={event.id} value={event.slug} data-testid={`option-${event.slug}`}>
                                {event.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} data-testid="input-first-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} data-testid="input-last-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+971 50 123 4567" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Name" {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Job Title" {...field} data-testid="input-job-title" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-industry">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base"
                    disabled={mutation.isPending || form.formState.isSubmitting}
                    data-testid="button-submit"
                  >
                    {mutation.isPending || form.formState.isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Complete Registration"
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
