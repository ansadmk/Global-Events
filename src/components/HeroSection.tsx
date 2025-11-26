import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  date?: string;
  location?: string;
  showCTA?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText = "Register Now",
  ctaLink = "/register",
  date,
  location,
  showCTA = true,
}: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[85vh] lg:h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          top: "-10%",
          height: "120%",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {subtitle && (
              <motion.div
                className="inline-block mb-4 lg:mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium">
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-primary/90 via-white to-primary/90 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>

            {description && (
              <motion.p
                className="text-lg lg:text-xl text-foreground/80 mb-8 lg:mb-12 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {description}
              </motion.p>
            )}

            {(date || location) && (
              <motion.div
                className="flex flex-wrap items-center gap-4 lg:gap-6 mb-8 lg:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {date && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/10 backdrop-blur-sm border border-primary/20">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{date}</span>
                  </div>
                )}
                {location && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/10 backdrop-blur-sm border border-secondary/20">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">{location}</span>
                  </div>
                )}
              </motion.div>
            )}

            {showCTA && (
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href={ctaLink}>
                  <Button
                    size="lg"
                    className="text-base lg:text-lg px-8 lg:px-12 h-12 lg:h-14 font-semibold"
                    data-testid="button-hero-cta"
                  >
                    {ctaText}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base lg:text-lg px-8 lg:px-12 h-12 lg:h-14 font-semibold bg-background/10 backdrop-blur-sm hover:bg-background/20"
                    data-testid="button-hero-contact"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
