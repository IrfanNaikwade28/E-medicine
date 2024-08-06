import closeBtn from "../assets/icons/close-btn.svg";
import search from "../assets/icons/search.svg";
import { AccordionContainer } from "../components/accordionContainer";
import insta from "../assets/icons/instagram.svg";
import fb from "../assets/icons/facebook.svg";
import tw from "../assets/icons/twitter.svg";
import pint from "../assets/icons/pinterest.svg";
import yt from "../assets/icons/youtube.svg";
import { FunctionComponent } from "preact";
import { useEffect } from "preact/hooks";

type ToggleProps = {
  display: boolean;
  setToggle: (value: boolean) => void;
};
export const NavbarToggle: FunctionComponent<ToggleProps> = (props) => {
  useEffect(() => {
    if (props.display) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [props.display]);
  return (
    <div
      className={`w-full h-full z-50 fixed top-0 bg-white overflow-hidden ${
        props.display ? "block" : "hidden"
      }`}
    >
      <div className="logo w-full flex justify-between h-16 items-center px-3 border-b border-opacity-40">
        <span className="logo text-orange-500">LOGO</span>
        <span>
          <img onClick={() => props.setToggle(false)} src={closeBtn} alt="" />
        </span>
      </div>
      <div className="w-full mt-2 relative p-3">
        <img className="absolute top-5 right-5 z-10" src={search} alt="" />
        <input
          className="bg-gray-200 w-full h-10 rounded-md pl-3"
          type="text"
          name=""
          id=""
          placeholder="Search for items..."
        />
      </div>
      <div className="p-5">
        <AccordionContainer />
      </div>
      <div className="follow-us flex flex-col gap-3 p-3">
        <span>Follow Us</span>
        <div className="flex gap-3">
          <img src={fb} alt="" />
          <img src={tw} alt="" />
          <img src={insta} alt="" />
          <img src={pint} alt="" />
          <img src={yt} alt="" />
        </div>
      </div>
    </div>
  );
};
