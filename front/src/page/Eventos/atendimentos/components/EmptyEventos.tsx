import { Browser } from "phosphor-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function EmptyEventos({ children }: Props) {
  return (
    <div className="w-full h-40 flex flex-col justify-center items-center mt-2 border border-bgMain-200 ">
      <Browser size={32} color="white"/>
      <div >
        <p className="text-white">{ children }</p>
      </div>
    </div>
  );
}

export default EmptyEventos;
