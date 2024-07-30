import { ProductCard } from "./productCard"
import { Banner } from "./banner"
import firstAidBanner from "../assets/FirstAid.png"
import product1 from "../assets/firstAidProduct.jpeg"
import product2 from "../assets/firstAidProduct2.png"
import TejasyaBanner from "../assets/TejasyaBanner.png"
export const FirstAidProducts = () =>{
    return(
        <>
            <div className="Banner">
                <Banner bannerImg={firstAidBanner} />
            </div>
            <div className="checkup-offers w-full px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll snap-x snap-mandatory">
            <ProductCard imgUrl={product1}
                    title={"Tata 1mg First Aid Kit"}
                    testCount={"1 Kit"}
                    reportTime={"by Sat, 27 Jul"}
                    discountPrice={"995"}
                    actualPrice={"1200"}
                    discount={"17"}/>
            <ProductCard imgUrl={product2}
                    title={"Tata 1mg First Aid Kit"}
                    testCount={"1 Kit"}
                    reportTime={"by Sat, 27 Jul"}
                    discountPrice={"995"}
                    actualPrice={"1200"}
                    discount={"17"}/>
            <ProductCard imgUrl={product1}
                    title={"Tata 1mg First Aid Kit"}
                    testCount={"1 Kit"}
                    reportTime={"by Sat, 27 Jul"}
                    discountPrice={"995"}
                    actualPrice={"1200"}
                    discount={"17"}/>
            <ProductCard imgUrl={product1}
                    title={"Tata 1mg First Aid Kit"}
                    testCount={"1 Kit"}
                    reportTime={"by Sat, 27 Jul"}
                    discountPrice={"995"}
                    actualPrice={"1200"}
                    discount={"17"}/>
            <ProductCard imgUrl={product1}
                    title={"Tata 1mg First Aid Kit"}
                    testCount={"1 Kit"}
                    reportTime={"by Sat, 27 Jul"}
                    discountPrice={"995"}
                    actualPrice={"1200"}
                    discount={"17"}/>
            </div>
            <div className="px-3">
                <Banner bannerImg={TejasyaBanner} />
            </div>
        </>
    )
}