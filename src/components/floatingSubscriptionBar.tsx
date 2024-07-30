export const FloatingSubscriptionBar = () =>{
    return (
        <>
            <div className="fixed h-20 w-full bottom-0 bg-white z-40 p-5 shadow-shadow-top">
                <div className="flex gap-x-3 w-full items-center">
                    <div className="flex flex-col basis-1/2">
                        <div className="text-lg font-bold">₹165</div>
                        <div className="text-sm text-gray-500">for 3 months</div>
                    </div>
                    <div className="bg-red-500 text-white font-bold text-base basis-3/4 h-8 flex justify-center items-center rounded-md">Join Now</div>
                </div>
            </div>
        </>
    )
}