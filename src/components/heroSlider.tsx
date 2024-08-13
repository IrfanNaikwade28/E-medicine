import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

type SliderImg = {
    HeroImages: string[];
}


export const HeroSlider:FunctionComponent<SliderImg> = ({HeroImages}) =>{
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
    }, [HeroImages.length]);
    return(
        <>
             <div className="HeroSlider my-3">
                <div className="slideContainer w-full h-auto flex flex-col gap-y-3 items-center">
                    <div className="flex w-full relative">
                    {HeroImages.map((image,index) =>(
                        <img key={index} src={image} className={`w-full rounded-md ${index === imgIndex ? "block" : "hidden"}`} alt="" />
                    ))}
                    </div>
                    <div className="flex gap-3">
                        {
                            HeroImages.map((_,index)=>(
                                <div key={index} className={`rounded-full w-2 h-2 cursor-pointer ${imgIndex==index?"bg-orange-600":"bg-gray-300 "}`}></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}