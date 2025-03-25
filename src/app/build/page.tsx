import { ButtonLink } from '@/components/ButtonLink';
import { Heading } from '@/components/heading';
import React from 'react';

import { CustomizerControlsProvider } from './context';

export default async function page() {
    return (
        <div className='flex min-h-screen flex-col lg:flex-row'>
            <CustomizerControlsProvider>
                <div className="relative aspect-square shrink-0 bg-[color:var(--brand-medium-gray)] lg:aspect-auto lg:grow">
                    <ButtonLink
                        href="/"
                        className="z-20 mt-6 ms-6 px-3 py-1 md:px-4 md:py-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)]"
                    >Accueil
                    </ButtonLink>
                </div>
                <div className="grow wall-texture bg-zinc-900 text-white p-5 lg:w-96 lg:shrink-0 lg:grow-0">
                    <Heading as='h1' size='sm' className='mb-6 mt-0 lg:text-2Òxl'>
                        Personnalise ta board
                    </Heading>
                    <ButtonLink href="" color='lime' icon='plus'
                        className="z-20 px-3 py-1 md:px-4 md:py-2 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)] text-sm">Ajouter au panier</ButtonLink>
                </div>
            </CustomizerControlsProvider>
        </div>
    )
}