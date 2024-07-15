import { useState } from "preact/hooks"
import menuIcon from "../assets/icons/nav-menu.svg"
import cartIcon from "../assets/icons/cart.svg"
import { NavbarToggle } from "./navbarToggle"
import { CartCarousel } from "./cartCarousel"

export const Navbar = () =>{
    const [toggle, setToggle] = useState(false)
    const [cartCaro, setCartCaro] = useState(false)
    return(
        <>
            <nav className="w-full h-20 flex justify-between px-5 items-center border-b border-opacity-40">
                <div className="menu-toggle flex justify-center items-center bg-[#f0f2f5] rounded-full size-10">
                    <img onClick={() => setToggle(!toggle)} src={menuIcon} alt="" />
                </div>
                <div className="logo">
                    <span className="text-orange-500">LOGO</span>
                </div>
                <div className="">
                    <span className="flex justify-center items-center bg-orange-600 text-white text-xs size-4 rounded-full absolute top-4 right-4">2</span>
                    <div className="cart flex justify-center items-center bg-[#f0f2f5] rounded-full size-10">
                        <img onClick={() => setCartCaro(!cartCaro)} src={cartIcon} alt="" />
                    </div>
                </div>
            </nav>
            <NavbarToggle display={toggle} setToggle={setToggle}/>
            <CartCarousel cartCaro={cartCaro} setCartCaro={setCartCaro}/>
        </>
    )
}
