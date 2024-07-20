import { FunctionComponent } from "preact";
import ProdImg1 from "../assets/volini.jpg"
import {CartProduct} from "./cartProduct"
import { useEffect } from "preact/hooks";

type ToggleProps = {
    cartCaro: boolean;
    setCartCaro: (value: boolean) => void;
};
export const CartCarousel: FunctionComponent<ToggleProps> = (props) =>{
    useEffect(() => {
        if (props.cartCaro) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup function to remove the class when the component unmounts or cartCaro changes
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [props.cartCaro]);
    return (
        <>
            <div onClick={() => props.setCartCaro(false)} className={`absolute top-0 flex justify-center items-center bg-black bg-opacity-30 w-full h-screen z-40 ${props.cartCaro ? "block overflow-hidden" : "hidden"}`}>
                <div className="flex flex-col gap-3 w-72 h-80 bg-white z-50 rounded-xl border border-opacity-10 border-solid border-black shadow-md p-4">
                    <div className="w-full h-4/6 cart-product-list flex flex-col gap-3.5 overflow-y-scroll">
                        <CartProduct prodImg={ProdImg1} title={"Volini Saridon"} qty={"1"} price={"800.00"}/>
                        <CartProduct prodImg={ProdImg1} title={"Volini Saridon"} qty={"1"} price={"800.00"}/>
                        <CartProduct prodImg={ProdImg1} title={"Volini Saridon"} qty={"1"} price={"800.00"}/>
                        <CartProduct prodImg={ProdImg1} title={"Volini Saridon"} qty={"1"} price={"800.00"}/>
                        <CartProduct prodImg={ProdImg1} title={"Volini Saridon"} qty={"1"} price={"800.00"}/>
                    </div>
                    <div className="w-full h-1/4 border-t-2 border-opacity-50 flex flex-col">
                        <div className="total-price mt-3 px-2 flex justify-between">
                            <span className="text-gray-600 font-bold">Total</span>
                            <span className="text-orange-600 font-bold">$356.00</span>
                        </div>
                        <div className="total-price mt-3 px-2 flex justify-between">
                            <button className="w-24 h-8 bg-orange-600 text-white text-sm rounded-3xl flex justify-center items-center">View Cart</button>
                            <button className="w-24 h-8 bg-orange-600 text-white text-sm rounded-3xl flex justify-center items-center">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}