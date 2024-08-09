import { useEffect, useState } from "preact/hooks";
import allergy from "../assets/allergy.png";
import GoldStandard from "../assets/gold_standard.png";
import allergens from "../assets/Allergies.png";
import BookNow from "../assets/booknow.png";
import uploadIcon from "../assets/upload.jpg";
import callIcon from "../assets/call.jpg";
import whatsapp from "../assets/whatsapp.jpg";
import rightArrow from "../assets/icons/arrow_right.svg";
import { HeroSlider } from "./heroSlider";
import acidity from "../assets/acidity.png"
import consult from "../assets/consult.jpg"

export const LabTest = () => {
  const HeroImages = [acidity,consult,acidity,consult];
  const searchPlaceholderWords = [
    "KFT",
    "CBC",
    "thyroid",
    "vitamin",
    "full body package",
  ];
  const [hide, setHidden] = useState(false);
  const [word, setWord] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevIndex) => (prevIndex + 1) % searchPlaceholderWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchWords = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.value === "") {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <>
      <div className="mt-5 text-2xl font-bold text-wrap tracking-wider mx-4">
        Lab tests & health checkups
      </div>
      <div className="px-4 mt-5">
        <div className="w-full mt-6 h-9 border border-black rounded-[4px] flex items-center max-w-[30rem] relative">
          <input
            type="text"
            onChange={(e) => handleSearchWords(e)}
            className="w-full pl-3 focus-within:outline-none accent-black"
            placeholder="Search "
          />
          <div
            className={`text-gray-400 absolute left-[4rem] ${
              hide ? "hidden" : ""
            }`}
          >
            '{searchPlaceholderWords[word]}'
          </div>
        </div>
      </div>
      <div className="px-4 mt-5 overflow-x-scroll grid grid-flow-col gap-x-3 snap-mandatory snap-x">
        <div className="w-16 snap-center rounded-full flex flex-col gap-y-1 items-center">
          <img className="size-16 rounded-full" src={allergy} alt="" />
          <span className="text-sm font-light text-wrap text-center">
            Allergies
          </span>
        </div>
        <div className="w-16 snap-center rounded-full flex flex-col gap-y-1 items-center">
          <img className="size-16 rounded-full" src={GoldStandard} alt="" />
          <span className="text-sm font-light text-wrap text-center">
            Gold Standard
          </span>
        </div>
        <div className="w-16 snap-center rounded-full flex flex-col gap-y-1 items-center">
          <img className="size-16 rounded-full" src={allergens} alt="" />
          <span className="text-sm font-light text-wrap text-center">
            Allergens
          </span>
        </div>
        <div className="w-16 snap-center rounded-full flex flex-col gap-y-1 items-center">
          <img className="size-16 rounded-full" src={BookNow} alt="" />
          <span className="text-sm font-light text-wrap text-center">
            Book Now
          </span>
        </div>
      </div>
      <div className="mt-5 w-full h-2 bg-gray-100"></div>
      <div className="my-5 px-3 w-full flex flex-col gap-y-4">
        <div className="contact-card flex w-full gap-x-1">
          <div className="w-1/6 flex justify-center items-center">
            <img className="w-full h-w-fit" src={uploadIcon} alt="" />
          </div>
          <div className="w-4/5 flex flex-col justify-center">
            <div className="text-[15px] font-light">Upload prescription</div>
            <div className="text-[15px] font-light">Our team will place the order for you</div>
          </div>
          <div className="w-1/6 flex justify-center items-center">
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="contact-card flex w-full gap-x-1">
          <div className="w-1/6 flex justify-center items-center">
            <img className="w-full h-w-fit" src={callIcon} alt="" />
          </div>
          <div className="w-4/5 flex flex-col justify-center">
            <div className="text-[15px] font-light">Call our health advisor to book</div>
            <div className="text-[15px] font-light">Our team of experts will guide you</div>
          </div>
          <div className="w-1/6 flex justify-center items-center">
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="contact-card flex w-full gap-x-1">
          <div className="w-1/6 flex justify-center items-center">
            <img className="w-full h-w-fit" src={whatsapp} alt="" />
          </div>
          <div className="w-4/5 flex flex-col justify-center">
            <div className="text-[15px] font-light">Book through WhatsApp</div>
            <div className="text-[15px] font-light">To book a lab test, say 'Hi'</div>
          </div>
          <div className="w-1/6 flex justify-center items-center">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 mt-14">
        <HeroSlider HeroImages={HeroImages}/>
      </div>
    </>
  );
};
