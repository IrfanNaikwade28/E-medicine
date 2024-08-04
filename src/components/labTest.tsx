import { useEffect, useState } from "preact/hooks";

export const LabTest = () =>{
    const searchPlaceholderWords = ['KFT','CBC','thyroid','vitamin','full body package'];
    const [hide,setHidden] = useState(false);
    const [word,setWord] = useState<number>(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setWord((prevIndex)=>(prevIndex+1)%searchPlaceholderWords.length)
        },3000);
        return () =>clearInterval(interval)
    },[])

    const handleSearchWords = (e:any) =>{
        if(e.target.value === ""){
            setHidden(false);
        }
        else if(e.target.value !== ""){
            setHidden(true);
        }
    }
    return(
        <>
            <div className="mt-5 text-2xl font-bold text-wrap tracking-wider mx-4">Lab tests & health checkups</div>
            <div className="px-4 mt-5">
                <div className="w-full mt-6 h-9 border border-black rounded-[4px] flex items-center max-w-[30rem] relative">
                    <input type="text" onChange={(e)=>handleSearchWords(e)} className="w-full pl-5 focus-within:outline-none" placeholder="Search "/>
                    <div className={`text-gray-400 absolute left-20 ${hide?'hidden':''}`}>'{searchPlaceholderWords[word]}'</div>
                </div>
            </div>
            div.
        </>
    )
}