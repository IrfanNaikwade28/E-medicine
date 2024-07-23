import SeedNut from "../assets/SeedsNuts.jpg"
export const HealthyProductCard= () => {
  return (
    <>
      <div className="font-bold text-base px-3 mt-10">Healthy snacks</div>
      <div className="grid grid-cols-3 gap-2 justify-items-center px-3 mt-5">
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
        <div className="">
          <img src={SeedNut} alt="" />
        </div>
      </div>
    </>
  );
};
