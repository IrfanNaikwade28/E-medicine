import purpleIcon from "../assets/purpleIcon.png"
import greenIcon from "../assets/greenIcon.png"
import orangeIcon from "../assets/orangeIcon.png"
import redIcon from "../assets/redIcon.png"
import diabetesImg from "../assets/DiabetesImage.png"
import insuranceImg from "../assets/InsuranceImage.png"
import mentalWellnessImg from "../assets/MentalwellnessImage.png"
import weightLossImg from "../assets/Fitbodyimage.png"
import tick from "../assets/tick.png"
import banner1 from "../assets/banner1.png"
export const CustomHealthPlan = () => {
    return(
        <>
            <div className="mt-10">
                <div className="text-base font-light tracking-wider px-3">
                    <span className="font-semibold">Custom plans for your health</span> for a <br /> worry free and healthy life
                </div>
                <div className="custom-plans h-72 w-full grid grid-flow-col gap-x-3 overflow-x-scroll text-white mt-3 px-3">
                    <div className="w-52 h-full flex flex-col pl-4 pt-4 gap-4" style={{backgroundImage:`url(${purpleIcon})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                        <img className="w-3/4" src={diabetesImg} alt="" />
                        <div className="font-extrabold text-xl tracking-wider truncate ">Diabetes</div>
                        <div className="flex text-xs gap-2">
                            <img className="size-4" src={tick} alt="" />
                            Lower your HbA1c levels
                        </div>
                        <div className="flex text-xs gap-2">
                            <img className="size-4" src={tick} alt="" />
                            Reduce medications
                        </div>
                    </div>
                    <div className="w-52 h-full flex flex-col pl-4 pt-4 gap-4" style={{backgroundImage:`url(${greenIcon})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                        <img className="w-3/4" src={insuranceImg} alt="" />
                        <div className="font-extrabold text-xl tracking-wider truncate ">Insurance</div>
                        <div className="flex text-xs gap-2">
                            <img className="size-4" src={tick} alt="" />
                            Digital Solution
                        </div>
                        <div className="flex text-xs gap-2">
                            <img className="size-4" src={tick} alt="" />
                            Cashless Claims
                        </div>
                    </div>
                    <div className="w-52 h-full flex flex-col pl-4 pt-4 gap-4" style={{backgroundImage:`url(${redIcon})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                        <img className="w-3/4" src={mentalWellnessImg} alt="" />
                        <div className="font-extrabold text-xl tracking-wider truncate ">Mental Wellness</div>
                        <div className="flex text-xs gap-2">
                            <img className="size-4" src={tick} alt="" />
                            Transform negative beliefs
                        </div>
                        <div className="flex text-xs gap-2">
                            <img className="size-4" src={tick} alt="" />
                            Manage chronic anxiety
                        </div>
                    </div>
                    <div className="w-52 h-full flex flex-col pl-4 pt-4 gap-4" style={{backgroundImage:`url(${orangeIcon})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                        <img className="w-3/4" src={weightLossImg} alt="" />
                            <div className="font-extrabold text-xl tracking-wider truncate ">Weight Management</div>
                            <div className="flex text-xs gap-2">
                                <img className="size-4" src={tick} alt="" />
                                Reduce your weight
                            </div>
                            <div className="flex text-xs gap-2">
                                <img className="size-4" src={tick} alt="" />
                                improve your lifestyle
                            </div>
                    </div>
                </div>
                <div className="px-3 mt-10 w-full mb-3">
                    <img className="w-full" src={banner1} alt="" />
                </div>
            </div>
        </>
    )
}