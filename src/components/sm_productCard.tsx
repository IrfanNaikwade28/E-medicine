import { FunctionComponent } from "preact";

type ProductCardProps = {
  prodImg: string;
  prodTitle: string;
};

export const Sm_ProductCard: FunctionComponent<ProductCardProps> = (props) => {
  return (
    <>
      <div className="product-card basis-1/4 max-w-24 h-auto flex flex-col gap-y-1 hover:border border-opacity-50 rounded-md hover:shadow-sm overflow-hidden">
        <div className="prod-pic basis-1/2">
          <img className="w-full h-full" src={props.prodImg} alt="" />
        </div>
        <div className="prod-title basis-1/2 overflow-hidden">
          <span className="text-xs font-medium flex text-center text-ellipsis">
            {props.prodTitle}
          </span>
        </div>
      </div>
    </>
  );
};
