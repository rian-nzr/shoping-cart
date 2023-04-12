import Image from "next/image"
import Link from "next/link"


export default function CategoryCard({ data }) {
    return (
        <div className="mx-2 bg-gray-800 text-white rounded-xl w-40 h48 p-2">
            <Link href={`/category/${data.slug}`}>
                <div className=" overflow-hidden rounded-lg h-32  flex items-center justify-center bg-white">
                    <Image
                        src={`/images/${data.image}`}
                        alt="photo"
                        width={300}
                        height={300}
                        className="w-full bg" />
                </div>
                <h2 className="pt-2 font-medium text-xl text-center ">{data.category_name} {data.Image}</h2>
            </Link>
        </div>
    )
}