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
        await eventoQueries.criarEndereco(evento);
    }

    async function listarEventos() {
        const data = await eventoQueries.listarEventos();
        console.log('espalhando a data', data)
        setEvento((state) => [...state, data]);
    }

    useEffect(() => {
        listarEventos();
    },[])

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

