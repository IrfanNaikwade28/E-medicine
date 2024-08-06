import radiologyImg1 from "../assets/CTScan.jpg"
import radiologyImg2 from "../assets/ecg.jpg"
import radiologyImg3 from "../assets/x-ray.jpg"
import radiologyImg4 from "../assets/ultrasound.jpg"
import radiologyImg5 from "../assets/mri.jpg"
import radiologyImg6 from "../assets/echoTest.jpg"
export const RadiologyCategories = () => {
  return (
    <>
      <div className="px-3 mt-10 text-xl font-bold">
        Popular radiology categories
      </div>
      <div className="brands px-3 grid grid-cols-3 mt-5 w-full gap-3">
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={radiologyImg1} alt="" />
          <span className="text-sm text-gray-800 text-wrap text-center leading-4 font-normal tracking-wide">
            CT Scan
          </span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={radiologyImg2} alt="" />
          <span className="text-sm text-gray-800 text-wrap text-center leading-4 font-normal tracking-wide">
            ECG Test
          </span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={radiologyImg3} alt="" />
          <span className="text-sm text-gray-800 text-wrap text-center leading-4 font-normal tracking-wide">
            X-Ray
          </span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={radiologyImg4} alt="" />
          <span className="text-sm text-gray-800 text-wrap text-center leading-4 font-normal tracking-wide">
            Ultrasound
          </span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={radiologyImg5} alt="" />
          <span className="text-sm text-gray-800 text-wrap text-center leading-4 font-normal tracking-wide">
            MRI
          </span>
        </div>
        <div className="flex flex-col justify-start brand w-full gap-y-1">
          <img className="w-full" src={radiologyImg6} alt="" />
          <span className="text-sm text-gray-800 text-wrap text-center leading-4 font-normal tracking-wide">
            Echo Test
          </span>
        </div>
      </div>
      <div className="mt-5 w-full h-2 bg-gray-100"></div>
    </>
  );
};
