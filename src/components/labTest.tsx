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
            <div className="w-full px-4 mt-3">
                <input type="text" className="w-full h-9 border border-black pl-3 rounded-[4px]" placeholder={`Search '${searchPlaceholderWords[word]}'`}/>
            </div>
        </>
    )
}