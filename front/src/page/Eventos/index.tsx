import { AtendimentoAtual } from "./atendimentos/AtendimentoAtual";
import { UltimosAtendimentos } from "./atendimentos/UltimosAtendimentos";

export function Eventos() {
    return(
        <div className="flex flex-col h-full">
             <div className="basis-1/4">
                <AtendimentoAtual />
            </div>
            <div className="basis-3/4">
                <UltimosAtendimentos />
            </div>
        </div>
    )
}