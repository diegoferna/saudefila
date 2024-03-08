import { createContext } from "react";

interface EventContextData {
    Evento: () => void
}

export const EventContext = createContext<EventContextData>({} as EventContextData); 