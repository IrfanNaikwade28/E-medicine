import PlanCardHeader from "../assets/icons/plan-card-header-design.svg"
import PlanCardPattern from "../assets/icons/plan-card-pattern.svg"
import carePlanTag from "../assets/12644c91-39a3-4d25-b673-96a2e8fa91b4.svg";
import percentage from "../assets/icons/percentage.svg"

export const CarePlanCard = () =>{
    return (
        <>
            <div className="bg-[#C6F1F3] w-72 h-full rounded-md snap-center">
                <div className="header w-full h-32 rounded-t-md flex gap-x-2" style={{backgroundImage:`url(${PlanCardHeader})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
                    <div className="text flex flex-col pl-5 pt-5">
                        <div className="w-16">
                            <img className="w-full h-full" src={carePlanTag} alt="" />
                        </div>
                        <div className="price flex gap-x-1 items-end mt-3">
                            <div className="line-through text-base text-white text-opacity-50">₹549</div>
                            <div className="text-white font-bold text-base">₹165</div>
                            <div className="text-white text-sm">for 3 months</div>
                        </div>
                        <div className="bg-white bg-opacity-50 text-[#005C61] text-xs w-fit px-1 mt-1">Save 70%</div>
                    </div>
                    <div className="w-fit h-24">
                        <img className="object-contain w-fit h-full" src={PlanCardPattern} alt="" />
                    </div>
                </div>
                <div className="plan-offers mt-2 flex flex-col gap-y-3 px-3 py-3">
                    <div className="flex items-center gap-x-2">
                        <div className="bg-white w-6 rounded-full">
                            <img className="w-full" src={percentage} alt="" />
                        </div>
                        <div className="text-base text-nowrap font-medium">Extra 4% medicine discount</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="bg-white w-6 rounded-full">
                            <img className="w-full" src={percentage} alt="" />
                        </div>
                        <div className="text-base text-nowrap font-medium">Extra 1% NeuCoins</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="bg-white w-6 rounded-full">
                            <img className="w-full" src={percentage} alt="" />
                        </div>
                        <div className="text-base text-nowrap font-medium">Exclusive Offers</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="bg-white w-6 rounded-full">
                            <img className="w-full" src={percentage} alt="" />
                        </div>
                        <div className="text-base text-nowrap font-medium">Free Shipping</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="bg-white w-6 rounded-full">
                            <img className="w-full" src={percentage} alt="" />
                        </div>
                        <div className="text-base text-nowrap font-medium">Rapid delivery</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="bg-white w-6 rounded-full">
                            <img className="w-full" src={percentage} alt="" />
                        </div>
                        <div className="text-base text-nowrap font-medium">Early sale access</div>
                    </div>
                </div>
                <div className="w-full px-3 py-5 flex justify-center">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-[#009DA5] font-bold text-base ps-3">Know more</div>
                        <button className="bg-[#009DA5] text-white font-bold text-base w-2/4 py-2 rounded-[5px]">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}