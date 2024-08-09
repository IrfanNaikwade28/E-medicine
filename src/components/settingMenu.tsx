import arrowRight from "../assets/icons/arrow_right.svg"
export const SettingMenu = () =>{
    return(
        <>
             <div className="flex flex-col gap-y-5 w-full p-4">
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium text-base text-nowrap">My Orders</div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium text-base text-nowrap">Need help?</div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium text-base text-nowrap">Privacy policy</div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium text-base text-nowrap">Return policy</div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium text-base text-nowrap">Terms and conditions</div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium text-base text-nowrap">Editorial policy</div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
        </>
    )
}