
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

type Props = {
    skater: Content.SkaterDocument;
    index: number;
};

export function Skater({ skater, index }: Props) {
    const colors = [
        "text-brand-blue",
        "text-brand-lime",
        "text-brand-orange",
        "text-brand-pink",
        "text-brand-purple",
    ];

    const scribbleColor = colors[index];

    return (
        <div className="skater group relative flex flex-col items-center gap-4">
            <div className="stack-layout overflow-hidden relative">
                {/* Image Background */}
                <PrismicNextImage
                    field={skater.data.photo_background}
                    width={500}
                    imgixParams={{ q: 20 }}
                    alt=""
                    className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8] z-0"
                />

                {/* Image Foreground */}
                <PrismicNextImage
                    field={skater.data.photo_foreground}
                    width={500}
                    alt=""
                    className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110 z-0"
                />

                {/* Dégradé placé par-dessus l'image */}
                <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-black via-transparent to-transparent z-5"></div>

                {/* Nom et prénom par-dessus tout */}
                <h3 className="absolute bottom-5 left-5 text-white font-sans text-2xl sm:text-3xl md:text-4xl z-10">
                    <span className="block">{skater.data.first_name}</span>
                    <span className="block">{skater.data.last_name}</span>
                </h3>
            </div>

            <a
                href="/build"
                className="z-20 mt-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)] py-2 px-6 text-xs sm:text-xs md:text-base text-center rounded-full hover:text-white"
            >
                Crée maintenant
            </a>
        </div>
    );
}