import sampleImg from "../assets/products/mobyoga.jpg"
import { HealthCheckupOfferCard } from "./healthCheckupOfferCard"
import banner1 from "../assets/banner2.jpg"
import consult from "../assets/Consult.png"
import arrow from "../assets/icons/arrow.svg"
import monsoon from "../assets/monsoon_essential.png"
import coldCough from "../assets/Hydration_drinks.png"
import SkinInfection from "../assets/SKin_Infection.png"
import thermometer from "../assets/Thermometers.png"
import vaporizor from "../assets/Vaporizers.png"
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
                    <img className="w-full rounded-lg" src={banner1} alt="" />
            </div>
            <div className="monsoon mt-5">
                <div className="banner w-full max-w-80">
                    <img className="w-full" src={monsoon} alt="" />
                </div>
                <div className="container px-3 grid grid-cols-2 gap-2 justify-items-center">
                    <div className="w-full max-w-40 grid gap-y-1 justify-items-center">
                        <img src={coldCough} alt="" />
                        <span className="text-sm font-medium">Cold & Cough</span>
                    </div>
                    <div className="w-full max-w-40 grid gap-y-1 justify-items-center">
                        <img src={SkinInfection} alt="" />
                        <span className="text-sm font-medium">Skin Infection</span>
                    </div>
                    <div className="w-full max-w-40 grid gap-y-1 justify-items-center">
                        <img src={thermometer} alt="" />
                        <span className="text-sm font-medium">Thermometer</span>
                    </div>
                    <div className="w-full max-w-40 grid gap-y-1 justify-items-center">
                        <img src={vaporizor} alt="" />
                        <span className="text-sm font-medium line-clamp-2">Vaporizers</span>
                    </div>
                </div>
                <div className="px-4 mt-5 w-full mb-3">
                    <img className="w-full rounded-lg" src={consult} alt="" />
                </div>
            </div>
        </>
    )
}