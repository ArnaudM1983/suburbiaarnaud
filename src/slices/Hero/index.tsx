import { FC } from "react";
import { asImageSrc, Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import { ButtonLink } from "@/components/ButtonLink";
import { InteractiveSkateboard } from "./InteractiveSkateboard";

const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp"
const DEFAULT_WHEEL_TEXTURE = "/skateboard/SkateWheel1.png"
const DEFAULT_TRUCK_COLOR = "#6F6E6A"
const DEFAULT_BOLT_COLOR = "#6F6E6A"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const deckTextureURL = asImageSrc(slice.primary.skateboard_deck_texture) || DEFAULT_DECK_TEXTURE;
  const wheelTextureURL = asImageSrc(slice.primary.skateboard_wheel_texture) || DEFAULT_WHEEL_TEXTURE;
  const truckColor = slice.primary.skateboard_truck_color || DEFAULT_TRUCK_COLOR;
  const boltColor = slice.primary.skateboard_bolt_color || DEFAULT_BOLT_COLOR;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[color:var(--brand-pink)] relative h-dvh overflow-hidden text-zinc-800 bg-header">

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6">
        <Heading className="[color:white] relative max-w-2xl place-self-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="mb-12 flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="[color:white] max-w-[45ch] font-semibold md:text-xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button}
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)]"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>
      <InteractiveSkateboard
        deckTextureURL={deckTextureURL}
        wheelTextureURL={wheelTextureURL}
        truckColor={truckColor}
        boltColor={boltColor}
      />
    </Bounded>
  );
};

export default Hero;
