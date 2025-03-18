import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/bounded";
import { PrismicNextLink } from "@prismicio/next";
import { Heading } from "@/components/heading";
import { SkateboardProduct } from "./SkateboardProduct";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid: FC<ProductGridProps> = ({ slice }) => {
  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[color:var(--brand-gray)] pb-20"
    >
      <Heading className="text-center mb-5 mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl " as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>

      <div className="text-center mb-8">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {slice.primary.product.map(({ skateboard }) => (
          isFilled.contentRelationship(skateboard) && (
            <SkateboardProduct key={skateboard.id} id={skateboard.id} />
          )
        ))}
      </div>

    </Bounded>
  );
};

export default ProductGrid;
