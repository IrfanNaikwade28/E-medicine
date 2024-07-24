import { AccordionItem } from "./accordionItem";

import tata1mg from "../assets/icons/tata1mg.svg";
import legitscript from "../assets/729605.png";
import isoCertify from "../assets/iso_certification_03_07_2024.jpg";
import fb from "../assets/icons/fb.svg"
import tw from "../assets/icons/tw.svg"
import insta from "../assets/icons/insta.svg"
import tataLogo from "../assets/icons/tataLogo.svg"
export const Footer = () => {
  return (
    <>

      <div className="w-full flex flex-col gap-y-1 mt-10 px-3">
        <div className="logo flex justify-center">
          <img src={tata1mg} alt="" />
        </div>
        <div className="text-center font-extralight text-wrap text-sm flex justify-center px-3 leading-5">
          Making healthcare understandable, accessible & affordable
        </div>
      </div>
      <div className="mt-10 w-full flex flex-col justify-center">
        <div className="text-sm font-extralight flex justify-center">
          India's largest healthcare platform
        </div>
        <div className="mt-5 flex gap-x-2 justify-center">
          <div className="flex flex-col gap-y-1 w-1/4 text-center">
            <div className="font-bold text-xl">260m+</div>
            <div className="font-extralight text-base">Visitors</div>
          </div>
          <div className="flex flex-col gap-y-1 w-1/4 text-center">
            <div className="font-bold text-xl">31m+</div>
            <div className="font-extralight text-base">Orders Delivered</div>
          </div>
          <div className="flex flex-col gap-y-1 w-1/4 text-center">
            <div className="font-bold text-xl">1800+</div>
            <div className="font-extralight text-base">Cities</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 px-3 mt-10">
        <div className="text-center font-extralight text-wrap text-sm flex justify-center leading-5 px-3">
          India's only LegitScript and ISO/ IEC 27001:2022 certified online
          healthcare platform
        </div>
        <div className="flex justify-center items-center gap-x-5 mt-3">
          <div className="w-[25vw]">
            <img className="object-contain" src={legitscript} alt="" />
          </div>
          <div className="w-1/2">
            <img className="object-contain" src={isoCertify} alt="" />
          </div>
        </div>
      </div>
      <div className="px-3 py-5">
        <div className="accordion max-w-xl mx-auto bg-white overflow-hidden border-y-2 border-opacity-50">
          <AccordionItem title="Know more about Tata 1mg">
            <div className="flex flex-col gap-y-1">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Access medical and health information
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Tata 1mg provides you with medical information which is curated,
                written and verified by experts, accurate and trustworthy. Our
                experts create high-quality content about medicines, diseases,
                lab investigations, Over-The-Counter (OTC) health products,
                Ayurvedic herbs/ingredients, and alternative remedies.
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-5">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Order medicines online
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Get free medicine home delivery in over 1800 cities across
                India. You can also order Ayurvedic, Homeopathic and other
                Over-The-Counter (OTC) health products. Your safety is our top
                priority. All products displayed on Tata 1mg are procured from
                verified and licensed pharmacies.
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-5">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Book lab tests
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Book any lab tests and preventive health packages from certified
                labs and get tested from the comfort of your home. Enjoy free
                home sample collection, view reports online and consult a doctor
                online for free.{" "}
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-5">
              <div className="leading-5 tracking-wider font-bold text-sm">
                Consult a doctor online
              </div>
              <div className="text-gray-500 text-wrap text-sm font-extralight leading-5">
                Got a health query? Consult doctors online from the comfort of
                your home for free. Chat privately with our registered medical
                specialists to connect directly with verified doctors. Your
                privacy is guaranteed.
              </div>
            </div>
            <div className="mt-10 flex gap-x-3">
              <div className="">
                <img src={fb} alt="" />
              </div>
              <div className="">
                <img src={tw} alt="" />
              </div>
              <div className="">
                <img src={insta} alt="" />
              </div>
            </div>
          </AccordionItem>
        </div>
      </div>
      <div className="flex flex-col px-3 mt-10">
        <div className="flex justify-center">
          <img src={tataLogo} alt="" />
        </div>
        <div className="mt-3 text-sm leading-5 text-center text-wrap font-light text-gray-500">
        © 2024 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process requests for Schedule X and habit forming drugs.
        </div>
      </div>
    </>
  );
};
