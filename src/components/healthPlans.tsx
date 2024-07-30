import { HealthPlanTag } from "./healthPlanTag"
import { PlanCard } from "./planCard"
import plan1 from "../assets/plan1.jpg"
import plan1Icon from "../assets/plan1Icon.jpg"

export const HealthPlans = () =>{
    return (
        <>
            <div className="mt-3 px-3">
                <div className="text-xl font-bold">
                    Health Plans
                </div>
                <div className="text-sm text-gray-500 text-wrap">
                    Most upvoted plans, sessions and articles for you!
                </div>
            </div>
            <div className="w-full px-3 mt-3 grid grid-flow-col gap-x-3 overflow-x-scroll snap-x snap-mandatory">
                <HealthPlanTag tagName={"Diabetes"}/>
                <HealthPlanTag tagName={"Insurance"}/>
                <HealthPlanTag tagName={"Surgical care"}/>
                <HealthPlanTag tagName={"Mental Wellness"}/>
                <HealthPlanTag tagName={"Weight management"}/>
                <HealthPlanTag tagName={"Pregnancy Care"}/>
                <HealthPlanTag tagName={"Dental Care"}/>
                <HealthPlanTag tagName={"Pain management"}/>
            </div>
            <div className="Plans px-3 mt-5">
                <PlanCard planImg={plan1} planIconImg={plan1Icon} planName={"Time to say good-bye to strict diets, daily medications & insulin!"}/>
                <PlanCard planImg={plan1} planIconImg={plan1Icon} planName={"Time to say good-bye to strict diets, daily medications & insulin!"}/>
                <PlanCard planImg={plan1} planIconImg={plan1Icon} planName={"Time to say good-bye to strict diets, daily medications & insulin!"}/>
                <PlanCard planImg={plan1} planIconImg={plan1Icon} planName={"Time to say good-bye to strict diets, daily medications & insulin!"}/>
                <PlanCard planImg={plan1} planIconImg={plan1Icon} planName={"Time to say good-bye to strict diets, daily medications & insulin!"}/>
            </div>
        </>
    )
}