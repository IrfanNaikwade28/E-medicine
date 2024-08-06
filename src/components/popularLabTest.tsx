import lipidImg from "../assets/lipidProfile.png"
import arrow from "../assets/icons/arrow.svg"
import { PopularLabTestCard } from "./popularLabTestCard"
import { Banner } from "./banner"
import banner4 from "../assets/banner4.png"
export const PopularLabTest = () =>{
    return(
        <>
            <div className="flex justify-between px-3 mt-10">
                <div className="text-wrap font-bold text-xl basis-3/5 tracking-wider leading-6">Popular lab test & profiles</div>
                <div className="text-red-500 font-bold text-sm flex gap-x-1 text-nowrap">
                    See all
                    <img className="w-5 h-5" src={arrow} alt="" />
                </div>
            </div>
            <div className="checkup-offers w-full h-52 px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll snap-x snap-mandatory">
                <PopularLabTestCard cardImg={lipidImg} mainText="Lipid Profile" subText="Contain 8 tests" price="319"/>
                <PopularLabTestCard cardImg={lipidImg} mainText="Lipid Profile" subText="Contain 8 tests" price="319"/>
                <PopularLabTestCard cardImg={lipidImg} mainText="Lipid Profile" subText="Contain 8 tests" price="319"/>
                <PopularLabTestCard cardImg={lipidImg} mainText="Lipid Profile" subText="Contain 8 tests" price="319"/>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
            <div className="px-4">
                <Banner bannerImg={banner4}/>
            </div>
        </>
    )
}