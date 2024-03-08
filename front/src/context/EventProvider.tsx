import { useState, useEffect, ReactNode } from "react";
import { EventContext } from "./useContext";

interface EventContextProviderProps  {
    children: ReactNode;
}
function EventProvider({ children }: EventContextProviderProps) {
    return (  
        <EventContext.Provider 
            value = {{
                Evento() {
                    console.log('teste')
                },
            }}
        >
            {children}
        </EventContext.Provider>
    );
}

export default EventProvider;