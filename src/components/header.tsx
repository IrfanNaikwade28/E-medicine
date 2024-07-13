import { Dropdown } from "./cityList";
import search from "../assets/icons/search.svg";

export const Header = () => {
    const options = ['new delhi', 'bangalore', 'mumbai', 'kolkata', 'chennai'];
    return(
        <div className="px-4 border-b h-28">
          <Dropdown options={options} />
          <div className="relative">
            <img className="absolute top-3 right-3" src={search} alt="" />
            <input
              className="border border-black rounded-full w-full h-12 pl-5"
              type="text"
              name=""
              id=""
              placeholder="Search for items..."
            />
          </div>
        </div>
    )
}