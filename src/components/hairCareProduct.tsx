import { ProductCard } from "./productCard"
import product1 from "../assets/hairCareProduct1.png"
import hairBanner from "../assets/Hair_banner.png"
export const HairCareProduct = () => {
    return(
        <>
            <div className="w-full mt-10 flex justify-center">
                <img className="w-full max-w-[30rem]" src={hairBanner} alt="" />
            </div>
            <div className="w-screen px-3 py-1 mt-8 grid grid-flow-col gap-x-3 overflow-x-scroll">
                <ProductCard imgUrl={product1}
                    title={"Bontress Pro + Hair Growth Serum with Anagain, Capixyl, Procapil & Redensyl | Reverse Hair Fall, Reactivate Hair Cells, Strengthen Weak Hair & Grow Thicker Hair | for Men & Women Hair Care"}
                    testCount={"60 ml Serum"}
                    reportTime={"30 mins"}
                    discountPrice={"1200"}
                    actualPrice={"1500"}
                    discount={"20"}/>
                <ProductCard imgUrl={product1}
                    title={"Bontress Pro + Hair Growth Serum with Anagain, Capixyl, Procapil & Redensyl | Reverse Hair Fall, Reactivate Hair Cells, Strengthen Weak Hair & Grow Thicker Hair | for Men & Women Hair Care"}
                    testCount={"60 ml Serum"}
                    reportTime={"30 mins"}
                    discountPrice={"1200"}
                    actualPrice={"1500"}
                    discount={"20"}/>
                <ProductCard imgUrl={product1}
                    title={"Bontress Pro + Hair Growth Serum with Anagain, Capixyl, Procapil & Redensyl | Reverse Hair Fall, Reactivate Hair Cells, Strengthen Weak Hair & Grow Thicker Hair | for Men & Women Hair Care"}
                    testCount={"60 ml Serum"}
                    reportTime={"30 mins"}
                    discountPrice={"1200"}
                    actualPrice={"1500"}
                    discount={"20"}/>
                <ProductCard imgUrl={product1}
                    title={"Bontress Pro + Hair Growth Serum with Anagain, Capixyl, Procapil & Redensyl | Reverse Hair Fall, Reactivate Hair Cells, Strengthen Weak Hair & Grow Thicker Hair | for Men & Women Hair Care"}
                    testCount={"60 ml Serum"}
                    reportTime={"30 mins"}
                    discountPrice={"1200"}
                    actualPrice={"1500"}
                    discount={"20"}/>
                <ProductCard imgUrl={product1}
                    title={"Bontress Pro + Hair Growth Serum with Anagain, Capixyl, Procapil & Redensyl | Reverse Hair Fall, Reactivate Hair Cells, Strengthen Weak Hair & Grow Thicker Hair | for Men & Women Hair Care"}
                    testCount={"60 ml Serum"}
                    reportTime={"30 mins"}
                    discountPrice={"1200"}
                    actualPrice={"1500"}
                    discount={"20"}/>
                <ProductCard imgUrl={product1}
                    title={"Bontress Pro + Hair Growth Serum with Anagain, Capixyl, Procapil & Redensyl | Reverse Hair Fall, Reactivate Hair Cells, Strengthen Weak Hair & Grow Thicker Hair | for Men & Women Hair Care"}
                    testCount={"60 ml Serum"}
                    reportTime={"30 mins"}
                    discountPrice={"1200"}
                    actualPrice={"1500"}
                    discount={"20"}/>
                <ProductCard imgUrl={product1}
                    title={"Bontress Pro + Hair Growth Serum with Anagain, Capixyl, Procapil & Redensyl | Reverse Hair Fall, Reactivate Hair Cells, Strengthen Weak Hair & Grow Thicker Hair | for Men & Women Hair Care"}
                    testCount={"60 ml Serum"}
                    reportTime={"30 mins"}
                    discountPrice={"1200"}
                    actualPrice={"1500"}
                    discount={"20"}/>
            </div>
        </>
    )
}