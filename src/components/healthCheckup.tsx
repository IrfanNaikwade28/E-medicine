import sampleImg from "../assets/products/mobyoga.jpg"
import { HealthCheckupOfferCard } from "./healthCheckupOfferCard"
import banner1 from "../assets/banner1.png"
import arrow from "../assets/icons/arrow.svg"
export const HealthCheckup = () =>{
    return(
        <>
            <div className="flex justify-between px-3 mt-10">
                <div className="text-wrap font-bold tracking-wide basis-3/5">Most booked health checkups</div>
                <div className="text-red-500 font-bold text-sm flex gap-x-1">
                    See all
                    <img className="w-5 h-5" src={arrow} alt="" />
                </div>
            </div>
            <div className="checkup-offers w-screen px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll">
                <HealthCheckupOfferCard imgUrl={sampleImg}
                    title={"Comprehensive Gold Full Body Checkup with Smart Report"}
                    testCount={"Contains 88 tests"}
                    reportTime={"Reports in 18 hrs"}
                    discountPrice={"2249"}
                    actualPrice={"2249"}
                    discount={"50"}/>
                <HealthCheckupOfferCard imgUrl={sampleImg}
                    title={"Comprehensive Gold Full Body Checkup with Smart Report"}
                    testCount={"Contains 88 tests"}
                    reportTime={"Reports in 18 hrs"}
                    discountPrice={"2249"}
                    actualPrice={"2249"}
                    discount={"50"}/>
                <HealthCheckupOfferCard imgUrl={sampleImg}
                    title={"Comprehensive Gold Full Body Checkup with Smart Report"}
                    testCount={"Contains 88 tests"}
                    reportTime={"Reports in 18 hrs"}
                    discountPrice={"2249"}
                    actualPrice={"2249"}
                    discount={"50"}/>
                <HealthCheckupOfferCard imgUrl={sampleImg}
                    title={"Comprehensive Gold Full Body Checkup with Smart Report"}
                    testCount={"Contains 88 tests"}
                    reportTime={"Reports in 18 hrs"}
                    discountPrice={"2249"}
                    actualPrice={"2249"}
                    discount={"50"}/>
                <HealthCheckupOfferCard imgUrl={sampleImg}
                    title={"Comprehensive Gold Full Body Checkup with Smart Report"}
                    testCount={"Contains 88 tests"}
                    reportTime={"Reports in 18 hrs"}
                    discountPrice={"2249"}
                    actualPrice={"2249"}
                    discount={"50"}/>
            </div>
            <div className="px-4 mt-5 w-full mb-3">
                    <img className="w-full" src={banner1} alt="" />
            </div>
        </>
    )
}