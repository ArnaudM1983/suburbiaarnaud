
import { Heading } from '@/components/heading';
import React from 'react';

import { CustomizerControlsProvider } from './context';
import { createClient } from '@/prismicio';
import Preview from './Preview';
import { asImageSrc } from '@prismicio/client';
import Controls from './Controls';
import Link from 'next/link';

type SearchParams = {
    wheel?: string;
    deck?: string;
    truck?: string;
    bolt?: string;
};

export default async function Page(props: {
    searchParams: SearchParams; // Modification pour ne pas être une promesse
}) {
    const client = createClient();
    const customizerSettings = await client.getSingle("board_customizer");
    const { wheels, decks, metals } = customizerSettings.data;

    // Utilisation des paramètres de recherche passés dans l'URL
    const defaultWheel = wheels.find((wheel) => wheel.uid === props.searchParams.wheel) ?? wheels[0];
    const defaultDeck = decks.find((deck) => deck.uid === props.searchParams.deck) ?? decks[0];
    const defaultTruck = metals.find((metal) => metal.uid === props.searchParams.truck) ?? metals[0];
    const defaultBolt = metals.find((metal) => metal.uid === props.searchParams.bolt) ?? metals[0];

    const wheelTextureURLs = wheels.map((texture) => asImageSrc(texture.texture)).filter((url): url is string => Boolean(url));
    const deckTextureURLs = decks.map((texture) => asImageSrc(texture.texture)).filter((url): url is string => Boolean(url));

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            <CustomizerControlsProvider
                defaultWheel={defaultWheel}
                defaultDeck={defaultDeck}
                defaultBolt={defaultBolt}
                defaultTruck={defaultTruck}
            >
                <div className="relative aspect-square shrink-0 bg-[color:var(--brand-medium-gray)] lg:aspect-auto lg:grow">
                    <div className="absolute inset-0">
                        <Preview deckTextureURLs={deckTextureURLs} wheelTextureURLs={wheelTextureURLs} />
                    </div>

                    <Link
                        href="/"
                        className="z-20 mt-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)] py-2 px-6 text-xs sm:text-xs md:text-base text-center rounded-full hover:text-white"
                    >
                        Accueil
                    </Link>
                </div>
                <div className="grow wall-texture bg-zinc-900 text-white p-5 lg:w-96 lg:shrink-0 lg:grow-0">
                    <Heading as="h1" size="sm" className="mb-6 mt-0 lg:text-2Òxl">
                        Personnalise ta board
                    </Heading>
                    <Controls
                        wheels={wheels}
                        decks={decks}
                        metals={metals}
                        className="mb-6"
                    />
                    <Link
                        href="/build"
                        className="z-20 mt-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)] py-2 px-6 text-xs sm:text-xs md:text-base text-center rounded-full hover:text-white"
                    >
                        Ajouter au panier
                    </Link>
                </div>
            </CustomizerControlsProvider>
        </div>
    );
}
