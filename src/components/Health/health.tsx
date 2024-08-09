import { Navbar } from "../navbar"
import { Header } from "../header";
import { Footer } from "../footer";
import { HealthPlans } from "../healthPlans";
export const Health = () =>{
    return (
        <>
            <div className="w-full">
                <Navbar setCartBtn={true} setSearchAndBackBtn={true} isSticky={true}/>
                <Header setSerachBarIsVisible={false} />
                <HealthPlans/>
                <Footer/>
            </div>
        </>
    )
}