import { useState, useEffect, ReactNode } from "react";
import { EventContext } from "./useContext";
import { Evento } from "./Evento/evento";
import * as eventoQueries from './Evento/eventoQueries'

interface EventContextProviderProps  {
    children: ReactNode;
}
export function EventProvider({ children }: EventContextProviderProps) {
    const [evento, setEvento] = useState<Evento[]>([])

    async function criarEvento(evento: Evento) {
        const data = await eventoQueries.criarEndereco(evento);
        setEvento((state) => [...state, data]);
      }
    
    useEffect(() => {},[])
    return (  
        <EventContext.Provider 
            value = {{
                Evento: { evento, criarEvento }
            }}
        >
            {children}
        </EventContext.Provider>
    );
}

