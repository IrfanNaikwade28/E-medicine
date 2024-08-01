import { Navbar } from "../navbar"
import { Header } from "../header"
import { LabTest } from "../labTest"
export const Lab = () =>{
    return (
        <>
            <Navbar setSearchAndBackBtn={false} isSticky={true} />
            <Header setSerachBarIsVisible={false}  />
            <LabTest/>
        </>
    )
}