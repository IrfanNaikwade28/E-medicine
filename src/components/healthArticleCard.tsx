import { FunctionComponent } from "preact";

type cardPropType = {
    healthImg: string;
    title:string;
}
export const HealthArticlesCard:FunctionComponent<cardPropType> = (props) => {
  return (
    <>
      <div className="flex flex-col snap-center w-[40vw] gap-y-2">
        <div className="w-full h-3/4">
          <img className="rounded-md w-full h-full object-cover" src={props.healthImg} alt="" />
        </div>
        <div className="title font-semibold text-xs line-clamp-2 basis-1/5">{props.title}</div>
      </div>
    </>
  );
};
