import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import { SlideIn } from "@/components/SlideIn";
import { ParallaxImage } from "./ParallaxImage";
import { JSX } from "react";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({ slice, index }: TextAndImageProps): JSX.Element => {
  const theme = slice.primary.theme;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "py-26",
        "sticky top-[calc(var(--index)*2rem)]",
        theme === "Blue" && "bg-[color:var(--brand-verdigris)] text-white",
        theme === "Orange" && "bg-[color:var(--brand-pink)] ",
        theme === "Navy" && "bg-[color:var(--brand-gray)]",
        theme === "Lime" && "bg-[color:var(--brand-blue)] text-white"
      )}
      style={{ "--index": index }}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation === "imageOnLeft" && "md:order-2"
          )}
        >
          <SlideIn>
            <Heading size="lg" as="h2" className="text-3xl sm:text-4xl md:text-5xl">
              <PrismicText field={slice.primary.heading} />
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className="max-w-md text-lg leading-relaxed">
              <PrismicRichText field={slice.primary.body} />
            </div>
          </SlideIn>
          <SlideIn>
            <a
              href="/build"
              className="z-20 mt-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)] py-2 px-6 text-xs sm:text-xs md:text-base text-center rounded-full hover:text-white"
            >
              Crée ta board
            </a>
          </SlideIn>
        </div>

        <ParallaxImage
          foregroundImage={slice.primary.foreground_image}
          backgroundImage={slice.primary.background_image}
        />
      </div>
    </Bounded>
  );
};

export default TextAndImage;