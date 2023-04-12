import Link from 'next/link'
import { BiMenu, BiHomeAlt , BiStore} from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { GiShoppingCart } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { useState } from 'react'

const navs = [
    { text: 'Home', href: '/', main: "account" },
    { text: 'Store', href: '/store', main: "beli" },
]


export default function Header() {
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const currentMainPath = router.pathname;

    const getItemsCount = () => {
        return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    }

    return (
        <>
            <header className=" bg-gray-800 text-gray-100 fixed w-full z-50 lg:px-0 px-5">
                <div className="container flex justify-between items-center mx-auto py-2">
                    <div className="flex">
                        <h1 rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-end text-2xl font-bold pr-2 border-r-4">
                            <span className="text-yellow-500 text-4xl">A</span>ceh  <span className="text-yellow-500 text-4xl pl-2">S</span>tore
                        </h1>
                        <ul className="items-stretch hidden space-x-3 lg:flex text-lg px-2 font-medium">
                            {navs.map((nav, index) => (

                                <li key={index} className="flex">
                                    <Link rel="noopener noreferrer" href={nav.href} className={`flex items-center px-4 -mb-1  ${router.pathname == nav.href ? ' border-b-2 border-transparent text-yellow-400 border-yellow-400' : ''}`} >{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex space-x-2">

                        <Link href='/cart' type="button"
                            className={`flex  justify-center transition ease-in duration-300  hover:text-yellow-500 shadow hover:shadow-md text-white ${router.pathname == '/cart' ? 'text-yellow-400' : ''} `}>
                            <GiShoppingCart className='text-3xl font-bold' />
                            {getItemsCount() === 0 ? '' : (

                                <p className=' h-3 w-3 borderborder=white flex items-center  justify-center rounded-xl text-sm '>{getItemsCount()}</p>
                            )}
                        </Link>
                        <div className="top-4 right-8 lg:hidden ">
                            <button
                                className="flex flex-col h-8 w-8 rounded justify-center items-center group"
                                onClick={() => setOpen(!open)}
                            >
                                <BiMenu className="text-4xl" />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`md:mr-auto backdrop-blur-sm text-black 0 h-full lg:hidden w-full lg:w-auto transform transition-all fixed lg:relative right-0 left-0 duration-500 text top-0 flex z-10 ${open === false &&
                        "-translate-x-full lg:-translate-x-0 bg-opacity-0 backdrop-blur-none "
                        }`}
                >
                    <div className="bg-white w-4/5 overflow-hidden rounded-r-xl font-inter">
                        <div className=" overflow-hidden flex items-center justify-between px-2">
                            <p className="text-lg text-gray-700 font-bold px-3">
                                KampusKoding.com
                            </p>
                            <button
                                className="flex flex-col h-12 w-12 rounded justify-center items-center group"
                                onClick={() => setOpen(!open)}
                            >
                                <MdClose className="text-2xl " />
                            </button>
                        </div>

                        <div className="px-8">
                            <ul className="flex items-start justify-around text-base font-medium flex-col space-y-5  border-b  pb-10 pt-6">
                                <li>
                                    <Link
                                        href="/"
                                        className="flex items-start space-x-2"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <BiHomeAlt className="text-xl" />
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/store"
                                        className="flex items-start space-x-2"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <BiStore className="text-xl" />
                                        <p>Store</p>
                                    </Link>
                                </li>

                            </ul>
                            
                        </div>
                        <div className="absolute bottom-5 flex flex-col w-4/5">
                            <div className="flex justify-center space-x-3">
                                <div className="flex items-center p-1">
                                    <BsFacebook className="text-xl" />
                                </div>
                                <div className="flex items-center p-1">
                                    <BsInstagram className="text-xl" />
                                </div>
                                <div className="flex items-center p-1">
                                    <BsGithub className="text-xl" />
                                </div>
                            </div>
                            <p className="py-2 text-sm text-center text-gray-700">
                                
                                Copyright <span className="font-medium">RIAN</span>© {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )


}
//className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-yellow-400 border-yellow-400"