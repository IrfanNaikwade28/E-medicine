import { ProductCard } from "./productCard"
import prod1 from "../assets/products/mobpop.jpg"
import prod2 from "../assets/products/mobwhey.jpg"
import prod3 from "../assets/products/mobinsu.jpg"
import prod4 from "../assets/products/mobyoga.jpg"
export const PopularCategories = () => {
    return (
        <>
            <div className="p-3 mt-3 flex flex-col justify-center w-full">
                <h1 className="text-xl font-semibold">Popular Categories</h1>
                <div className="products w-full h-auto flex flex-wrap gap-4 mt-3">
                    <ProductCard prodImg={prod1} prodTitle={"Vitamins and Nutrition"}/>
                    <ProductCard prodImg={prod2} prodTitle={"Fitness Supplements"}/>
                    <ProductCard prodImg={prod3} prodTitle={"Nutritional Drinks"}/>
                    <ProductCard prodImg={prod4} prodTitle={"Healthy snacks"}/>
                    <ProductCard prodImg={prod1} prodTitle={"Vitamins and Nutrition"}/>
                    <ProductCard prodImg={prod2} prodTitle={"Fitness Supplements"}/>
                    <ProductCard prodImg={prod3} prodTitle={"Nutritional Drinks"}/>
                    <ProductCard prodImg={prod4} prodTitle={"Healthy snacks"}/>
                    <ProductCard prodImg={prod1} prodTitle={"Vitamins and Nutrition"}/>
                    <ProductCard prodImg={prod2} prodTitle={"Fitness Supplements"}/>
                    <ProductCard prodImg={prod3} prodTitle={"Nutritional Drinks"}/>
                    <ProductCard prodImg={prod4} prodTitle={"Healthy snacks"}/>
                    <ProductCard prodImg={prod1} prodTitle={"Vitamins and Nutrition"}/>
                    <ProductCard prodImg={prod2} prodTitle={"Fitness Supplements"}/>
                    <ProductCard prodImg={prod3} prodTitle={"Nutritional Drinks"}/>
                    <ProductCard prodImg={prod4} prodTitle={"Healthy snacks"}/>
                </div>
            </div>
        </>
    )
}