import men1 from "../assets/menU30.png"
import men2 from "../assets/men40-45.png"
import men3 from "../assets/menA45.png"
import women1 from "../assets/womenU30.png"
import women2 from "../assets/women40-45.png"
import women3 from "../assets/womenA45.png"
export const RoutineHealthCheckup = () =>{
    return(
        <>
            <div className="text-xl px-4 mt-5 font-bold">Routine health checkups for men</div>
            <div className="flex mt-3 gap-x-2 px-4">
                    <div className="flex flex-col">
                        <img src={men1} alt="" />
                        <div className="text-sm font-normal text-gray-900 text-wrap text-center mt-1">Under 30 yrs</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={men2} alt="" />
                        <div className="text-sm font-normal text-gray-900 text-wrap text-center mt-1">30-45 yrs</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={men3} alt="" />
                        <div className="text-sm font-normal text-gray-900 text-wrap text-center mt-1">Above 45 yrs</div>
                    </div>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
            <div className="text-xl px-4 mt-5 font-bold">Routine health checkups for women</div>
            <div className="flex mt-3 gap-x-2 px-4">
                    <div className="flex flex-col">
                        <img src={women1} alt="" />
                        <div className="text-sm font-normal text-gray-900 text-wrap text-center mt-1">Under 30 yrs</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={women2} alt="" />
                        <div className="text-sm font-normal text-gray-900 text-wrap text-center mt-1">30-45 yrs</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={women3} alt="" />
                        <div className="text-sm font-normal text-gray-900 text-wrap text-center mt-1">Above 45 yrs</div>
                    </div>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
        </>
    )
}