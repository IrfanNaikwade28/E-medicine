import {Navbar} from "./components/navbar"
import {Header} from "./components/header"
import { Hero } from "./components/hero";
import {StickyNav} from "./components/stickyNav"
import { PopularCategories } from "./components/popularCategories";
import { HealthPackages } from "./components/healthPackages";
import { CustomHealthPlan } from "./components/customHealthPlan";
import { HealthCheckup } from "./components/healthCheckup";
import { HairCareProduct } from "./components/hairCareProduct";
import { FeatureBrand } from "./components/featureBrand";
import { FirstAidProducts } from "./components/firstAidProducts";
import { FitnessPartner } from "./components/fitnessPartner";
import { TrendingProducts } from "./components/trendingProducts";
import { NutritionalDrinkProducts } from "./components/NutritionalDrinkProducts";
import { HealthArticles } from "./components/healthArticles";
import { Footer } from "./components/footer";
export function App() {
  return (
    <>
        <Navbar/>
        <Header/>
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
        <StickyNav/>
    </>
  );
}
