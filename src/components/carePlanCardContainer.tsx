import { CarePlanCard } from "./carePlanCard"
export const CarePlanCardContainer = () =>{
    return(
        <>
        <div className="text-center mt-10">
            <div className="text-2xl font-bold">Plan made for you</div>
            <div className="text-base font-normal text-gray-500">Save money based on your needs</div>
        </div>
        <div className="w-full px-3 mt-3 grid grid-flow-col gap-x-4 overflow-x-scroll snap-x snap-mandatory">
            <CarePlanCard/>
            <CarePlanCard/>
        </div>
        </>
    )
}