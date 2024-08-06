import arrow from "../assets/icons/arrow.svg";
import { FeverScreeningPackageCard } from "./FeverScreeningPackageCard";
import bodyChcekupImg from "../assets/fullBodycheckupwithScan.png";
import { HeroSlider } from "./heroSlider";
import img1 from "../assets/diagnosticService.png"
import img2 from "../assets/bharoseKaBadge.png"
import img3 from "../assets/TrustWhatYouSee.png"
import img4 from "../assets/bharoseKaBadge.png"
export const BookedHealthCheckup = () => {
    const HeroImages = [img1,img2,img3,img4]
  return (
    <>
      <div className="flex justify-between px-3 mt-10">
        <div className="text-wrap font-bold text-lg tracking-wide leading-5">
          Most booked health checkups
        </div>
        <div className="text-red-500 font-bold text-sm flex gap-x-1 text-nowrap">
          See all
          <img className="w-5 h-5" src={arrow} alt="" />
        </div>
      </div>
      <div className="checkup-offers w-full px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll snap-x snap-mandatory">
        <FeverScreeningPackageCard
          imgUrl={bodyChcekupImg}
          title={"Comprehensive Gold Full Body Checkup with Smart Report"}
          testCount={"Contains 88 tests"}
          reportTime={"Get reports within 18 hrs"}
          discountPrice={"1999"}
          actualPrice={"4498"}
          discount={"56%"}
        />
        <FeverScreeningPackageCard
          imgUrl={bodyChcekupImg}
          title={"Comprehensive Gold Full Body Checkup with Smart Report"}
          testCount={"Contains 88 tests"}
          reportTime={"Get reports within 18 hrs"}
          discountPrice={"1999"}
          actualPrice={"4498"}
          discount={"56%"}
        />
        <FeverScreeningPackageCard
          imgUrl={bodyChcekupImg}
          title={"Comprehensive Gold Full Body Checkup with Smart Report"}
          testCount={"Contains 88 tests"}
          reportTime={"Get reports within 18 hrs"}
          discountPrice={"1999"}
          actualPrice={"4498"}
          discount={"56%"}
        />
        <FeverScreeningPackageCard
          imgUrl={bodyChcekupImg}
          title={"Comprehensive Gold Full Body Checkup with Smart Report"}
          testCount={"Contains 88 tests"}
          reportTime={"Get reports within 18 hrs"}
          discountPrice={"1999"}
          actualPrice={"4498"}
          discount={"56%"}
        />
        <FeverScreeningPackageCard
          imgUrl={bodyChcekupImg}
          title={"Comprehensive Gold Full Body Checkup with Smart Report"}
          testCount={"Contains 88 tests"}
          reportTime={"Get reports within 18 hrs"}
          discountPrice={"1999"}
          actualPrice={"4498"}
          discount={"56%"}
        />
      </div>
      <div className="mt-5 w-full h-2 bg-gray-100"></div>
      <div className="px-4 mt-14">
        <HeroSlider HeroImages={HeroImages} />
      </div>
    </>
  );
};
