export interface Event {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  date: string;
  location: string;
  website?: string;
  logo: string;
  hasContent: boolean;
}

export const EVENTS: Event[] = [
  {
    id: 1,
    slug: "cx-loyalty-mena",
    name: "CX & Loyalty Summit MENA",
    tagline: "Driving revenue building relations through cx transformation & increased brand Loyalty",
    date: "1st - 2nd November 2023",
    location: "Dubai, UAE",
    website: "www.cxloyaltymena.com/",
    logo: "/assets/logos/eventLogo1.png",
    hasContent: true,
  },
  {
    id: 2,
    slug: "future-banks-ksa",
    name: "Future Banks Summit KSA",
    tagline: "Digital Innovations Transforming the Kingdom's Banking Landscape",
    date: "September 11th - 12th 2023",
    location: "Riyadh Marriott Hotel",
    website: "www.ksa.futurebanksummit.com",
    logo: "/assets/logos/eventLogo2.png",
    hasContent: true,
  },
  {
    id: 3,
    slug: "proptech-summit",
    name: "Middle East Proptech Innovation Summit",
    tagline: "Embracing Proptech to drive Innovation in Real Estate",
    date: "23rd & 24th May 2023",
    location: "Dubai, UAE",
    website: "www.dubaiproptech.com",
    logo: "/assets/logos/eventLogo3.png",
    hasContent: true,
  },
  {
    id: 4,
    slug: "event-four",
    name: "Future Innovation Summit",
    tagline: "Coming Soon - Transforming Business Excellence",
    date: "To Be Announced",
    location: "MENA Region",
    logo: "/assets/logos/eventLogo4.png",
    hasContent: false,
  },
];
