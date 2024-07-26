import { FunctionComponent } from "preact";

type HealthPlanTagProps = {
    tagName: string;
}
export const HealthPlanTag:FunctionComponent<HealthPlanTagProps> = (props) => {
    return(
        <>
            <div className="text-sm border font-normal border-black border-opacity-50 rounded-[4px] px-3 py-0.5 w-fit snap-center text-nowrap">
                    {props.tagName}
            </div>
        </>
    )
}