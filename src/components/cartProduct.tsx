import { FunctionComponent } from "preact";
import closeBtn from "../assets/icons/close-btn.svg"

type cartProps = {
    prodImg:string;
    title:string;
    qty:string;
    price:string;
}
export const CartProduct:FunctionComponent<cartProps> = (props) => {
  return (
    <>
      <div className="product flex w-full gap-2">
        <div className="product-img basis-1/4">
          <img src={props.prodImg} alt="" />
        </div>
        <div className="product-info basis-3/5 flex flex-col justify-center pl-2">
          <span className="title text-orange-600 text-md font-semibold">
            {props.title}
          </span>
          <div className="price flex gap-2">
            <span className="qty text-gray-500">{props.qty}</span>
            <span className=" text-gray-500">x</span>
            <span className="price text-orange-600 font-bold">${props.price}</span>
          </div>
        </div>
        <div className="close-btn basis-5 text-gray-500 flex justify-center items-center">
          <img src={closeBtn} alt="" />
        </div>
      </div>
    </>
  );
};
