import { Banner } from "./banner"
import bannerImg from "../assets/a0bffa68-4771-4afd-86d9-cdd52ee3c9c0_1715066933.png"
import brand1 from "../assets/brands/Morepen.png"
import brand2 from "../assets/brands/diagnostics_2024-06_1719206972_tejasya.png"
import brand3 from "../assets/brands/diagnostics_2024-07_1721712255_Ensure1.png"
import brand4 from "../assets/brands/diagnostics_2024-07_1721712289_Healthkart.png"
import brand5 from "../assets/brands/diagnostics_2024-07_1721712296_sugarfree.png"
import brand6 from "../assets/brands/diagnostics_2024-07_1721712302_Dabur.png"
import brand7 from "../assets/brands/diagnostics_2024-07_1721712310_AVP.png"
import brand8 from "../assets/brands/diagnostics_2024-07_1721712382_Goqii.png"
import brand9 from "../assets/brands/diagnostics_2024-06_1719206984_Tata+1mg.png"
export const FeatureBrand = () => {
  return (
    <>
      <div className="px-3 mt-10">Featured brands</div>
      <div className="brands px-3 grid grid-cols-3 mt-5 w-full gap-3">
        <div className="brand w-full rounded-full">
          <img className="w-full" src={brand1} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand2} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand3} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand4} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand5} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand6} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand7} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand8} alt="" />
        </div>
        <div className="brand w-full rounded-full gap-2">
          <img className="w-full" src={brand9} alt="" />
        </div>
      </div>
      <div className="btn w-full px-3 mt-5">
        <button className="w-full h-10 rounded-md border border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white">See all</button>
      </div>
      <div className="px-3">
        <Banner bannerImg={bannerImg} />
      </div>
    </>
  );
};
