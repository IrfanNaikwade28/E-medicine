import arrowRight from "../assets/icons/arrow_right.svg"
import orderIcon from "../assets/ordersIcon.png"
import testIcon from "../assets/labTest.png"
import consult from "../assets/consultation.png"
import healthRecord from "../assets/healthRecord.png"
import RatingIcon from "../assets/ratingIcon.png"
import paymentIcon from "../assets/paymentIcon.png"
import NeucoinsIcon from "../assets/NueCoinsIcon.png"
export const ProfileMenu = () =>{
    return(
        <>
            <div className="flex flex-col gap-y-5 w-full p-4">
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-3 items-center">
                        <img className="size-8" src={orderIcon} alt="" />
                        <div className="font-medium text-base text-nowrap">My Orders</div>
                    </div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-3 items-center">
                        <img className="size-8" src={testIcon} alt="" />
                        <div className="font-medium text-base text-nowrap">My lab tests</div>
                    </div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-3 items-center">
                        <img className="size-8" src={consult} alt="" />
                        <div className="font-medium text-base text-nowrap">My consultations</div>
                    </div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-3 items-center">
                        <img className="size-8" src={healthRecord} alt="" />
                        <div className="font-medium text-base text-nowrap">Health Records</div>
                    </div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-3 items-center">
                        <img className="size-8" src={RatingIcon} alt="" />
                        <div className="font-medium text-base text-nowrap">Rate your recent purchases</div>
                    </div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-3 items-center">
                        <img className="size-8" src={paymentIcon} alt="" />
                        <div className="font-medium text-base text-nowrap">Manage payment methods</div>
                    </div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-3 items-center">
                        <img className="size-8" src={NeucoinsIcon} alt="" />
                        <div className="font-medium text-base text-nowrap">NueCoins</div>
                    </div>
                    <div className="flex size-5 items-center">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full h-2 bg-gray-100"></div>
        </>
    )
}