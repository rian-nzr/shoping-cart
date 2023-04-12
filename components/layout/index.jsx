
import Header from "./header";

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <div className="py-16 container mx-auto">
                {children}
            </div>
            <footer className="">
                <div className="py-3 text-sm text-center border-t text-white"> Copyright <span className="font-medium"> RIAN</span> © {new Date().getFullYear()} </div>
            </footer>
        </>
    )
}