import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

interface CustomerCountProps{
    className?:string;
}

export const CustomerCount:FunctionComponent<CustomerCountProps> = () => {
  const [count, setCount] = useState<number>(1530300);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="grid w-full my-20 justify-items-center gap-y-2">
        <div className="text-lg">Members using Care Plan</div>
            <div className="text-red-500 text-5xl font-bold tracking-widest">{count.toLocaleString()}</div>
      </div>
    </>
  );
};
