export const LoginSect = () =>{
    return (
        <>
            <div className="px-4 flex flex-col gap-y-2 py-5 border-b border-gray-300">
                <div className="font-bold text-3xl">
                    Hi, there!
                </div>
                <div className="font-light text-base tracking-wider text-gray-800 leading-5">
                    Sign in to start your healthcare journey
                </div>
                <div className="w-full">
                    <button className="w-full h-10 flex justify-center items-center text-white text-sm font-bold bg-red-500 rounded-md hover:bg-red-600"> Sign in</button>
                </div>
            </div>
        </>
    )
}