import { HealthArticlesCard } from "./healthArticleCard";
import articleImg from "../assets/shutterstock_2189855871.jpg";
import articleImg1 from "../assets/Shutterstock_1744008539.jpg";
import articleImg2 from "../assets/2149080550.jpg";
import articleImg3 from "../assets/shutterstock_1823531888.jpg";
import genuineProducts from "../assets/genuineProducts.png";
import secure from "../assets/securePayment.png";
import contact from "../assets/contactDelivery.png";
import sanitized from "../assets/sanitizedWorkforce.png";
export const HealthArticles = () => {
  return (
    <>
      <div className="font-bold text-base px-3 mt-10">Health articles</div>
      <div className="checkup-offers w-full px-3 mt-3 grid grid-flow-col gap-x-2 overflow-x-scroll snap-x snap-mandatory">
        <HealthArticlesCard
          healthImg={articleImg}
          title={"Dengue Alert: What You Need To Know This Season"}
        />
        <HealthArticlesCard
          healthImg={articleImg1}
          title={"12 Simple Monsoon Health Tips"}
        />
        <HealthArticlesCard
          healthImg={articleImg2}
          title={"चिया सीड्स के फायदे और सेवन का तरीका – Chia Seeds in Hindi"}
        />
        <HealthArticlesCard
          healthImg={articleImg3}
          title={"When Should Your Child Get the Flu Vaccine?"}
        />
        <HealthArticlesCard
          healthImg={articleImg1}
          title={"12 Simple Monsoon Health Tips"}
        />
        <HealthArticlesCard
          healthImg={articleImg2}
          title={"चिया सीड्स के फायदे और सेवन का तरीका – Chia Seeds in Hindi"}
        />
        <HealthArticlesCard
          healthImg={articleImg3}
          title={"When Should Your Child Get the Flu Vaccine?"}
        />
      </div>
      <div className="grid grid-flow-col gap-x-2 w-full h-full px-3 mt-10">
        <div className="flex flex-col w-full h-full bg-[#f0f2f5] rounded-md p-2 gap-y-1">
          <div className="img w-10 flex">
            <img className="w-full h-full" src={genuineProducts} alt="" />
          </div>
          <div className="text font-extralight h-3/5 text-xs text-wrap">
            100% genuine products
          </div>
        </div>
        <div className="flex flex-col w-full h-full bg-[#f0f2f5] rounded-md p-2 gap-y-1">
          <div className="img w-10 flex ">
            <img className="w-full h-full" src={secure} alt="" />
          </div>
          <div className="text font-extralight h-3/5 text-xs text-wrap">
            Safe & secure payments
          </div>
        </div>
        <div className="flex flex-col w-full h-full bg-[#f0f2f5] rounded-md p-2 gap-y-1">
          <div className="img w-10 flex ">
            <img className="w-full h-full" src={contact} alt="" />
          </div>
          <div className="text font-extralight h-3/5 text-xs text-wrap">
            No contact delivery
          </div>
        </div>
        <div className="flex flex-col w-full h-full bg-[#f0f2f5] rounded-md p-2 gap-y-1">
          <div className="img w-10 flex ">
            <img className="w-full h-full" src={sanitized} alt="" />
          </div>
          <div className="text font-extralight h-3/5 text-xs text-wrap">
            Fully sanitized workforce
          </div>
        </div>
      </div>
    </>
  );
};
