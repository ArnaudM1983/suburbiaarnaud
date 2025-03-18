import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

const Header = async () => {
    const client = createClient()
    const settings = await client.getSingle("settings")

    return (
        <header className="header absolute left-0 right-0 top-0 z-50 h-36 px-10 py-4 hd:h-32">
            <div className="px-10 flex items-center justify-between w-full">
                <Link href="/" className="justify-self-start"><Logo className="text-brand-purple h-16" /></Link>
                <nav aria-label="Main"
                    className="">
                    <ul className="flex flex-wrap items-center justify-center gap-8">
                        {settings.data.navigation.map((item) => (
                            <li key={item.link.text} className='[color:white]'>
                            <PrismicNextLink field={item.link} className="~text-lg/xl" />
                          </li>
                        ))}
                    </ul>
                </nav>
                <div className="justify-self-end">
                    <ButtonLink className="z-20 mt-2 px-4 py-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)]" href="" icon="cart" color="purple" aria-label="Cart (1)">
                        <span className="md:hidden">1</span>
                        <span className="hidden md:inline">Cart (1)</span>
                    </ButtonLink>
                </div>
            </div>
        </header>
    )
}

export default Header;