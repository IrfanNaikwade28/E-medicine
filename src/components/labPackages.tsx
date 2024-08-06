import package1 from "../assets/fullBodycheckup.png"
import package2 from "../assets/fullBodyScan.png"
import package3 from "../assets/Diabetes.png"
import package4 from "../assets/WomensHealth.png"
import package5 from "../assets/ElderlyCare.png"
import package6 from "../assets/MensHealth.png"
import package7 from "../assets/BloodStudies.png"
import package8 from "../assets/FeverInfection.png"
import package9 from "../assets/AllergyProfile.png"
import package10 from "../assets/ThyroidTest.png"
import package11 from "../assets/FitnessPackgae.png"
import package12 from "../assets/disorders.png"
import { Banner } from "./banner"
import banner3 from "../assets/banner3.png"
export const LabPackages = () => {
  return (
    <>
      <div className="px-3 mt-10 text-xl font-bold">Doctor curated lab packages</div>
      <div className="brands px-3 grid grid-cols-3 mt-5 w-full gap-3">
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package1} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Full body checkup</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package2} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Full body with scans</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package3} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Diabetes & Heart health</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package4} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Women's Health</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package5} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Elderly care</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package6} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Men's health</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package7} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Blood studies</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package8} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Fever & Infection</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package9} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Allergy profiles</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package10} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Thyroid tests</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package11} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Fitness packages</span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={package12} alt="" />
          <span className="text-xs text-wrap text-center leading-4 font-medium tracking-wide">Gastrointestinal disorders</span>
        </div>
      </div>
      <div className="btn w-full px-3 mt-5">
        <button className="w-full h-10 rounded-md border border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white">See all</button>
      </div>
      <div className="mt-5 w-full h-2 bg-gray-100"></div>
      <div className="px-4">
        <Banner bannerImg={banner3}/>
      </div>
    </>
  );
};
