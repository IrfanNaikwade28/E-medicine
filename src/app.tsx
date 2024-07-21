import {Navbar} from "./components/navbar"
import {Header} from "./components/header"
import { Hero } from "./components/hero";
import {StickyNav} from "./components/stickyNav"
import { PopularCategories } from "./components/popularCategories";
import { HealthPackages } from "./components/healthPackages";
import { CustomHealthPlan } from "./components/customHealthPlan";
import { HealthCheckup } from "./components/healthCheckup";
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
        <StickyNav/>
    </>
  );
}
