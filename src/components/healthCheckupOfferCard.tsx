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
export const HealthCheckupOfferCard:FunctionComponent<cardProps> = (props) => {
    return(
        <>
            <div className="offer-card w-[40vw] flex flex-col gap-y-2">
                    <div className="w-full">
                        <img src={props.imgUrl} alt="" />
                    </div>
                    <div className="chekckup-info">
                        <div className="title font-semibold text-sm line-clamp-2">{props.title}</div>
                        <div className="test-count text-gray-700 text-xs font-extralight">{props.testCount}</div>
                    </div>
                    <div className="price-info">
                        <div className="report-time text-gray-700 text-xs font-extralight">
                           {props.reportTime}
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
                    </div>
                </div>
        </>
    )
}