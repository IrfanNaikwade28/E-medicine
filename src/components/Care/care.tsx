import { Navbar } from "../navbar"
import { CarePlan } from "../carePlan"
import { FloatingSubscriptionBar } from "../floatingSubscriptionBar"
import { CarePlanCardContainer } from "../carePlanCardContainer"
import { Footer } from "../footer"
import { FAQ } from "../faq"
export const Care = () =>{
    return (
        <>
            <Navbar setSearchAndBackBtn={true} isSticky={true}/>
            <CarePlan/>
            <FloatingSubscriptionBar/>
            <CarePlanCardContainer/>
            <FAQ/>
            <Footer/>
        </>
    )
}