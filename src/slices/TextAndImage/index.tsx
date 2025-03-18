import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/bounded";
import clsx from "clsx";
import { Heading } from "@/components/heading";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage: FC<TextAndImageProps> = ({ slice }) => {

  const theme = slice.primary.theme;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        theme === "Blue" && "bg-texture bg-[color:var(--brand-verdigris)] text-white",
        theme === "Orange" && "bg-texture bg-[color:var(--brand-orange)] text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime"
      )}
    >

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div>
          <Heading size="lg" as="h2" className="pt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <PrismicText field={slice.primary.heading} />
          </Heading>
          <div className="max-w-md text-lg leading-relaxed">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button} className="z-20 mt-2 px-6 py-3 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)] text-white hover:text-black"
            color={theme === "Lime" ? "orange" : "lime"}>
            {slice.primary.button.text}
          </ButtonLink>
        </div>
        <PrismicNextImage field={slice.primary.foreground_image} />
        <PrismicNextImage field={slice.primary.background_image} />
      </div>
    </Bounded>
  );
};

export default TextAndImage;
