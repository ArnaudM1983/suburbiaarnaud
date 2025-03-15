import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import { ButtonLink } from "@/components/buttonLink";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[color:var(--brand-pink)] relative h-dvh overflow-hidden text-zinc-800 bg-texture">

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6">
        <Heading className="relative max-w-2xl place-self-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold md:text-xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button}
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-blue)]"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>

    </Bounded>
  );
};

export default Hero;
