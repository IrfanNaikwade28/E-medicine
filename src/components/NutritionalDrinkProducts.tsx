import { Banner } from "./banner"
import { ProductCard } from "./productCard"
import nutriBanner from "../assets/diagnostics_2024-07_1721629230_Nutritional.png"
import product1 from "../assets/6d42a378bab546199b92113cac3456da.png"
import constipation from "../assets/diagnostics_2024-07_1721713930_diagnostics_2024-06_1717481662_Constipation.jpg"
import prodbanner from "../assets/cff4bdbc-7fcd-4022-86be-d05c0cd0ebd1_1675410638.png"
export const NutritionalDrinkProducts = () =>{

    return(
        <>
            <div className="w-full mt-10">
                <Banner bannerImg={nutriBanner} />
            </div>
            <div className="checkup-offers w-screen px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll snap-x snap-mandatory">
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            <ProductCard imgUrl={product1}
                    title={"Protinex High Quality Protein | Nutritional Drink for Immunity & Strength | Zero Added Sugar | Rich Chocolate Powder"}
                    testCount={"400 mg Powder"}
                    reportTime={"by Fri, 26 Jul"}
                    discountPrice={"574"}
                    actualPrice={"675"}
                    discount={"15"}/>
            </div>
            <div className="px-3 mt-10">
                <Banner bannerImg={prodbanner} />
            </div>
            <div className="font-bold text-base px-3 mt-10">Stomach care</div>
            <div className="grid grid-cols-3 gap-2 justify-items-center px-3 mt-5">
                <div className="">
                    <img src={constipation} alt="" />
                </div>
                <div className="">
                    <img src={constipation} alt="" />
                </div>
                <div className="">
                    <img src={constipation} alt="" />
                </div>
                <div className="">
                    <img src={constipation} alt="" />
                </div>
                <div className="">
                    <img src={constipation} alt="" />
                </div>
                <div className="">
                    <img src={constipation} alt="" />
                </div>
            </div>
        </>
    )
}