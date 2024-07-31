import { FunctionComponent } from "preact";
import playStoreIcon from "../assets/icons/playstoreIcon.svg"
import { useEffect, useState } from "preact/hooks";
type TestimonialCardProps = {
    customerName:string;
    desc:string;
}
export const TestimonialCard:FunctionComponent<TestimonialCardProps> = (props) =>{
    const [scrollX, setScrollX] = useState(0);
    const cardWidth = 80;
    const cardCount = 5;
    const scrollStep = -cardWidth
    useEffect(() => {
        const interval = setInterval(() => {
            setScrollX(prev => {
                const newScrollX = prev + scrollStep;
                return newScrollX < -(cardWidth * (cardCount - 1)) ? 0 : newScrollX;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <div className="testimonial-card flex flex-col justify-between gap-y-1 snap-center w-[80vw] max-w-[30rem] h-40 bg-white rounded-xl p-3" style={{ transform: `translateX(${scrollX}vw)`, transition: 'transform 0.5s ease-in-out' }}>
                <div className="flex justify-between">
                    <div className="name text-base font-bold">{props.customerName}</div>
                    <div className="icon">
                        <img className="ml-2" src={playStoreIcon} alt="" />
                    </div>
                </div>
                <div className="desc text-xs line-clamp-5 text-gray-600">
                    {props.desc}
                </div>
                <div className="underline text-sm font-bold mt-1">View detailed+</div>
            </div>
        </>
    )
}