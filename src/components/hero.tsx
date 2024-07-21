import { BannerCard } from "./bannerCard";
import purple from "../assets/purple.jpg"
import blue from "../assets/blue.png"
import lab from "../assets/labs.jpg"
import tablet from "../assets/tablet.jpg"
import note from "../assets/note.jpg"
import acidity from "../assets/acidity.png"
import consult from "../assets/consult.jpg"
import { HeroSlider } from "./heroSlider";

export const Hero = () =>{
    const HeroImages = [acidity,consult,acidity,consult];
    
    return(
        <>
            <div className="flex gap-3 px-3 mt-3 justify-center">
                <BannerCard imgUrl={purple} cardImg={tablet} cardText="100% genuine" cardHeadText="Pharmacy"/>
                <BannerCard imgUrl={blue} cardImg={lab} cardText="Smart reports" cardHeadText="Labs"/>
            </div>
            <div className="Banner w-full h-16 px-3 mt-3">
                <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-between px-3">
                    <div className="flex gap-2 w-40">
                        <img className="size-8" src={note} alt="" />
                        <span className="font-semibold">Order with prescription</span>
                    </div>
                    <button className="bg-black text-white text-xs w-28 h-8 rounded-2xl">Order Now</button>
                </div>
            </div>
            <div className="px-3">
            <HeroSlider HeroImages={HeroImages}/>
            </div>
        </>
    )
}