
import React from 'react'

import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

const Header = async () => {
    const client = createClient()
    const settings = await client.getSingle("settings")

    return (
        <header className="header absolute left-0 right-0 top-0 z-50 h-36 px-10 py-4 hd:h-32">
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">

                {/* Navigation à gauche */}
                <nav aria-label="Main" className="flex justify-start">
                    <ul className="flex flex-wrap items-center gap-8">
                        {settings.data.navigation.map((item) => (
                            <li key={item.link.text} className="[color:white]">
                                <PrismicNextLink field={item.link} className="text-sm md:text-lg xl:text-xl" />
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bouton Panier à droite */}
                <div className="flex justify-end">
                    <a
                        href="/build"
                        className="z-20 mt-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)] py-2 px-6 text-xs sm:text-xs md:text-base text-center rounded-full hover:text-white"
                    >
                        Panier
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header;





