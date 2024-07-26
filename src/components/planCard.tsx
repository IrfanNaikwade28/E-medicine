import { FunctionalComponent } from "preact"

type PlanCardProps = {
    planImg: string;
    planIconImg: string;
    planName: string;
}
export const PlanCard:FunctionalComponent<PlanCardProps> = (props) =>{
    return(
        <>
            <div className="plan-card flex flex-col gap-y-1 w-full py-5 border-b-2">
                    <div className="w-full">
                        <img className="w-full rounded-[4px]" src={props.planImg} alt="" />
                    </div>
                    <div className="text text-base font-bold">
                        {props.planName}
                    </div>
                    <div className="icon">
                        <img className="w-1/6" src={props.planIconImg} alt="" />
                    </div>
                    <div className="flex gap-x-2">
                        <button className="w-1/2 h-10 text-base rounded-md border border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white">Know More</button>
                        <button className="w-1/2 h-10 text-base bg-[#ff5443] text-white font-semibold rounded-md hover:bg-[#f05244]">Get custom plans</button>
                    </div>
                </div>
        </>
    )
}