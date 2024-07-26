import { Dropdown } from "./cityList";
import search from "../assets/icons/search.svg";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type HeaderProps = {
  setSerachBarIsVisible: boolean;
};
export const Header: FunctionComponent<HeaderProps> = (props) => {
  const options = ["new delhi", "bangalore", "mumbai", "kolkata", "chennai"];
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-4 border-b-2 border-opacity-50 ${
        isSticky ? "stickySearch h-16 flex items-center w-full" : "h-fit"
      }`}
    >
      {isSticky ? "" : <Dropdown options={options} />}
      {props.setSerachBarIsVisible ? (
        <div className="relative w-full my-3">
          <img className="absolute top-3 right-3" src={search} alt="" />
          <input
            className="border border-opacity-50 border-black rounded-full w-full h-12 pl-5 focus-within:outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search for items..."
          />
        </div>
      ):setIsSticky(false)}
    </div>
  );
};
