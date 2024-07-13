import { FunctionComponent } from "preact";

type BannerCardProps = {
    imgUrl:string;
    cardImg:string;
    cardText:string;
    cardHeadText:string;
}
export const BannerCard:FunctionComponent<BannerCardProps> = (props) =>{
    return(
        <div className="w-36 h-20 rounded-md overflow-hidden pt-2 pl-5" style={{backgroundImage:`url(${props.imgUrl})`,backgroundPosition:"center",backgroundSize:"cover"}}>
            <span className="text-white font-semibold">{props.cardHeadText}</span>
            <div className="flex w-full justify-between">
                <span className="text-white text-xs w-10">{props.cardText}</span>
                <img className="w-1/3" src={props.cardImg} alt="" />
            </div>
        </div>
    )
}