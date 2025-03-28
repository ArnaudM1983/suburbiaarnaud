
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import clsx from "clsx";
import Image from "next/image";
import { JSX } from "react";

const MASK_CLASSES =
  "[mask-image:url(/broken-wall.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wall-texture bg-[color:var(--brand-medium-gray)]"
    >
      <div className="px-6 py-6 mx-auto w-full max-w-6xl">
        <h2 className="sr-only">Video Reel</h2>
        <div className="relative aspect-video">
          {/* Masks */}
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-[color:var(--brand-orange)] absolute inset-0 -translate-x-3 -translate-y-3"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-white absolute inset-0 -translate-x-2 -translate-y-2"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-white absolute inset-0 -translate-x-2 translate-y-2"
            )}
          />
          {/* Video */}
          <div className={clsx(MASK_CLASSES, "relative h-full")}>
            {isFilled.keyText(slice.primary.youtube_video_id) ? (
              <LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />
            ) : null}
            {/* Texture overlay */}
            <Image
              src="/image-texture.png"
              alt=""
              fill
              className="pointer-events-none object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
