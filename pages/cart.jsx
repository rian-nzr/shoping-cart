import ShopCrad from "@/components/shop-crad";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, removeAll } from "@/redux/cart.slice";
import Link from "next/link";


export default function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price,
            0
        );
    };


    return (
        <>
            <div className="mx-auto px-12 py-10 justify-center  md:flex md:space-x-6 ">
                {cart.length === 0 ? (
                    <div className="md:w-2/3 flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-semibold">Your Cart is Empty</h1>
                        <Link href='/' className=" cursor-pointer text-blue-100 underline"><p>back to home</p></Link>
                    </div>
                ) : (<>
                    <div className="rounded-lg md:w-2/3">
                        {
                            cart.map((item) => (
                                <ShopCrad key={item.id} data={item} />
                            ))
                        }
                    </div>
                    <div className="mt-6 h-full rounded-lg bg-gray-800 text-white p-6 shadow-md md:mt-0 md:w-1/3">
                        {cart.length === 0 ? '' : (
                            cart.map((item) => (
                                <div key={item.id} className="mb-2 flex justify-between">
                                    <p className="">{item.product}</p>
                                    <p className="">${(item.quantity * item.price).toFixed(2)} USD</p>
                                </div>
                            ))
                        )}
                        <div className="flex justify-between">
                            <p className="">Discon</p>
                            <p className="">$0.00 USD</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className>
                                <p className="mb-1 text-lg font-bold">${getTotalPrice().toFixed(2)} USD</p>
                            </div>
                        </div>
                        <button onClick={()=>dispatch(removeAll())} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                </>
                )}
            </div>
        </>
    )
}