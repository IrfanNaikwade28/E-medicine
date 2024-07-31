import { CarePlanCard } from "./carePlanCard"
import topCurve from "../assets/icons/backgroundTopCurve.svg"
import bottomCurve from "../assets/icons/backgroundBottomCurve.svg"
export const CarePlanCardContainer = () =>{
    return(
        <>
        <div className="text-center mt-10">
            <div className="text-2xl font-bold">Plan made for you</div>
            <div className="text-base font-normal text-gray-500">Save money based on your needs</div>
        </div>
        <div className="w-full h-full">
                <img className="size-full" src={topCurve} alt="" />
            </div>
        <div className="w-full px-3 py-3 grid grid-flow-col gap-x-4 overflow-x-scroll snap-x snap-mandatory bg-[#FEF7EF]">
            <CarePlanCard/>
            <CarePlanCard/>
        </div>
        <div className="w-full h-full">
                <img className="size-full" src={bottomCurve} alt="" />
        </div>
        </>
    )
}