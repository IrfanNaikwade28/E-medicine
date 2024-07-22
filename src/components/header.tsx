import { Dropdown } from "./cityList";
import search from "../assets/icons/search.svg";
import { useEffect, useState } from "preact/hooks";

export const Header = () => {
    const options = ['new delhi', 'bangalore', 'mumbai', 'kolkata', 'chennai'];

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={`px-4 border-b ${isSticky ? 'stickySearch h-16 flex items-center w-full' : 'h-28'}`}>
          {
            isSticky ?
          ''
          :<Dropdown options={options} />
          }
          <div className="relative w-full">
            <img className="absolute top-3 right-3" src={search} alt="" />
            <input
              className="border border-opacity-50 border-black rounded-full w-full h-12 pl-5 focus-within:outline-none"
              type="text"
              name=""
              id=""
              placeholder="Search for items..."
            />
          </div>
        </div>
    )
}