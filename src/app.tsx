import {Navbar} from "./components/navbar"
import {Header} from "./components/header"
import { Hero } from "./components/hero";
import {StickyNav} from "./components/stickyNav"
import { PopularCategories } from "./components/popularCategories";
export function App() {
  return (
    <>
        <Navbar/>
        <Header/>
        <Hero/>
        <PopularCategories/>
        <StickyNav/>
    </>
  );
}
