import { Door, Trash } from "phosphor-react";
import { useContext } from "react";
import { EventContext } from "../../../../context/useContext";

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
  horaInicio = "",
  horaFinal = "",
  local,
}: itemProps) {
  const {Evento} = useContext(EventContext);
  //const { deletarEvento} = Evento;


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
          <p>{new Date(horaInicio).getHours()}</p>
          <p className="">:</p>
          <p>{new Date(horaInicio).getMinutes()}</p>
        </div>
      </div>
      <div className="basis-4/6 flex justify-start items-center text-xl font-serif text-bgMain-300 ">
        <p>{evento}.</p>
      </div>
      <div className="basis-1/6 flex gap-2 items-center px-2 font-serif text-bgMain-300 ">
        <div className="flex-1 text-sm flex justify-start ">
          <p>{local}</p>
        </div>
        <div className="flex-1 flex justify-end">
            <Trash size={20} color="#c22f1b" />
        </div>
      </div>
    </li>
  );
}

export default CardItem;
