import {Navbar} from "../navbar"
import {Header} from "../header"
import { Hero } from "../hero";
import { PopularCategories } from "../popularCategories";
import { HealthPackages } from "../healthPackages";
import { CustomHealthPlan } from "../customHealthPlan";
import { HealthCheckup } from "../healthCheckup";
import { HairCareProduct } from "../hairCareProduct";
import { FeatureBrand } from "../featureBrand";
import { FirstAidProducts } from "../firstAidProducts";
import { FitnessPartner } from "../fitnessPartner";
import { TrendingProducts } from "../trendingProducts";
import { NutritionalDrinkProducts } from "../NutritionalDrinkProducts";
import { HealthArticles } from "../healthArticles";
import { Footer } from "../footer";

export const Home = () =>{
    return(
        <>
        <Navbar setSearchAndBackBtn={false} isSticky={false} />
        <Header setSerachBarIsVisible={true}  />
        <Hero/>
        <PopularCategories/>
        <HealthPackages/>
        <CustomHealthPlan/>
        <HealthCheckup/>
        <HairCareProduct/>
        <FeatureBrand/>
        <FirstAidProducts/>
        <FitnessPartner/>
        <TrendingProducts/>
        <NutritionalDrinkProducts/>
        <HealthArticles/>
        <Footer/>
        </>
    )
}