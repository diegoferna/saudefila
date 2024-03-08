import CardEventos from "./components/CardEventos";

export function UltimosAtendimentos() {
  return (
    <div className="h-full basis-2/4 grid grid-cols-4">
      <div className="col-span-3 p-2">
        <CardEventos />
      </div>
      <div className="flex flex-col mt-2 border border-bgMain-200 shadow-xl  ">
        <div className="flex justify-center w-full p-2 bg-bgMain-100">
          <h3 className="font-mono font-semibold">Eventos Encerrados</h3>
        </div>
        <div className="w-full flex bg-bgMain-200 p-1">
            <p className="basis-3/4 font-mono font-semibold">Nome do evento</p>
            <p className="basis-1/4 font-mono font-semibold">Local</p>
        </div>
        <div className="p-2 w-full">
            <ul className="flex flex-col gap-1">
                <li className="flex ">
                    <p className="basis-3/4 text-white">- Publicação de atividades</p>
                    <p className="flex justify-center basis-2/4 text-white">Distrito Itapuã</p>
                </li>
                <li className="flex ">
                    <p className="basis-3/4 text-white">- Publicação de atividades</p>
                    <p className="flex justify-center basis-2/4 text-white">Distrito Itapuã</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
