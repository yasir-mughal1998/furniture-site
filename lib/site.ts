export const site = {
  name: "Ardenwood",
  tagline: "Furniture Atelier",
  description:
    "Ardenwood is an independent furniture atelier crafting bespoke solid-wood furniture for homes, offices, restaurants, hotels and brands. Handmade by a team of master craftsmen.",
  url: "https://ardenwood.studio",
  founded: 2009,
  phone: "+92 300 123 4567",
  phoneHref: "tel:+923001234567",
  whatsapp: "923001234567",
  whatsappMessage:
    "Hello Ardenwood, I'd like to discuss a custom furniture project.",
  email: "studio@ardenwood.studio",
  address: {
    line1: "Workshop 14, Timber Market Road",
    line2: "Industrial Estate, Lahore 54000",
    mapUrl: "https://maps.google.com/?q=Industrial+Estate+Lahore",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 – 18:30" },
    { days: "Saturday", time: "10:00 – 16:00" },
    { days: "Sunday", time: "By appointment" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

export const navigation = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
