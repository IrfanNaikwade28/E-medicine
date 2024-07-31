import topCurve from "../assets/icons/backgroundTopCurve.svg"
import bottomCurve from "../assets/icons/backgroundBottomCurve.svg"
import { TestimonialCard } from "./testimonialCard"
import { useEffect, useState } from "preact/hooks"
export const Testimonials = () =>{
    const [active,setActive] = useState(0)
    const cardCount = [1,2,3,4,5];
    useEffect(()=>{
        const interval = setInterval(()=>{
            setActive((prevIdx)=>(prevIdx+1)%cardCount.length)
        },3000);
        return () => clearInterval(interval);
    },[active])
    return (
        <>
            <div className="w-full h-full">
                <img className="size-full" src={topCurve} alt="" />
            </div>
            <div className="bg-[#FEF7EF] w-full py-5 grid justify-items-center">
                <div className="text-gray-700 text-base text-center">Still not sure?</div>
                <div className="text-xl font-bold text-center">Hear from our members</div>
                <div className="testimonialContainer w-full px-2 grid grid-flow-col overflow-hidden snap-x snap-mandatory mt-5 gap-x-3">
                    <TestimonialCard customerName="Sonal" desc="There is a good discount for a new customer. even in low price for existing customer. The best thing is care plan (46/- month) which provides free delivery, NeuCoins and many more." />
                    <TestimonialCard customerName="Piyush Patel" desc="There is a good discount for a new customer. even in low price for existing customer. The best thing is care plan (46/- month) which provides free delivery, NeuCoins and many more." />
                    <TestimonialCard customerName="Rajput Jainendra" desc="There is a good discount for a new customer. even in low price for existing customer. The best thing is care plan (46/- month) which provides free delivery, NeuCoins and many more." />
                    <TestimonialCard customerName="Jitendra" desc="There is a good discount for a new customer. even in low price for existing customer. The best thing is care plan (46/- month) which provides free delivery, NeuCoins and many more." />
                    <TestimonialCard customerName="Alex Altmon" desc="There is a good discount for a new customer. even in low price for existing customer. The best thing is care plan (46/- month) which provides free delivery, NeuCoins and many more." />
                </div>
                <div className="flex gap-x-2 mt-5">
                    {
                        cardCount.map((_,index)=>[
                            <div key={index} className={`rounded-full w-2 h-2 ${active==index?"bg-red-500":"bg-red-200"}`}></div>
                        ])
                    }
                </div>
            </div>
            <div className="w-full h-full">
                <img className="size-full" src={bottomCurve} alt="" />
            </div>
        </>
    )
}