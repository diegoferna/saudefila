import { Door } from "phosphor-react";

type itemProps = {
  pingStatus?: string;
  bgStatus?: string;
  evento?: string;
  horaInicio?: string;
  horaFinal?: string;
  local?: string;
};

function CardItem({
  pingStatus = "bg-red-400",
  bgStatus = "bg-red-500",
  evento,
  horaInicio,
  horaFinal,
  local,
}: itemProps) {

  return (
    <li className="flex justify-between bg-stone-200 border border-stone-200 shadow-2xl  h-24 mt-1">
      <div className="flex flex-row justify-center items-center basis-1/12">
        <div className=" flex justify-center basis-1/3">
          <span className="flex relative ">
            <span
              className={`animate-ping absolute inline-flex size-full rounded-full ${pingStatus} opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full size-3 ${bgStatus}`}
            ></span>
          </span>
        </div>
        <div className="flex justify-center items-center font-mono text-2xl font-bold text-slate-700 basis-2/3">
          <p>10</p>
          <p className="">:</p>
          <p>10</p>
        </div>
      </div>
      <div className="basis-4/6 flex justify-center items-center text-xl font-serif text-bgMain-300  pl-4">
        <p>{evento}.</p>
      </div>
      <div className="basis-1/6 flex justify-center items-center gap-2 font-serif text-bgMain-300 text-xl">
        <div className="basis-1/2">
          <Door size={32} color="coral" />
        </div>
        <div className="basis-1/2 text-sm flex justify-start pr-4">
          <p>{local}</p>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
