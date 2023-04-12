import Card from '@/components/card'
import { getProductsByCategory } from '../api/products/[category]'

export default function CategoryPage({ products }) {


  return (
    <main>
      <div className="">
        <div className="flex justify-between px-10 items-center">
        <h1 className='text-2xl font-semibold text-white border-b-4 border-yellow-500 pb-1 pt-5 mb-5'> <span className='text-yellow-500 text-3xl '>C</span>ategory</h1>
         
          
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {products.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps(ctx) {
    const category = ctx.query.category;
    const products = await getProductsByCategory(category);
    return { props: { products } };
}