
import Card from '@/components/card'
import { getCategory, getProductsByRekom } from './api/products'
import CategoryCard from '@/components/category-card';
import Link from 'next/link';
Link

export default function Home({ categoty, rekom }) {
  return (
    <main>
      <div className="">
        <div className="flex justify-between px-10 items-center">
          <h1 className='text-2xl font-semibold text-white border-b-4 border-yellow-500 pb-1 pt-5 mb-5'> <span className='text-yellow-500 text-3xl '>C</span>etegory</h1>

        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {categoty.map((item) => (
            <CategoryCard data={item} key={item.id} />
          ))}
        </div>

      </div>
      <div>
        <div className="flex justify-between px-10 items-center">
          <h1 className='text-2xl font-semibold text-white border-b-4 border-yellow-500 pb-1 pt-5 mb-5'> <span className='text-yellow-500 text-3xl '>R</span>ekomendasi</h1>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {rekom.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href='/store'>
            <button type="button" className="px-5 py-2 font-semibold  border rounded border-gray-100 text-gray-100">View All</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {

  const categoty = await getCategory();
  const rekom = await getProductsByRekom();

  return { props: { categoty, rekom } }
}