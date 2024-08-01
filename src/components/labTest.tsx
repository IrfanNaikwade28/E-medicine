import { useEffect, useState } from "preact/hooks";

export const LabTest = () =>{
    const searchPlaceholderWords = ['KFT','CBC','thyroid','vitamin','full body package'];
    const [word,setWord] = useState<number>(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setWord((prevIndex)=>(prevIndex+1)%searchPlaceholderWords.length)
        },3000);
        return () =>clearInterval(interval)
    },[word])
    return(
        <>
            <div className="mt-3 text-2xl font-bold text-wrap tracking-wider mx-4">Lab tests & health checkups</div>
            <div className="px-4">
                <div className="w-full mt-3 h-9 border border-black rounded-[4px] flex items-center max-w-[30rem]">
                    <input type="text" className="w-full pl-3 focus-within:outline-none" placeholder={`Search '${searchPlaceholderWords[word]}'`}/>
                </div>
            </div>
        </>
    )
}