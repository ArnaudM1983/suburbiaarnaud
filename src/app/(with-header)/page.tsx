import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Content } from "@prismicio/client";
import { SliceComponentProps, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => notFound());
  const slices = bundleTextAndImageSlices(page.data.slices);

  return (
    <SliceZone
      slices={slices}
      components={{
        ...components,
        text_and_image_bundle: ({ slice }: SliceComponentProps<TextAndImageBudleSlice>) => (
          <div>
            <SliceZone slices={slice.slices} components={components} />
          </div>
        ),
      }}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

type TextAndImageBudleSlice = {
  id: string;
  slice_type: "text_and_image_bundle";
  slices: Content.TextAndImageSlice[];
};

function bundleTextAndImageSlices(slices: Content.HomepageDocumentDataSlicesSlice[]) {
  const res: (
    | Content.HomepageDocumentDataSlicesSlice
    | TextAndImageBudleSlice
  )[] = [];

  for (const slice of slices) {
    if (slice.slice_type !== "text_and_image") {
      // Si ce n'est pas un "text_and_image", on l'ajoute directement à res
      res.push(slice);
      continue;
    }

    const lastBundle = res.at(-1);

    if (lastBundle?.slice_type === "text_and_image_bundle") {
      // Si le dernier élément de res est un bundle, on y ajoute le slice
      lastBundle.slices.push(slice);
    } else {
      // Sinon, on crée un nouveau bundle
      res.push({
        id: `${slice.id}-bundle`,
        slice_type: "text_and_image_bundle",
        slices: [slice],
      });
    }
  }
  
  return res;
}
