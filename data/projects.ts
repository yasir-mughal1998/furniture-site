import { images } from "@/lib/images";
import type { Shape } from "@/lib/shapes";

export const projectCategories = [
  "Residential Furniture",
  "Commercial Projects",
  "Brand Manufacturing",
  "Custom Designs",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  material: string;
  description: string;
  image: string;
  shape: Shape;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hillside-dining-room",
    title: "The Hillside Dining Room",
    category: "Residential Furniture",
    location: "Private Residence, DHA",
    year: 2025,
    material: "Solid black walnut, hand-rubbed oil",
    description:
      "A ten-seat dining table cut from a single walnut flitch, paired with matching bench seating and a floating sideboard for an open garden-facing home.",
    image: images.diningGarden,
    shape: "landscape",
    featured: true,
  },
  {
    slug: "oakline-master-suite",
    title: "Oakline Master Suite",
    category: "Residential Furniture",
    location: "Villa, Gulberg",
    year: 2025,
    material: "White oak, linen upholstery",
    description:
      "A low platform bed with concealed joinery and integrated bedside ledges, built to sit quietly within a calm, light-filled bedroom.",
    image: images.bedPlatform,
    shape: "portrait",
    featured: true,
  },
  {
    slug: "ember-restaurant",
    title: "Ember Grill House",
    category: "Commercial Projects",
    location: "Restaurant, MM Alam Road",
    year: 2024,
    material: "Smoked ash, blackened steel",
    description:
      "Full restaurant fit-out: 140 covers of banquettes, dining tables and a twelve-metre bar counter engineered for daily commercial wear.",
    image: images.restaurantDark,
    shape: "tall",
    featured: true,
  },
  {
    slug: "nordhem-lounge-chair",
    title: "Nordhem Lounge Chair Series",
    category: "Brand Manufacturing",
    location: "For a Scandinavian retail brand",
    year: 2024,
    material: "Beech frame, wool bouclé",
    description:
      "Production of 420 lounge chairs to the client's specification, with jig-based repeatability, batch QC and export-grade packaging.",
    image: images.chairLounge,
    shape: "square",
    featured: true,
  },
  {
    slug: "heritage-dining-table",
    title: "Heritage Trestle Table",
    category: "Custom Designs",
    location: "Family Home, Islamabad",
    year: 2023,
    material: "Reclaimed teak, bronze inlay",
    description:
      "Designed with the client around a grandfather's teak beams, reworked into a trestle table with hand-cut bronze butterfly keys.",
    image: images.diningHeritage,
    shape: "landscape",
    featured: true,
  },
  {
    slug: "northgate-offices",
    title: "Northgate Workplace",
    category: "Commercial Projects",
    location: "Corporate Office, Blue Area",
    year: 2024,
    material: "Oak veneer, powder-coated steel",
    description:
      "Sixty workstations, meeting tables and reception joinery delivered in phases so the client's team never lost a working day.",
    image: images.officeOpen,
    shape: "landscape",
    featured: true,
  },
  {
    slug: "cedar-wardrobe",
    title: "Cedar Wardrobe Wall",
    category: "Residential Furniture",
    location: "Apartment, Clifton",
    year: 2023,
    material: "Aromatic cedar, teak veneer",
    description:
      "Floor-to-ceiling wardrobes with cedar-lined interiors, soft-close hardware and handleless doors cut from a single sequence-matched veneer.",
    image: images.wardrobe,
    shape: "tall",
  },
  {
    slug: "maison-hotel-suites",
    title: "Maison Hotel Suites",
    category: "Commercial Projects",
    location: "Boutique Hotel, Murree",
    year: 2023,
    material: "American walnut, brass trim",
    description:
      "Headboards, desks, luggage benches and minibar cabinets for 38 suites, prototyped in one room before full-scale production.",
    image: images.hotelSuite,
    shape: "portrait",
  },
  {
    slug: "studio-side-table",
    title: "Studio Side Table Line",
    category: "Brand Manufacturing",
    location: "For a lifestyle homeware label",
    year: 2025,
    material: "Solid oak, natural matte lacquer",
    description:
      "A white-label side table produced in three finishes. We refined the joinery for flat-pack shipping without losing solid-wood character.",
    image: images.sideTable,
    shape: "portrait",
  },
  {
    slug: "saddle-leather-chair",
    title: "Saddle Leather Chair",
    category: "Custom Designs",
    location: "Private Library, Lahore",
    year: 2024,
    material: "Steam-bent ash, vegetable-tanned leather",
    description:
      "A sculpted reading chair developed from sketch to prototype over six weeks, with a steam-bent shell and hand-stitched leather seat.",
    image: images.chairSaddle,
    shape: "square",
  },
  {
    slug: "harbour-terrace",
    title: "Harbour Terrace Dining",
    category: "Commercial Projects",
    location: "Seaside Restaurant, Karachi",
    year: 2022,
    material: "Marine-grade teak",
    description:
      "Outdoor dining sets engineered for salt air and sun, finished with marine oil and stainless fixings for a waterfront terrace.",
    image: images.restaurantTerrace,
    shape: "landscape",
  },
  {
    slug: "atelier-kitchen-bar",
    title: "Atelier Kitchen & Bar",
    category: "Brand Manufacturing",
    location: "Showroom for a kitchen brand",
    year: 2024,
    material: "Fluted oak, smoked glass",
    description:
      "Showroom cabinetry and a fluted-oak bar island manufactured for a kitchen brand's flagship display, later rolled out to four stores.",
    image: images.kitchenBar,
    shape: "tall",
  },
  {
    slug: "writers-desk",
    title: "The Writer's Desk",
    category: "Custom Designs",
    location: "Home Studio, Lahore",
    year: 2025,
    material: "Quarter-sawn oak",
    description:
      "A slim, tapering desk for an author's studio with a hidden cable channel and a single drawer dovetailed by hand.",
    image: images.writingDesk,
    shape: "landscape",
  },
  {
    slug: "walnut-living",
    title: "Walnut Living Collection",
    category: "Residential Furniture",
    location: "Penthouse, Bahria Town",
    year: 2022,
    material: "Walnut, cane, travertine",
    description:
      "Coffee table, media console and lounge chairs designed as one family of pieces for a sunlit open-plan living room.",
    image: images.livingWalnut,
    shape: "landscape",
  },
  {
    slug: "floating-wall-desk",
    title: "Floating Wall Desk",
    category: "Custom Designs",
    location: "Apartment, F-7",
    year: 2023,
    material: "Solid oak, concealed steel brackets",
    description:
      "A wall-hung desk and shelf system for a compact apartment, engineered to carry weight with no visible fixings.",
    image: images.wallDesk,
    shape: "portrait",
  },
  {
    slug: "heritage-leather-sofa",
    title: "Heritage Leather Sofa",
    category: "Custom Designs",
    location: "Private Residence, Karachi",
    year: 2024,
    material: "Kiln-dried hardwood frame, aniline leather",
    description:
      "A mid-century inspired three-seater built on a hardwood frame with eight-way hand-tied springs and tapered solid-wood legs.",
    image: images.sofaLeather,
    shape: "landscape",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
