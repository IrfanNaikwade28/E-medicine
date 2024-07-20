import healthMenu1 from "../assets/healthMenu1.png"
import healthMenu2 from "../assets/healthMenu2.png"
import healthMenu3 from "../assets/healthMenu3.png"
import healthMenu4 from "../assets/healthMenu4.png"
import healthMenu5 from "../assets/healthMenu5.png"
import a_women from "../assets/adult_woman.png"
import s_women from "../assets/senior_women.png"
import fitness from "../assets/fitness.png"
import men1 from "../assets/diagnostics_2024-06_1719294608_Full+body+packages.png"
import men2 from "../assets/diagnostics_2024-06_1719294617_Senior+citizen.png"
import men3 from "../assets/diagnostics_2024-06_1719294633_Physicially+active.png"
import { useState } from "preact/hooks"
export const HealthPackages = () =>{

    const [healthPack,setHealthPack] = useState("For Women")

    return (
        <>
            <div className="px-4 my-5">
                <div className="font-bold leading-6">Lab tests and packages for your <br/> need</div>
                <div className="healthMenu border-b border-black border-opacity-20 mt-3">
                    <div className="flex items-start overflow-x-scroll gap-x-5">
                        <div onClick={() => setHealthPack("For Women")} className={`flex flex-col w-14 justify-center items-center ${healthPack == "For Women" ? "border-b-4 border-custom-blue" : ""}`}>
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu1} alt="" />
                            </div>
                            <div className={`menu-text text-center text-xs leading-4 py-2 tracking-widest ${healthPack == "For Women" ? "text-custom-blue font-bold" : ""}`}>
                                For Women
                            </div>
                        </div>
                        <div onClick={() => setHealthPack("For Men")} className={`flex flex-col w-14 justify-center items-center ${healthPack == "For Men" ? "border-b-4 border-custom-blue" : ""}`}>
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu2} alt="" />
                            </div>
                            <div className={`menu-text text-center text-xs leading-4 py-4 tracking-widest ${healthPack == "For Men" ? "text-custom-blue font-bold" : ""}`}>
                                For Men
                            </div>
                        </div>
                        <div onClick={() => setHealthPack("Health Concerns")} className={`flex flex-col w-14 justify-center items-center ${healthPack == "Health Concerns" ? "border-b-4 border-custom-blue" : ""}`}>
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu3} alt="" />
                            </div>
                            <div className={`menu-text text-center text-xs leading-4 py-2 tracking-widest ${healthPack == "Health Concerns" ? "text-custom-blue font-bold" : ""}`}>
                                Health Concerns
                            </div>
                        </div>
                        <div onClick={() => setHealthPack("Test by Organ")} className={`flex flex-col w-14 justify-center items-center ${healthPack == "Test by Organ" ? "border-b-4 border-custom-blue" : ""}`}>
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu4} alt="" />
                            </div>
                            <div className={`menu-text text-center text-xs leading-4 py-2 tracking-widest ${healthPack == "Test by Organ" ? "text-custom-blue font-bold" : ""}`}>
                                Test by Organ
                            </div>
                        </div>
                        <div onClick={() => setHealthPack("Special Test")} className={`flex flex-col w-14 justify-center items-center ${healthPack == "Special Test" ? "border-b-4 border-custom-blue" : ""}`}>
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu5} alt="" />
                            </div>
                            <div className={`menu-text text-center text-xs leading-4 py-2 tracking-widest ${healthPack == "Special Test" ? "text-custom-blue font-bold" : ""}`}>
                                Special Test
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-options mt-4 w-full grid grid-flow-col justify-items-center gap-5 overflow-x-scroll snap-x snap-mandatory">
                    <div className="snap-center women flex gap-x-2 w-72 h-full">
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={a_women} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Adult Women</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={s_women} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Senior Women</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={fitness} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Fitness</div>
                        </div>
                    </div>
                    <div className="snap-center men flex gap-x-2 w-72 h-full">
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men1} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Adult Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men2} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Senior Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men3} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Fitness</div>
                        </div>
                    </div>
                    <div className="snap-center men flex gap-x-2 w-72 h-full">
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men1} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Adult Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men2} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Senior Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men3} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Fitness</div>
                        </div>
                    </div>
                    <div className="snap-center men flex gap-x-2 w-72 h-full">
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men1} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Adult Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men2} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Senior Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men3} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Fitness</div>
                        </div>
                    </div>
                    <div className="snap-center men flex gap-x-2 w-72 h-full">
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men1} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Adult Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men2} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Senior Men</div>
                        </div>
                        <div className="flex flex-col gap-y-1 w-1/3">
                            <div className="w-full">
                                <img className="w-full h-full" src={men3} alt="" />
                            </div>
                            <div className="text w-full text-center font-light tracking-wider leading-5">Fitness</div>
                        </div>
                    </div>
                </div>
                <button className="bg-[#ff5443] text-white font-semibold text-sm w-full h-10 rounded-md mt-5">Explore in {healthPack}</button>
            </div>
        </>
    )
}