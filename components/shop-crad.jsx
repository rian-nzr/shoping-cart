import Image from "next/image"
import { useDispatch } from "react-redux"
import { incrementQuantity, decrementQuantity, removeFromCart, } from '../redux/cart.slice';

export default function ShopCrad({ data }) {
    const dispatch = useDispatch();

    return (
        <div className="justify-between mb-6 rounded-lg bg-gray-800 text-white p-6 shadow-md sm:flex sm:justify-start">
            <div className="w-full rounded-lg sm:w-28 overflow-hidden">
                <Image
                    src={data.image}
                    alt="photo"
                    width={100}
                    height={30}
                    className="w-full"
                />
            </div>
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-3xl font-bold ">{data.product}</h2>
                    <p className="mt-1 text-base">${data.price}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100 text-black">
                        <button onClick={() => dispatch(decrementQuantity(data.id))} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>

                        <div className="h-8 w-8 border bg-white text-center text-base outline-none">{data.quantity}</div>
                        <button onClick={() => dispatch(incrementQuantity(data.id))} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl">${(data.quantity * data.price).toFixed(2)} </p>
                        <button onClick={() => dispatch(removeFromCart(data.id))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}