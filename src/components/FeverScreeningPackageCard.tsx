import { FunctionComponent } from "preact";

type cardProps = {
    imgUrl:string;
    title:string;
    testCount:string;
    reportTime:string;
    discount:string;
    actualPrice:string;
    discountPrice:string;
}
export const FeverScreeningPackageCard:FunctionComponent<cardProps> = (props) => {
    return(
        <>
            <div className="offer-card w-[60vw] flex flex-col gap-y-2 snap-center">
                    <div className="w-full">
                        <img className="rounded-md" src={props.imgUrl} alt="" />
                    </div>
                    <div className="chekckup-info">
                        <div className="title font-semibold text-base line-clamp-2">{props.title}</div>
                        <div className="test-count text-gray-700 text-sm font-extralight">{props.testCount}</div>
                    </div>
                    <div className="price-info">
                        <div className="report-time text-gray-700 text-xs font-extralight">
                           {props.reportTime}
                        </div>
                        <div className="prices flex gap-x-1">
                            <div className="disc-price font-bold text-base">
                                <span>₹</span>{props.discountPrice}
                            </div>
                            <div className="actual-price line-through text-gray-700 text-base font-extralight">
                                <span>₹</span>{props.actualPrice}
                            </div>
                            <div className="discount text-green-900 font-bold text-base flex">{props.discount}% off</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-1 rounded-[4px] w-full border-2 border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white font-semibold">Book</div>
                </div>
        </>
    )
}