import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { ImageGallery } from "@/components/ImageGallery";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside the Ardenwood workshop — tools, production process, finished furniture and on-site installations.",
};

const intros: Record<(typeof galleryCategories)[number], string> = {
  Workshop: "Our 6,000 sq ft workshop, timber store and finishing room.",
  "Production Process": "Cutting, joinery, shaping and assembly at the bench.",
  "Finished Products": "Pieces photographed before they leave for their new homes.",
  Installation: "Furniture in place — in homes, restaurants, offices and hotels.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            Inside the <em className="text-gold-light">workshop.</em>
          </>
        }
        description="Sawdust, hand tools and quiet concentration — a look at how our furniture comes to life, from rough timber to final installation."
        image={images.toolWall}
        imageAlt="Hand-tool wall inside the Ardenwood workshop"
      />

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryCategories.map((c, i) => (
              <div key={c} className="border-t border-charcoal/15 pt-5">
                <p className="font-display text-sm text-gold italic">0{i + 1}</p>
                <h2 className="mt-2 font-display text-2xl font-light text-charcoal">{c}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">{intros[c]}</p>
              </div>
            ))}
          </Reveal>
          <ImageGallery images={galleryImages} />
        </Container>
      </section>

      <ContactCTA image={images.craftsmanCutting} />
    </>
  );
}
