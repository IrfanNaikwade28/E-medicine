import { useEffect, useState } from "preact/hooks";
import { BannerCard } from "./bannerCard";
import purple from "../assets/purple.jpg"
import blue from "../assets/blue.png"
import lab from "../assets/labs.jpg"
import tablet from "../assets/tablet.jpg"
import note from "../assets/note.jpg"
import acidity from "../assets/acidity.png"
import consult from "../assets/consult.jpg"

export const Hero = () =>{
    const HeroImages = [acidity,consult,acidity,consult];
    const [imgIndex, setImgIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setImgIndex((prevIndex) =>
            prevIndex === HeroImages.length - 1 ? 0 : prevIndex + 1
          );
        }, 1500);
        return () => {
          clearInterval(interval);
    };
    }, []);
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
            <div className="HeroSlider px-3 mt-3">
                <div className="slideContainer w-full h-44 flex flex-col items-center relative">
                    <div className="flex w-full relative">
                    {HeroImages.map((image,index) =>(
                        <img key={index} src={image} className={`min-w-full ${index === imgIndex ? "block" : "hidden"}`} alt="" />
                    ))
                    }
                    </div>
                    <div className="flex gap-3 absolute bottom-2">
                        <div className={`rounded-full w-2 h-2 cursor-pointer ${imgIndex==0?"bg-orange-600":"bg-gray-300 "}`}></div>
                        <div className={`rounded-full w-2 h-2 cursor-pointer ${imgIndex==1?"bg-orange-600":"bg-gray-300 "}`}></div>
                        <div className={`rounded-full w-2 h-2 cursor-pointer ${imgIndex==2?"bg-orange-600":"bg-gray-300 "}`}></div>
                        <div className={`rounded-full w-2 h-2 cursor-pointer ${imgIndex==3?"bg-orange-600":"bg-gray-300 "}`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}