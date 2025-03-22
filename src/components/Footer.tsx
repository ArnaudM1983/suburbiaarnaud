import { createClient } from '@/prismicio'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import React from 'react'
import { Bounded } from './bounded'
import { FooterPhysics } from './FooterPhysics'
import { asImageSrc } from '@prismicio/client'

type Props = {}

export async function Footer({ }: Props) {

    const client = createClient()
    const settings = await client.getSingle("settings")

    const boardTextureURLs = settings.data.footer_skateboards
    .map((item) => asImageSrc(item.skateboard, { h: 600 }))
    .filter((url): url is string => Boolean(url));

    return (
        <footer className="bg-[color:var(--brand-medium-gray)] text-white overflow-hidden">
            <div className="relative h-[85vh] ~p-10/16 md:aspect-auto">
                <PrismicNextImage
                    field={settings.data.footer_image}
                    alt=""
                    fill
                    className="object-cover"
                    width={1200}
                />
                <FooterPhysics
                    boardTextureURLs={boardTextureURLs}
                    className="absolute inset-0 overflow-hidden"
                />
            </div>
            <Bounded as="nav">
                <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
                    {settings.data.navigation.map((item) => (
                        <li key={item.link.text} className="hover:underline ">
                            <PrismicNextLink field={item.link} />
                        </li>
                    ))}
                </ul>
            </Bounded>
            {/* List of links */}
        </footer>
    )
}