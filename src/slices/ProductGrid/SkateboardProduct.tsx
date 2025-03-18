import { ButtonLink } from '@/components/ButtonLink';
import { createClient } from '@/prismicio';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { FaStar } from 'react-icons/fa6';

type Props = {
    id: string;
}

export async function SkateboardProduct({ id }: Props) {
    const client = createClient()
    const product = await client.getByID<Content.SkateboardDocument>(id)

    const price = isFilled.number(product.data.price)
        ? `${product.data.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}`
        : "Prix non disponible";

    return (
        <div className="group relative mx-auto w-full max-w-72 px-8 pt-6 bg-[color:var(--brand-light-gray)] rounded-[15px]">
            <div className="flex items-center justify-between text-sm-2xl">
                <span>{price}</span>
                <span className='inline-flex items-center gap-1'>
                    <FaStar className='text-yellow-500' /> 37
                </span>
            </div>
            <div className='-mb-1 overflow-hidden py-4'>
                <PrismicNextImage alt='' field={product.data.image} width={150}  
                className=" mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"/>
            </div>
            <h3 className='my-2 text-center font-sans leading-tight text-2xl font-extrabold'>{product.data.name}</h3>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ButtonLink field={product.data.customizer_link} className="z-20 mt-2 px-4 py-1 block bg-[color:var(--brand-orange)] hover:bg-[color:var(--brand-light-orange)]" href="" color="purple" aria-label="Customise">
                    Customise
                </ButtonLink>
            </div>
        </div>
    )
}