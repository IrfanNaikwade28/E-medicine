import { FunctionComponent } from "preact";

type ProductCardProps = {
  prodImg: string;
  prodTitle: string;
};

export const ProductCard: FunctionComponent<ProductCardProps> = (props) => {
  return (
    <>
      <div className="product-card basis-1/4 flex flex-col gap-y-2 hover:border border-opacity-50 rounded-md hover:shadow-sm">
        <div className="prod-pic">
          <img className="w-full" src={props.prodImg} alt="" />
        </div>
        <div className="prod-title">
          <span className="text-xs font-medium flex text-center break-words">
            {props.prodTitle}
          </span>
        </div>
      </div>
    </>
  );
};
