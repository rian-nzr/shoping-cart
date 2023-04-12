import Image from "next/image";
import { AiFillStar } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";

export default function Card({ data }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="max-w-xs w-full bg-gray-800 shadow-lg rounded-xl p-6">

                <div className="flex flex-col">
                    <div className="relative overflow-hidden h-96 bg-white w-full mb-3 rounded-2xl">
                        <div className="absolute flex flex-col top-0 right-0 p-3">
                            <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg></button>
                        </div>
                        <Image
                            src={data.image}
                            alt="foto"
                            width={1000}
                            height={300}
                            className="h-full w-auto mx-auto object-fill  rounded-2xl"
                        />
                    </div>
                    <div className="flex-auto justify-evenly ">
                        <div className="flex flex-wrap ">
                            <div className="w-full flex-none text-sm flex items-center text-gray-600">

                                <AiFillStar className="text-xl pr-1 text-yellow-500" />
                                <span className="text-gray-400 whitespace-nowrap mr-3">{data.rating}</span><span className="mr-2 text-gray-400">Indonesia</span>
                            </div>
                            <div className="flex items-center w-full justify-between min-w-0 ">
                                <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">{data.product} </h2>
                                <div className="flex items-center bg-green-600 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                                    {data.category}</div>
                            </div>
                        </div>
                        <div className="text-xl text-white font-semibold mt-1">${data.price}</div>

                        <div className="flex space-x-2 text-sm font-medium justify-start mt-3">
                            <button onClick={() => dispatch(addToCart(data))} className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                <span>Add Cart</span>
                            </button>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}