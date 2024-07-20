import healthMenu1 from "../assets/healthMenu1.png"
export const HealthPackages = () =>{
    return (
        <>
            <div className="px-4 my-5">
                <div className="font-bold leading-6">Lab tests and packages for your <br/> need</div>
                <div className="healthMenu border-b border-black border-opacity-20 mt-3">
                    <div className="flex overflow-x-scroll gap-x-5">
                        <div className="flex flex-col w-14 justify-center items-center border-b-4 border-custom-blue">
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu1} alt="" />
                            </div>
                            <div className="menu-text text-center text-xs font-bold leading-4 py-2 text-custom-blue tracking-widest">
                                For Women
                            </div>
                        </div>
                        <div className="flex flex-col w-14 justify-center items-center">
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu1} alt="" />
                            </div>
                            <div className="menu-text text-center text-xs leading-4 py-2 tracking-widest">
                                For Women
                            </div>
                        </div>
                        <div className="flex flex-col w-14 justify-center items-center">
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu1} alt="" />
                            </div>
                            <div className="menu-text text-center text-xs leading-4 py-2 tracking-widest">
                                For Women
                            </div>
                        </div>
                        <div className="flex flex-col w-14 justify-center items-center">
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu1} alt="" />
                            </div>
                            <div className="menu-text text-center text-xs leading-4 py-2 tracking-widest">
                                For Women
                            </div>
                        </div>
                        <div className="flex flex-col w-14 justify-center items-center">
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu1} alt="" />
                            </div>
                            <div className="menu-text text-center text-xs leading-4 py-2 tracking-widest">
                                For Women
                            </div>
                        </div>
                        <div className="flex flex-col w-14 justify-center items-center">
                            <div className="menu-pic rounded-full size-14">
                                <img className="w-full h-full" src={healthMenu1} alt="" />
                            </div>
                            <div className="menu-text text-center text-xs leading-4 py-2 tracking-widest">
                                For Women
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}