import { FeverScreeningPackageCard } from "./FeverScreeningPackageCard"
import feverImg from "../assets/feverImg.jpg"
export const FeverScreeningPackage = () => {
    return(
        <>
            <div className="flex flex-col px-3 mt-10">
                <div className="text-wrap font-bold tracking-wide text-xl">Fever screening packages</div>
                <div className="text-gray-600 text-sm tracking-wide">persistent fever? Get yourself tested now</div>
            </div>
            <div className="checkup-offers w-full px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll snap-x snap-mandatory">
                <FeverScreeningPackageCard imgUrl={feverImg}
                    title={"Fever Package Basic"}
                    testCount={"Contains 45 tests"}
                    reportTime={"Get reports within 18 hrs"}
                    discountPrice={"500"}
                    actualPrice={"555"}
                    discount={"10%"}/>
                <FeverScreeningPackageCard imgUrl={feverImg}
                    title={"Fever Package Basic"}
                    testCount={"Contains 45 tests"}
                    reportTime={"Get reports within 18 hrs"}
                    discountPrice={"500"}
                    actualPrice={"555"}
                    discount={"10%"}/>
                <FeverScreeningPackageCard imgUrl={feverImg}
                    title={"Fever Package Basic"}
                    testCount={"Contains 45 tests"}
                    reportTime={"Get reports within 18 hrs"}
                    discountPrice={"500"}
                    actualPrice={"555"}
                    discount={"10%"}/>
                <FeverScreeningPackageCard imgUrl={feverImg}
                    title={"Fever Package Basic"}
                    testCount={"Contains 45 tests"}
                    reportTime={"Get reports within 18 hrs"}
                    discountPrice={"500"}
                    actualPrice={"555"}
                    discount={"10%"}/>
                <FeverScreeningPackageCard imgUrl={feverImg}
                    title={"Fever Package Basic"}
                    testCount={"Contains 45 tests"}
                    reportTime={"Get reports within 18 hrs"}
                    discountPrice={"500"}
                    actualPrice={"555"}
                    discount={"10%"}/>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
        </>
    )
}