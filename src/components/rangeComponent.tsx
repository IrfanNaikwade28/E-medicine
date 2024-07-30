import { useState } from "preact/hooks";

export const RangeComponent = () =>{
  const [range, setRange] = useState("20");

    return (
        <>
            <div className="range-component w-full px-3">
              <div className="w-full mt-3 relative">
                <div className="w-full h-2 bg-red-200 rounded-lg absolute"></div>
                <div className={`h-2 bg-red-400 rounded-lg absolute w-[20%]`}></div>
              </div>
            </div>
            <div className="grid grid-flow-col mt-4 w-full px-3">
                <div className="flex flex-col justify-center items-center">
                    <div className="size-2 bg-red-400 rounded-full"></div>
                    <div className="text-red-400 text-sm">₹2000</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="size-2 bg-red-400 rounded-full"></div>
                    <div className="text-red-400 text-sm">₹2000</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="size-2 bg-red-400 rounded-full"></div>
                    <div className="text-red-400 text-sm">₹2000</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="size-2 bg-red-400 rounded-full"></div>
                    <div className="text-red-400 text-sm">₹2000</div>
                </div>
            </div>
        </>
    )
}