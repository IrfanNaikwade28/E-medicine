import { ProductCard } from "./productCard"
import { Banner } from "./banner"
import { HealthyProductCard } from "./healthyProductCard"
import arrow from "../assets/icons/arrow.svg"
import banner from "../assets/b48b15cd-640b-4d0a-942a-652ca061631b_1721371091.png"
import ceraVe from "../assets/ceraVe.png"
export const TrendingProducts = () =>{
    return(
        <>
           <div className="flex justify-between px-3 mt-10">
                <div className="text-wrap font-bold tracking-wide basis-3/5">Most booked health checkups</div>
                <div className="text-red-500 font-bold text-sm flex gap-x-1">
                    Trending now
                    <img className="w-5 h-5" src={arrow} alt="" />
                </div>
            </div>
            <div className="checkup-offers w-screen px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll snap-x snap-mandatory">
            <ProductCard imgUrl={ceraVe}
                    title={"CeraVe Foaming Cleanser for Normal & Oily Skin"}
                    testCount={"80 ml Cleanser"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"500"}
                    actualPrice={"1000"}
                    discount={"50"}/>
            <ProductCard imgUrl={ceraVe}
                    title={"CeraVe Foaming Cleanser for Normal & Oily Skin"}
                    testCount={"80 ml Cleanser"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"500"}
                    actualPrice={"1000"}
                    discount={"50"}/>
            <ProductCard imgUrl={ceraVe}
                    title={"CeraVe Foaming Cleanser for Normal & Oily Skin"}
                    testCount={"80 ml Cleanser"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"500"}
                    actualPrice={"1000"}
                    discount={"50"}/>
            <ProductCard imgUrl={ceraVe}
                    title={"CeraVe Foaming Cleanser for Normal & Oily Skin"}
                    testCount={"80 ml Cleanser"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"500"}
                    actualPrice={"1000"}
                    discount={"50"}/>
            <ProductCard imgUrl={ceraVe}
                    title={"CeraVe Foaming Cleanser for Normal & Oily Skin"}
                    testCount={"80 ml Cleanser"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"500"}
                    actualPrice={"1000"}
                    discount={"50"}/>
            <ProductCard imgUrl={ceraVe}
                    title={"CeraVe Foaming Cleanser for Normal & Oily Skin"}
                    testCount={"80 ml Cleanser"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"500"}
                    actualPrice={"1000"}
                    discount={"50"}/>
            </div>
            <div className="px-3">
                <Banner bannerImg={banner} />
            </div>
            <HealthyProductCard/>
        </>
    )
}