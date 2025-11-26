import { HeroSection } from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useContactMutation } from "@/hooks/useContactMutation";
import { useForm } from "react-hook-form";

// import { contactFormSchema } from "@shared/schema";
// import type { ContactForm } from "@shared/schema";
import abstractPattern from "@assets/generated_images/abstract_innovation_pattern.png";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useContactMutation();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
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

  const onSubmit = (data:any) => {
    mutation.mutate(data, {
      onSuccess: (response: any) => {
        toast({
          title: "Message Sent!",
          description: response.message || "We'll get back to you within 24 hours.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@verve-management.com",
      link: "mailto:info@verve-management.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 4 243 4677",
      link: "tel:+97142434677"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, United Arab Emirates",
      link: null
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Get In Touch"
        subtitle="Contact Us"
        description="Have questions? We're here to help you make the most of your summit experience"
        backgroundImage={abstractPattern}
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
                <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in attending, speaking, or sponsoring our events,
                we'd love to hear from you. Fill out the form and our team will respond promptly.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="p-6 hover-elevate">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-muted-foreground mb-1">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                            data-testid={`link-${info.label.toLowerCase()}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (GST)<br />
                  Saturday - Sunday: Closed
                </p>
              </Card>
            </div>

            <Card className="p-8 lg:p-10" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormLabel>Phone Number</FormLabel>
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
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Name" {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your inquiry..."
                            rows={5}
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
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
