import labTestImg from "../assets/labTestIcon.png"
import home from "../assets/home.png"
import delivery from "../assets/delivery.png"
import report from "../assets/report.png"
export const LabTestWork = () =>{
    return(
        <>
            <div className="px-4 text-xl font-bold mt-5">How does home sample collection for lab tests works</div>
            <div className="flex flex-col px-4 mt-5 gap-y-5">
                <div className="flex gap-x-3 w-full">
                    <div className="image w-1/6">
                        <img src={labTestImg} alt="" />
                    </div>
                    <div className="flex flex-col w-4/5">
                        <div className="font-bold text-base">Complete Booking</div>
                        <div className="text-base font-normal text-gray-900 tracking-wide">Includes selection of all required tests, lab & time slot</div>
                    </div>
                </div>
                <div className="flex gap-x-3 w-full">
                    <div className="image w-1/6">
                        <img src={home} alt="" />
                    </div>
                    <div className="flex flex-col w-4/5">
                        <div className="font-bold text-base">Safe home sample collection</div>
                        <div className="text-base font-normal text-gray-900 tracking-wide">
                        Highly trained phlebotomist adhering to all COVID protocols collects the sample at your home
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-3 w-full">
                    <div className="image w-1/6">
                        <img src={delivery} alt="" />
                    </div>
                    <div className="flex flex-col w-4/5">
                        <div className="font-bold text-base">Sample delivery to labs for testing</div>
                        <div className="text-base font-normal text-gray-900 tracking-wide">
                        Phlebotomist delivers your sample to lab with standard safety guidelines
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-3 w-full">
                    <div className="image w-1/6">
                        <img src={report} alt="" />
                    </div>
                    <div className="flex flex-col w-4/5">
                        <div className="font-bold text-base">Online report delivery and free doctor consultation</div>
                        <div className="text-base font-normal text-gray-900 tracking-wide">
                        Reports are delivered on the registered email ID and a free doctor consultation can be availed to understand the health report better
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
        </>
    )
}