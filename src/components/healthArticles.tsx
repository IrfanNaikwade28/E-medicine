import { HealthArticlesCard } from "./healthArticleCard"
import articleImg from "../assets/shutterstock_2189855871.jpg"
import articleImg1 from "../assets/Shutterstock_1744008539.jpg"
import articleImg2 from "../assets/2149080550.jpg"
import articleImg3 from "../assets/shutterstock_1823531888.jpg"
export const HealthArticles = () =>{
    return(
        <>
            <div className="font-bold text-base px-3 mt-10">Health articles</div>
            <div className="checkup-offers w-screen px-3 mt-3 grid grid-flow-col gap-x-2 overflow-x-scroll snap-x snap-mandatory">
                <HealthArticlesCard healthImg={articleImg} title={"Dengue Alert: What You Need To Know This Season"} />
                <HealthArticlesCard healthImg={articleImg1} title={"12 Simple Monsoon Health Tips"} />
                <HealthArticlesCard healthImg={articleImg2} title={"चिया सीड्स के फायदे और सेवन का तरीका – Chia Seeds in Hindi"} />
                <HealthArticlesCard healthImg={articleImg3} title={"When Should Your Child Get the Flu Vaccine?"} />
                <HealthArticlesCard healthImg={articleImg1} title={"12 Simple Monsoon Health Tips"} />
                <HealthArticlesCard healthImg={articleImg2} title={"चिया सीड्स के फायदे और सेवन का तरीका – Chia Seeds in Hindi"} />
                <HealthArticlesCard healthImg={articleImg3} title={"When Should Your Child Get the Flu Vaccine?"} />
            </div>
        </>
    )
}