import { Banner } from "./banner"
import banner5 from "../assets/banner5.png"
import wellnessCheckupImg from "../assets/Wellness+checkups2.png"
import pcos from "../assets/PCOS2.png"
import preg from "../assets/Pregnancy2.png"
export const WomenCareHealthPackages = () => {
    return(
        <>
        <div className="flex flex-col mt-10 px-4">
                <div className="text-xl font-bold">Health packages for women care</div>
                <div className="flex mt-3 gap-x-2">
                    <div className="flex flex-col">
                        <img src={wellnessCheckupImg} alt="" />
                        <div className="text-sm font-normal text-gray-800 text-wrap text-center mt-1">Wellness checkups</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={pcos} alt="" />
                        <div className="text-sm font-normal text-gray-800 text-wrap text-center mt-1">PCOS</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={preg} alt="" />
                        <div className="text-sm font-normal text-gray-800 text-wrap text-center mt-1">Pregnancy</div>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
            <div className="px-4">
                <Banner bannerImg={banner5}/>
            </div>
        </>
    )
}