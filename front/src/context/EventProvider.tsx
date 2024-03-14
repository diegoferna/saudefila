import { useState, useEffect, ReactNode } from "react";
import { EventContext } from "./useContext";
import { Evento } from "./Evento/evento";
import * as eventoQueries from "./Evento/eventoQueries";

interface EventContextProviderProps {
  children: ReactNode;
}
export function EventProvider({ children }: EventContextProviderProps) {
  const [evento, setEvento] = useState<Evento[]>([]);

  async function criarEvento(evento: Evento) {
    try {
      await eventoQueries.criarEndereco(evento);

      listarEventos();
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function listarEventos() {
    const data = await eventoQueries.listarEventos();
    console.log("espalhando a data", data);
    setEvento(data);

  }

  useEffect(() => {
    
    listarEventos();
  }, []);

  return (
    <EventContext.Provider
      value={{
        Evento: { evento, criarEvento, listarEventos },
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
