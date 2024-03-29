import { createContext } from "react";
import { Evento } from "./Evento/evento";

type EventoProps = {
    evento: Evento[];
    criarEvento(evento: Evento): Promise<void>;
    listarEventos: () => void;
   // deletarEvento: (id: string) => void;
}

interface EventContextData {
    Evento: EventoProps;
}

export const EventContext = createContext<EventContextData>({} as EventContextData); 