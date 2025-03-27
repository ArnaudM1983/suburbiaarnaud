
import { Heading } from "@/components/heading";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import { Skater } from "./Skater";
import { SlideIn } from "@/components/SlideIn";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid = async ({ slice }: TeamGridProps): Promise<JSX.Element> => {
  const client = createClient();
  const skaters = await client.getAllByType("skater");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[color:var(--brand-gray)] pb-20"
    >
      <div className="px-6 py-6 mx-auto w-full max-w-6xl">
        <SlideIn>
          <Heading className="text-center mb-10 mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl " as="h2">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        </SlideIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {skaters.map((skater, index) => (
            <React.Fragment key={index}>
              {skater.data.first_name && (
                <SlideIn>
                  <Skater index={index} skater={skater} />
                </SlideIn>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;