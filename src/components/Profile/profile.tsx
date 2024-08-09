import { Navbar } from "../navbar"
import { LoginSect } from "../loginSect"
import { ProfileMenu } from "../profileMenu"
import { SettingMenu } from "../settingMenu"
import { Footer } from "../footer"
export const Profile = () =>{
    return (
        <>
            <Navbar isSticky={true} setSearchAndBackBtn={false} setCartBtn={false}/>
            <LoginSect/>
            <ProfileMenu/>
            <SettingMenu/>
            <Footer/>
        </>
    )
}