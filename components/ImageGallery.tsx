"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryCategories, type GalleryCategory, type GalleryImage } from "@/data/gallery";
import { img } from "@/lib/images";
import { shapeClass } from "@/lib/shapes";
import { FilterTabs } from "./FilterTabs";
import { Reveal } from "./ui/Reveal";
import { ChevronIcon, CloseIcon } from "./ui/Icons";

type ImageGalleryProps = {
  images: GalleryImage[];
  filterable?: boolean;
};

export function ImageGallery({ images, filterable = true }: ImageGalleryProps) {
  const [category, setCategory] = useState<GalleryCategory | "All">("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = category === "All" ? images : images.filter((i) => i.category === category);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((current) =>
        current === null ? null : (current + dir + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? visible[active] : null;

  return (
    <div>
      {filterable && (
        <div className="border-b border-charcoal/10">
          <FilterTabs
            label="Filter gallery"
            options={galleryCategories}
            value={category}
            onChange={setCategory}
          />
        </div>
      )}

      <div key={category} className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3 lg:gap-6">
        {visible.map((image, i) => (
          <Reveal key={image.src + image.caption} delay={(i % 3) * 80} className="mb-3 break-inside-avoid sm:mb-5 lg:mb-6">
            <button
              type="button"
              onClick={() => setActive(i)}
              className={`group relative block w-full overflow-hidden bg-linen ${shapeClass[image.shape]}`}
              aria-label={`Open image: ${image.caption}`}
            >
              <Image
                src={img(image.src)}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col items-start p-4 text-left opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold-light">{image.category}</span>
                <span className="mt-1 font-display text-lg text-ivory sm:text-xl">{image.caption}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[60] flex animate-[fade-up_0.5s_var(--ease-luxe)_both] items-center justify-center bg-espresso/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 z-10 flex size-12 items-center justify-center text-ivory/80 transition-colors hover:text-ivory"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 z-10 flex size-12 items-center justify-center text-ivory/70 transition-colors hover:text-ivory sm:left-6"
          >
            <ChevronIcon direction="left" className="size-8" />
          </button>

          <figure className="relative flex h-full w-full max-w-6xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-1">
              <Image
                key={current.src}
                src={img(current.src)}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="flex items-baseline justify-between gap-4 pt-5 text-ivory">
              <span className="font-display text-xl sm:text-2xl">{current.caption}</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-ivory/60">
                {(active ?? 0) + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-2 z-10 flex size-12 items-center justify-center text-ivory/70 transition-colors hover:text-ivory sm:right-6"
          >
            <ChevronIcon className="size-8" />
          </button>
        </div>
      )}
    </div>
  );
}
