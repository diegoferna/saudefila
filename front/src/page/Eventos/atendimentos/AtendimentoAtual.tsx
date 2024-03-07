export function AtendimentoAtual() {
  return (
    <div className="h-full flex flex-row gap-2 border-b-2 p-2">
      <div className="flex flex-col justify-center items-center w-1/4  bg-transparent shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] font-mono text-9xl">
        <div className="w-full flex justify-end  basis-1/6 bg-bgMain-300 px-2 text-sm">
            <h1 className="text-">INÍCIO</h1>
        </div>
        <div className="flex flex-row basis-5/6">
          <p>10</p>
          <p className="px-2">:</p>
          <p>10</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-2/4 font-mono text-6xl">
        <div className="w-full flex justify-end  basis-1/6 bg-bgMain-200 px-2 text-sm">
            <p>Evento</p>
        </div>
        <div className="w-full flex justify-center items-center basis-5/6">
            <p>Curso de repação de lata</p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col  font-mono text-9xl">
        <div className="w-full flex justify-end  basis-1/6 bg-bgMain-100 px-2 text-sm">
          <p>Sala</p>
        </div>
        <div className="w-full flex justify-center basis-5/6">
          <p>201</p>
        </div>
      </div>
    </div>
  );
}
