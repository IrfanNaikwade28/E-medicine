import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/icons/home.svg";
import HealthIcon from "../assets/icons/doctor.svg";
import CareIcon from "../assets/Care_plan_gif.gif";
import LabIcon from "../assets/icons/lab.svg";
import ProfileIcon from "../assets/icons/profile.svg";

export const StickyNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path: string) => (currentPath === path && path !== "/Care" ? "nav-active" : "");

  return (
    <div className="fixed z-20 border-t border-opacity-50 bottom-0 bg-white w-full h-20 flex items-center justify-center">
      <div className="Nav-items w-full h-3/4 flex justify-center items-center gap-x-1 px-1 sm:gap-x-3 md:gap-x-5">
        <button className={`h-full w-full ${getActiveClass("/")}`}>
          <Link className="flex flex-col justify-center items-center gap-1" to="/">
            <img src={HomeIcon} alt="Home" />
            <span className="text-xs text-gray-400">Home</span>
          </Link>
        </button>
        <button className={`h-full w-full ${getActiveClass("/Health")}`}>
          <Link className="flex flex-col justify-center items-center gap-1" to="/Health">
            <img src={HealthIcon} alt="Health" />
            <span className="text-xs text-gray-400">Health</span>
          </Link>
        </button>
        <button className={`h-full w-full ${getActiveClass("/Care")}`}>
          <Link className="flex flex-col justify-center items-center gap-1" to="/Care">
            <img className="size-14" src={CareIcon} alt="Care" />
          </Link>
        </button>
        <button className={`h-full w-full ${getActiveClass("/Lab")}`}>
          <Link className="flex flex-col justify-center items-center gap-1" to="/Lab">
            <img src={LabIcon} alt="Lab Test" />
            <span className="text-xs text-gray-400">Lab Test</span>
          </Link>
        </button>
        <button className={`h-full w-full ${getActiveClass("/Profile")}`}>
          <Link className="flex flex-col justify-center items-center gap-1" to="/Profile">
            <img src={ProfileIcon} alt="Profile" />
            <span className="text-xs text-gray-400">Profile</span>
          </Link>
        </button>
      </div>
    </div>
  );
};
