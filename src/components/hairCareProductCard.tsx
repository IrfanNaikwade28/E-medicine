import { FunctionComponent } from "preact";
import lightning from "../assets/icons/light.png"
type cardProps = {
    imgUrl:string;
    title:string;
    testCount:string;
    reportTime:string;
    discount:string;
    actualPrice:string;
    discountPrice:string;
}
export const HairCareProductCard:FunctionComponent<cardProps> = (props) => {
    return(
        <>
            <div className="offer-card w-[40vw] max-w-[15rem] flex flex-col gap-y-1">
                    <div className="relative flex justify-center items-center w-full h-1/2 border border-black border-opacity-10 shadow-sm rounded-lg">
                            <img className="object-contain relative size-3/4" src={props.imgUrl} alt="" />
                    </div>
                    <div className="chekckup-info">
                            <div className="title font-semibold text-sm line-clamp-2">{props.title}</div>
                            <div className="test-count text-gray-700 text-xs font-extralight">{props.testCount}</div>
                    </div>
                    <div className="price-info grid gap-y-1">
                            <div className="report-time text-gray-700 text-xs font-extralight flex gap-x-1 truncate ">
                            Get in<span className="text-[#9D59A8] font-normal truncate">{props.reportTime}</span> <img className="w-3 h-auto" src={lightning} alt="" />
                            </div>
                        <div className="prices flex gap-x-1">
                                <div className="disc-price font-bold text-sm">
                                    <span>₹</span>{props.discountPrice}
                                </div>
                                <div className="actual-price line-through  text-gray-700 text-xs font-extralight">
                                    <span>₹</span>{props.actualPrice}
                                </div>
                                <div className="discount text-green-900 font-bold text-xs flex">{props.discount}% off</div>
                        </div>
                        <button className="bg-white border border-black border-opacity-10 h-10 rounded-md font-semibold text-[#ff5443] shadow-sm hover:bg-slate-50">ADD</button>
                    </div>
                </div>
        </>
    )
}