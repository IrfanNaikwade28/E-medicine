import HomeIcon from "../assets/icons/home.svg";
import HealthIcon from "../assets/icons/doctor.svg";
import CareIcon from "../assets/icons/message.svg";
import LabIcon from "../assets/icons/lab.svg";
import ProfileIcon from "../assets/icons/profile.svg";
export const StickyNav = () => {
  return (
    <>
      <div className="sticky bottom-0 bg-white w-full h-14 flex items-center justify-center">
        <div className="Nav-items flex justify-center items-center gap-5">
          <button className="flex flex-col justify-center items-center h-full gap-1">
            <img src={HomeIcon} alt="" />
            <span className="text-xs text-gray-400">Home</span>
          </button>
          <button className="flex flex-col justify-center items-center h-full gap-1">
            <img src={HealthIcon} alt="" />
            <span className="text-xs text-gray-400">Health Plan</span>
          </button>
          <button className="flex flex-col justify-center items-center h-full gap-1">
            <img src={CareIcon} alt="" />
            <span className="text-xs text-gray-400">Care Plan</span>
          </button>
          <button className="flex flex-col justify-center items-center h-full gap-1">
            <img src={LabIcon} alt="" />
            <span className="text-xs text-gray-400">Lab Test</span>
          </button>
          <button className="flex flex-col justify-center items-center h-full gap-1">
            <img src={ProfileIcon} alt="" />
            <span className="text-xs text-gray-400">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
};
