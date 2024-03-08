import Input from "./components/Input";

function CadastroDeAtendimento() {
  return (
    <div className="flex flex-col h-screen w-full  justify-center items-center ">
      <div className="flex flex-col justify-center items-center w-5/6 h-3/4 gap-2 ">
        <Input label="Evento" size="w-2/6" />
        <Input label="Local" placeholder="Ex: Distrito Itapuã" size="w-2/6" />
        <div className="flex w-2/6 gap-20 ">
          <Input label="Hora Início" placeholder="Ex: 10:00" size="basis-1/2"/>
          <Input label="Hora Fim" placeholder="Ex: 12:00" size="basis-1/2" />
        </div>

        <div className="flex flex-col justify-start items-start w-2/6 gap-4 mt-4 ">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded w-full">
            Salvar
          </button>

          <button className="btn bg-red-400 hover:bg-red-500 w-full">Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default CadastroDeAtendimento;
