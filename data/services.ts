import { images } from "@/lib/images";

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

export type ServiceGroup = {
  id: string;
  index: string;
  title: string;
  lead: string;
  description: string;
  image: string;
  highlights: string[];
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "custom-furniture",
    index: "01",
    title: "Custom Furniture",
    lead: "Pieces made for one home, and one family.",
    description:
      "We design and build furniture around the way you live — the proportions of your rooms, the light, the people who gather there. Every piece is drawn, approved and handmade to order in our workshop.",
    image: images.livingOak,
    highlights: [
      "Design consultation & shop drawings",
      "Choice of solid hardwoods and veneers",
      "Hand-applied oil, lacquer or wax finishes",
      "White-glove delivery and placement",
    ],
    items: [
      {
        title: "Beds",
        description:
          "Platform, panelled and upholstered beds with concealed joinery and silent, rock-solid frames.",
        image: images.bedPlatform,
      },
      {
        title: "Dining Tables",
        description:
          "Single-slab, trestle and extending tables sized precisely to your room and your guest list.",
        image: images.diningHeritage,
      },
      {
        title: "Sofas",
        description:
          "Kiln-dried hardwood frames, hand-tied springs and upholstery in leather, linen or bouclé.",
        image: images.sofaLeather,
      },
      {
        title: "Cabinets",
        description:
          "Sideboards, media consoles and display cabinets with dovetailed drawers and soft-close hardware.",
        image: images.kitchenBar,
      },
      {
        title: "Wardrobes",
        description:
          "Fitted and freestanding wardrobes with cedar-lined interiors and fully customised storage.",
        image: images.wardrobe,
      },
    ],
  },
  {
    id: "commercial-furniture",
    index: "02",
    title: "Commercial Furniture",
    lead: "Built for hospitality and workplaces that never close.",
    description:
      "Commercial interiors demand furniture that looks exceptional on day one and still performs after years of daily use. We engineer every piece for durability, maintenance and fire-safety requirements.",
    image: images.restaurantDark,
    highlights: [
      "Prototype approval before full production",
      "Commercial-grade finishes and hardware",
      "Phased delivery around your opening date",
      "On-site installation by our own team",
    ],
    items: [
      {
        title: "Offices",
        description:
          "Workstations, boardroom tables, reception desks and acoustic joinery for focused teams.",
        image: images.officeOpen,
      },
      {
        title: "Restaurants",
        description:
          "Banquettes, dining tables, bar counters and host stands built for heavy service.",
        image: images.restaurantDining,
      },
      {
        title: "Hotels",
        description:
          "Guest-room casegoods, headboards, lobby furniture and bespoke millwork for boutique hotels.",
        image: images.hotelRoom,
      },
    ],
  },
  {
    id: "brand-manufacturing",
    index: "03",
    title: "Brand Manufacturing",
    lead: "Your designs, our workshop, consistent quality at scale.",
    description:
      "We partner with furniture and lifestyle brands as a dependable manufacturing studio — from refining a prototype to producing hundreds of identical pieces, packed and ready for your customers.",
    image: images.mitreSaw,
    highlights: [
      "Confidential, white-label production",
      "Jig-based repeatability and batch QC",
      "Flexible MOQs from 20 to 500+ units",
      "Export-ready packaging and documentation",
    ],
    items: [
      {
        title: "Bulk Furniture Production",
        description:
          "Scheduled production runs with documented tolerances, finish samples and quality checks on every batch.",
        image: images.chairLounge,
      },
      {
        title: "Custom Designs",
        description:
          "We translate your sketches or CAD files into buildable, cost-optimised designs without diluting the idea.",
        image: images.sideTable,
      },
      {
        title: "Production Support",
        description:
          "Material sourcing, prototyping, finishing development and packaging design handled in one place.",
        image: images.toolsOnOak,
      },
    ],
  },
];

export const serviceOverview = serviceGroups.map((g) => ({
  id: g.id,
  index: g.index,
  title: g.title,
  description: g.lead,
  image: g.image,
  items: g.items.map((i) => i.title),
}));
