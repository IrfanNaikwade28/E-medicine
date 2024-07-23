import { FunctionComponent } from "preact"

type bannerProps = {
    bannerImg:string;
}
export const Banner:FunctionComponent<bannerProps> = (props) => {
    return (
        <>
            <div className="mt-5 w-full mb-3">
                <img className="w-full rounded-md" src={props.bannerImg} alt="" />
            </div>
        </>
    )
}