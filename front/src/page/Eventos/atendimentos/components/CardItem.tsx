import {} from "phosphor-react";

type itemProps = {
    pingStatus?: string;
    bgStatus?: string;
}

function CardItem({ pingStatus = 'bg-red-400' , bgStatus = 'bg-red-500' }: itemProps) {
  return (
    <li className="flex bg-stone-200 border border-stone-200 shadow-2xl rounded-md h-24">
      <div className="flex flex-row justify-center items-center basis-1/12">
        <div className=" flex justify-center basis-1/3">
          <span className="flex relative ">
            <span className={`animate-ping absolute inline-flex size-full rounded-full ${pingStatus} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full size-3 ${bgStatus}`}></span>
          </span>
        </div>
        <div className="flex justify-center items-center font-mono text-2xl font-bold text-slate-700 basis-2/3">
          <p>10</p>
          <p className="">:</p>
          <p>10</p>
        </div>
      </div>
      <div className="basis-4/6 flex justify-center items-center text-2xl font-mono text-bgMain-300 font-bold pl-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, debitis.</p>
      </div>
      <div className="basis-1/6 flex justify-center items-center text-2xl font-mono text-bgMain-300 font-bold">
         <p>Sala de Áudio</p>
      </div>
    </li>
  );
}

export default CardItem;
