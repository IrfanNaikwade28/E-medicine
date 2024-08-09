import { useState } from "preact/hooks"
import { Link } from "react-router-dom"
import menuIcon from "../assets/icons/nav-menu.svg"
import backBtnIcon from "../assets/icons/arrow-left.svg"
import cartIcon from "../assets/icons/cart.svg"
import searchIcon from "../assets/icons/search.svg"
import { NavbarToggle } from "./navbarToggle"
import { CartCarousel } from "./cartCarousel"
import { FunctionComponent } from "preact"

type NavbarProps = {
    setSearchAndBackBtn: boolean;
    isSticky: boolean;
    setCartBtn:boolean;
  }
export const Navbar:FunctionComponent<NavbarProps> = (props) =>{
    const [toggle, setToggle] = useState(false)
    const [cartCaro, setCartCaro] = useState(false)

    return(
        <>
            <nav className={`w-full bg-white h-20 flex $ ${props.setCartBtn?'justify-between':'gap-x-5'} px-5 items-center border-b border-gray-200 ${props.isSticky?"sticky z-40 top-0":""}`}>
                {
                    props.setSearchAndBackBtn ?
                    <div className="menu-toggle flex justify-center items-center bg-[#f0f2f5] rounded-full size-10">
                        <Link to="/">
                            <img onClick={() => ''} src={backBtnIcon} alt="" />
                        </Link>
                    </div> :
                    <div className="menu-toggle flex justify-center items-center bg-[#f0f2f5] rounded-full size-10">
                        <img onClick={() => setToggle(!toggle)} src={menuIcon} alt="" />
                    </div>
                }
                <div className="logo">
                    <span className="text-orange-500">LOGO</span>
                </div>
                <div className="flex gap-x-2">
                   {props.setSearchAndBackBtn ? 
                    <div className="cart flex justify-center items-center bg-[#f0f2f5] rounded-full size-10">
                        <img className="size-5" onClick={() => ''} src={searchIcon} alt="" />
                    </div> : ('')
                    }
                    <div className={`${props.setCartBtn?'block':'hidden'}`}>
                        <span className="flex justify-center items-center bg-orange-600 text-white text-xs size-4 rounded-full absolute top-4 right-4">2</span>
                        <div className="cart flex justify-center items-center bg-[#f0f2f5] rounded-full size-10">
                            <img onClick={() => setCartCaro(!cartCaro)} src={cartIcon} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
            <NavbarToggle display={toggle} setToggle={setToggle}/>
            <CartCarousel cartCaro={cartCaro} setCartCaro={setCartCaro}/>
        </>
    )
}
