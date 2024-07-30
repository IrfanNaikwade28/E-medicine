import { RangeComponent } from "./rangeComponent";
import carePlanTag from "../assets/12644c91-39a3-4d25-b673-96a2e8fa91b4.svg";
import carePlanIcon from "../assets/c865800e-6357-4367-bd57-44cd3daf0bf1.svg";
import perc from "../assets/icons/percentage.svg";
import freeship from "../assets/icons/free_shipping.svg";
import delivery from "../assets/icons/rapid_delivery.svg";
import consultation from "../assets/icons/consultation.svg";
import mask from "../assets/icons/mask.svg";
import calculator from "../assets/icons/calculator.svg";
export const CarePlan = () => {
  return (
    <>
      <div className="bg-[#FEF7EF] w-full flex flex-col items-center">
        <div className="care-plan-tag mt-5">
          <img src={carePlanTag} alt="" />
        </div>
        <div className="hero-text text-3xl font-bold leading-10 text-center px-5 mt-3">
          Reduces your medical costs by half
        </div>
        <div className="care-plan-tag mt-10">
          <img src={carePlanIcon} alt="" />
        </div>
        <div className="btn w-full px-5 mt-3">
          <button className="bg-[#ff5443] text-white font-semibold text-sm w-full h-10 rounded-md hover:bg-[#f05244]">
            Explore plans
          </button>
        </div>
        <div className="bg-white shadow-shadow-top w-full rounded-t-2xl mt-5 flex flex-col gap-y-4 py-10">
          <div className="text-xl font-bold text-center">
            Benefits for great savings
          </div>
          <div className="flex justify-center">
            <div className="bg-[#FFD488] w-fit py-1 px-3 rounded-md text-xl font-bold">
              worth ₹2400
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 px-5 justify-items-center mt-5">
            <div className="flex flex-col items-center">
              <img src={perc} alt="" className="w-10" />
              <span className="leading-4 text-sm font-medium text-wrap text-center">
                Exclusive discounts
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img src={freeship} alt="" className="w-10" />
              <span className="leading-4 text-sm font-medium text-wrap text-center">
                Free shipping
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img src={delivery} alt="" className="w-10" />
              <span className="leading-4 text-sm font-medium text-wrap text-center">
                Rapid delivery
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img src={consultation} alt="" className="w-10" />
              <span className="leading-4 text-sm font-medium text-wrap text-center">
                Free E-consultation
              </span>
            </div>
          </div>
        </div>
        <div className="saving-card w-full bg-white px-4 flex justify-center">
          <div className="card relative flex flex-col w-full max-w-[400px] h-80 bg-[#FBEEDD] rounded-2xl">
            <div className="w-full relative">
              <img className="w-full h-fit rounded-t-2xl" src={mask} alt="" />
              <div className="w-full h-16 flex justify-between absolute bottom-0">
                <div className="text-lg font-bold text-nowrap absolute top-0 left-5 z-10">
                  Calculate your savings
                </div>
                <img
                  className="h-16 absolute bottom-0 right-3"
                  src={calculator}
                  alt=""
                />
              </div>
            </div>
            <div className="text-xl font-semibold text-nowrap text-center mt-5">
              You can save ₹1200/month
            </div>
            <div className="text-sm text-gray-500 text-wrap text-center mt-5 px-2">
              If your monthly expense on healthcare is up to
            </div>
            <RangeComponent/>
            <div className="mt-5 absolute bottom-3 w-full">
              <div className="underline font-medium text-sm text-center">See how this is calculated?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
