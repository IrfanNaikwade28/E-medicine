import { useState } from "preact/hooks";
import locationArrow from "../assets/icons/location_arrow.svg";
import { FunctionComponent } from "preact";

type DropdownProps = {
  options:string[];
}

export const Dropdown:FunctionComponent<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>(props.options[0]);
  
  const filteredOptions = props.options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="relative inline-block">
      <div className="flex flex-col items-center">
        <div className="">
          <div
            className="my-2 p-1 flex gap-x-1 border-gray-200 bg-white rounded items-center text-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={locationArrow} alt="" />
            <label className="text-nowrap ml-2 font-normal" htmlFor="drp">
              Delivering to
            </label>
            <input
              id="drp"
              className="appearance-none outline-none w-1/4 text-gray-800 capitalize font-bold truncate"
              value={selectedCity}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
            <div
              className="text-gray-300 w-8 h-5 py-1 flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <button
                className={`cursor-pointer w-4 h-4 text-gray-600 outline-none focus:outline-none ${isOpen ? "rotate-[180deg]" : ""
                  }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="none" d="M0 18h18V0H0z"></path>
                    <path
                      d="M9 12.589a.996.996 0 01-.707-.293L2.03 6.034a.5.5 0 01.707-.707L9 11.589l6.262-6.261a.5.5 0 01.707.707l-6.262 6.26A.996.996 0 019 12.59"
                      fill="#3B3B3B"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute shadow bg-white z-10 w-full left-0 rounded max-h-select overflow-y-auto">
          <div className="flex flex-col w-full">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                onClick={() => {
                  setSelectedCity(option);
                  setIsOpen(false);
                  setSearch("");
                }}
              >
                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                  <div className="w-full items-center flex">
                    <div className="mx-2 leading-6 font-semibold capitalize">
                      {option}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
