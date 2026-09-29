export type Shape = "portrait" | "landscape" | "square" | "tall" | "wide";

export const shapeClass: Record<Shape, string> = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  tall: "aspect-[2/3]",
};
