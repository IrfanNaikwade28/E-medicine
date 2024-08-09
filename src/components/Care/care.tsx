import { Navbar } from "../navbar"
import { CarePlan } from "../carePlan"
import { CarePlanCardContainer } from "../carePlanCardContainer"
import { CustomerCount } from "../customerCount"
import { Testimonials } from "../testimonials"
import { FAQ } from "../faq"
import { Footer } from "../footer"
import { FloatingSubscriptionBar } from "../floatingSubscriptionBar"
export const Care = () =>{
    return (
        <>
            <Navbar setCartBtn={true} setSearchAndBackBtn={true} isSticky={true}/>
            <CarePlan/>
            <CarePlanCardContainer/>
            <CustomerCount/>
            <Testimonials/>
            <FAQ/>
            <Footer/>
            <FloatingSubscriptionBar/>
        </>
    )
}