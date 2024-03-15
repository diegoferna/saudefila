import { useContext, useEffect, useState } from "react";
import CardEventos from "./components/CardEventos";
import { EventContext } from "../../../context/useContext";

export function UltimosAtendimentos() {
  const { Evento } = useContext(EventContext);
  const { evento, listarEventos } = Evento;
  const eventoIsLoaded = evento != undefined ? true : false;

  const eventosFinalizados = eventoIsLoaded
    ? evento.filter((e) => e.status == "finalizado")
    : [ {'id': '',
      'nome': '',
      'local': '',
      'horaInicio':'string',
      'horaFinal':'',
      'status':''}];

  useEffect(() => {
    const loadPage = eventoIsLoaded ? setInterval(listarEventos, 5000) : 0;

    return () => clearInterval(loadPage);
  }, []);

  return (
    <div className="h-full basis-2/4 grid grid-cols-4 uppercase ">
      <div className="col-span-3 p-2">
        <div className="flex justify-center w-full p-2 bg-bgMain-300 border border-bgMain-200">
          <h3 className="font-mono font-semibold text-white ">
            Eventos Encerrados
          </h3>
        </div>
        {eventoIsLoaded ? (
          <CardEventos evento={evento} />
        ) : (
     <></>
        )}
      </div>
      <div className="flex flex-col mt-2 border border-bgMain-200 shadow-xl  ">
        <div className="flex justify-center w-full p-2 bg-bgMain-300">
          <h3 className="font-mono font-semibold text-white">
            Eventos Encerrados
          </h3>
        </div>
        <div className="w-full flex bg-bgMain-200 p-1 text-white">
          <p className="basis-3/4 font-mono font-semibold">Nome do evento</p>
          <p className="basis-1/4 font-mono font-semibold">Local</p>
        </div>
        <div className="p-2 w-full">
          <ul className="flex flex-col gap-1">
            {eventoIsLoaded ? (
              eventosFinalizados.map((e) => {
                return (
                  <li className="flex ">
                    <p className="basis-3/4 text-white">- {e.nome}</p>
                    <p className="flex justify-center basis-2/4 text-white">
                      {e.local}
                    </p>
                  </li>
                );
              })
            ) : (
              <p className="flex justify-center basis-2/4 text-white">
                Nenhum envento foi finalizado ainda.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
