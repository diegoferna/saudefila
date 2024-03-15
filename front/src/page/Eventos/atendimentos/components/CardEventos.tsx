import { useEffect } from "react";
import CardItem from "./CardItem";
import { Evento } from "../../../../context/Evento/evento";

type cardEventosProps = {
  evento: Evento[];
};

function CardEventos({ evento }: cardEventosProps) {
  useEffect(() => {}, []);

  return (
    <ul className="w-ful flex flex-col gap-2 ">
      {evento.length != 0 ? (
        evento.map((e: any) => {
          return (
            <CardItem
              evento={e.nome}
              local={e.local}
              horaInicio={e.horaInicio}
              horaFinal={e.horaFinal}
              bgStatus={e.status === "pendente" ? "bg-teal-400" : "bg-teal-500"}
            />
          );
        })
      ) : (
        <>Nenhum evento acontecendo</>
      )}
    </ul>
  );
}

export default CardEventos;
/**  <CardItem pingStatus="bg-teal-400" bgStatus="bg-teal-500" />
      <CardItem pingStatus="bg-teal-400" bgStatus="bg-teal-500" />
      <CardItem pingStatus="bg-amber-400" bgStatus="bg-amber-500" />
      <CardItem pingStatus="bg-amber-400" bgStatus="bg-amber-500" /> */
