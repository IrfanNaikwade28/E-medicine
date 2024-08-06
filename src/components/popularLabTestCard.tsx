import { FunctionComponent } from "preact";

type testCardProps = {
    cardImg:string;
    mainText:string;
    subText:string;
    price:string;
}
export const PopularLabTestCard:FunctionComponent<testCardProps> = (props) =>{
    return (
        <>
            <div className="labTestCard flex flex-col justify-between w-[60vw]">
                    <div className="flex gap-x-3">
                        <div className="image">
                            <img className="w-10" src={props.cardImg} alt="" />
                        </div>
                        <div className="text flex flex-col">
                            <div className="main-text font-bold">{props.mainText}</div>
                            <div className="sub-text text-sm text-gray-700 font-light">{props.subText}</div>
                            <div className="price mt-2 flex gap-x-2 items-center">
                                <div className="price-tag text-lg">₹{props.price}</div>
                                <div className="price text-sm text-gray-900 font-light">onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-1 rounded-[4px] w-full border border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white font-semibold">Book</div>
            </div>
        </>
    )
}