import TitleEventoAtual from "./components/TitleEventoAtual";


export function AtendimentoAtual() {
  return (
    <div className="h-full flex flex-row gap-2 border-b-2 p-2">
      <div className="flex flex-col justify-center items-center w-1/4 font-mono text-6xl">
        <TitleEventoAtual title="Início" bgColor="bg-bgMain-300" />
        <div className="flex flex-row w-full basis-5/6 bg-bgMain-300 text-white justify-center items-center">
          <p className="">10</p>
          <p className="">:</p>
          <p>10</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-2/4 font-mono text-4xl">
        <TitleEventoAtual title="Evento" bgColor="bg-bgMain-300" />
        <div className="w-full flex justify-center items-center basis-5/6 bg-bgMain-300 text-white text-wrap">
          <p>Curso de reparação de lata</p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col  font-mono text-9xl">
        <TitleEventoAtual title="Sala" bgColor="bg-bgMain-300" />
        <div className="w-full flex justify-center basis-5/6 text-6xl bg-bgMain-300 text-white py-2">
          <p>201</p>
        </div>
      </div>
    </div>
  );
}
