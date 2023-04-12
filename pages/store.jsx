import Card from '@/components/card'
import { getProducts } from './api/products'

export default function Store({ products }) {
    return (
        <>
            <div>
                <div className="flex justify-between px-10 items-center">
                    <h1 className='text-2xl font-semibold text-white border-b-4 border-yellow-500 pb-1 pt-5 mb-5'> <span className='text-yellow-500 text-3xl '>A</span>ll</h1>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                    {products.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const products = await getProducts();

    return { props: { products } }
}