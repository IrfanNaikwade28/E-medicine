import HomeIcon from "../assets/icons/home.svg";
import HealthIcon from "../assets/icons/doctor.svg";
import CareIcon from "../assets/icons/message.svg";
import LabIcon from "../assets/icons/lab.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import { useState } from "preact/hooks";
export const StickyNav = () => {
  const [active,setActive] = useState('Home')
  return (
    <>
      <div className="sticky border-t border-opacity-50 bottom-0 bg-white w-full h-20 flex items-center justify-center">
        <div className="Nav-items w-full h-3/4 flex justify-center items-center gap-x-1 px-2">
          <button className={`flex flex-col justify-center items-center h-full gap-1 basis-16 ${active === 'Home' ? 'nav-active' : ''}`} onClick={() => setActive('Home')} value='Home'>
            <img src={HomeIcon} alt="" />
            <span className="text-xs text-gray-400">Home</span>
          </button>
          <button className={`flex flex-col justify-center items-center h-full gap-1 basis-16 ${active === 'Health' ? 'nav-active' : ''}`} onClick={() => setActive('Health')}  value='Health'>
            <img src={HealthIcon} alt="" />
            <span className="text-xs text-gray-400">Health</span>
          </button>
          <button className={`flex flex-col justify-center items-center h-full gap-1 basis-16 ${active === 'Care' ? 'nav-active' : ''}`} onClick={() => setActive('Care')}  value='Care'>
            <img src={CareIcon} alt="" />
            <span className="text-xs text-gray-400">Care Plan</span>
          </button>
          <button className={`flex flex-col justify-center items-center h-full gap-1 basis-16 ${active === 'Lab' ? 'nav-active' : ''}`} onClick={() => setActive('Lab')}  value='Lab'>
            <img src={LabIcon} alt="" />
            <span className="text-xs text-gray-400">Lab Test</span>
          </button>
          <button className={`flex flex-col justify-center items-center h-full gap-1 basis-16 ${active === 'Profile' ? 'nav-active' : ''}`} onClick={() => setActive('Profile')} value='Profile'>
            <img src={ProfileIcon} alt="" />
            <span className="text-xs text-gray-400">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
};
