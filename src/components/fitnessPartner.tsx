import { Banner } from "./banner"
import fitnessBanner from "../assets/fitnessPartner.png"
import HeathySnacking from "../assets/Healthysnacking.png"
import nutriDrinks from "../assets/Nutritionaldrinks.png"
import supplemnts from "../assets/Supplements.png"
import wheyProtein from "../assets/WheyProtein.png"
export const FitnessPartner = () => {
    return(
        <>
            <div className="mt-5">
                <Banner bannerImg={fitnessBanner} />
            </div>
            <div className="monsoon mt-5">
                <div className="container px-3 grid grid-cols-2 gap-x-2 gap-y-3 justify-items-center">
                    <div className="w-full max-w-80 grid gap-y-1 justify-items-center">
                        <img className="w-full" src={HeathySnacking} alt="" />
                        <span className="text-sm font-medium">Healthy Snacking</span>
                    </div>
                    <div className="w-full max-w-80 grid gap-y-1 justify-items-center">
                        <img className="w-full" src={nutriDrinks} alt="" />
                        <span className="text-sm font-medium">Nutritional Drinks</span>
                    </div>
                    <div className="w-full max-w-80 grid gap-y-1 justify-items-center">
                        <img className="w-full" src={supplemnts} alt="" />
                        <span className="text-sm font-medium">Supplements</span>
                    </div>
                    <div className="w-full max-w-80 grid gap-y-1 justify-items-center">
                        <img className="w-full" src={wheyProtein} alt="" />
                        <span className="text-sm font-medium line-clamp-2">Whey Protein</span>
                    </div>
                </div>
            </div>
        </>
    )
}