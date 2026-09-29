import { images } from "@/lib/images";
import type { Shape } from "@/lib/shapes";

export const galleryCategories = [
  "Workshop",
  "Production Process",
  "Finished Products",
  "Installation",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  shape: Shape;
};

export const galleryImages: GalleryImage[] = [
  {
    src: images.toolWall,
    alt: "Wall of hand planes, chisels and saws in the workshop",
    caption: "The hand-tool wall",
    category: "Workshop",
    shape: "landscape",
  },
  {
    src: images.mitreSaw,
    alt: "Craftsman cutting timber on a mitre saw",
    caption: "Precision cutting",
    category: "Production Process",
    shape: "portrait",
  },
  {
    src: images.bedPlatform,
    alt: "Oak platform bed in a bright bedroom",
    caption: "Oakline platform bed",
    category: "Finished Products",
    shape: "landscape",
  },
  {
    src: images.restaurantDark,
    alt: "Restaurant interior with custom wooden seating",
    caption: "Ember Grill House, installed",
    category: "Installation",
    shape: "tall",
  },
  {
    src: images.toolsOnOak,
    alt: "Hand tools laid out on an oak workbench",
    caption: "Bench essentials",
    category: "Workshop",
    shape: "square",
  },
  {
    src: images.chairSaddle,
    alt: "Leather and wood lounge chair",
    caption: "Saddle leather chair",
    category: "Finished Products",
    shape: "portrait",
  },
  {
    src: images.craftsmanCutting,
    alt: "Carpenter measuring and cutting boards",
    caption: "Measure twice, cut once",
    category: "Production Process",
    shape: "portrait",
  },
  {
    src: images.hotelSuite,
    alt: "Hotel suite furnished with walnut casegoods",
    caption: "Maison Hotel suite",
    category: "Installation",
    shape: "landscape",
  },
  {
    src: images.toolsHanging,
    alt: "Pliers and clamps hanging in the workshop",
    caption: "Clamps & fixtures",
    category: "Workshop",
    shape: "landscape",
  },
  {
    src: images.hammerOak,
    alt: "Hammer resting on a reclaimed wooden surface",
    caption: "Reclaimed teak, before finishing",
    category: "Production Process",
    shape: "landscape",
  },
  {
    src: images.sideTable,
    alt: "Solid oak side table with books",
    caption: "Studio side table",
    category: "Finished Products",
    shape: "tall",
  },
  {
    src: images.officeOpen,
    alt: "Open-plan office with custom workstations",
    caption: "Northgate Workplace",
    category: "Installation",
    shape: "landscape",
  },
  {
    src: images.drillSawdust,
    alt: "Cordless drill resting in fresh sawdust",
    caption: "Assembly day",
    category: "Production Process",
    shape: "square",
  },
  {
    src: images.wardrobe,
    alt: "Teak veneer wardrobe doors",
    caption: "Cedar-lined wardrobe",
    category: "Finished Products",
    shape: "portrait",
  },
  {
    src: images.toolsBench,
    alt: "Hand tools on a dark workbench",
    caption: "Joinery station",
    category: "Workshop",
    shape: "landscape",
  },
  {
    src: images.diningGarden,
    alt: "Walnut dining table installed in a garden-facing home",
    caption: "Hillside dining room",
    category: "Installation",
    shape: "landscape",
  },
  {
    src: images.writingDesk,
    alt: "Minimal oak writing desk in a white room",
    caption: "The writer's desk",
    category: "Finished Products",
    shape: "landscape",
  },
  {
    src: images.kitchenBar,
    alt: "Fluted oak bar with dark glass cabinetry",
    caption: "Atelier kitchen bar",
    category: "Installation",
    shape: "tall",
  },
];
