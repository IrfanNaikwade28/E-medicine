import { Navbar } from "../navbar"
import { Header } from "../header"
import { LabTest } from "../labTest"
import { LabPackages } from "../labPackages"
import { FeverScreeningPackage } from "../FeverScreeningPackage"
import { BookedHealthCheckup } from "../bookedHealthCheckup"
import { PopularLabTest } from "../popularLabTest"
export const Lab = () =>{
    return (
        <>
            <Navbar setSearchAndBackBtn={false} isSticky={true} />
            <Header setSerachBarIsVisible={false}  />
            <LabTest/>
            <LabPackages/>
            <FeverScreeningPackage/>
            <BookedHealthCheckup/>
            <PopularLabTest/>
        </>
    )
}