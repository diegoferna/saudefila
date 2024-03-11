import { useContext } from "react";
import Input from "./components/Input";
import { EventContext } from "../../context/useContext";

function CadastroDeAtendimento() {
  const {Evento} = useContext(EventContext);
  const {criarEvento} = Evento;

  const handleSubmit = async (event: any) => {
    console.log('no handle')
    event.preventDefault();
    try {
      await criarEvento({
        data: Date.now().toString(),
        local: "salvador",
        nome: "Curso de terapia muscular",
        status: 'pendente',
      })
    }catch(error){
      console.log('error')
    }
    console.log('evento criado com sucesso')
  }

  return (
    <div className="flex flex-col h-screen w-full  justify-center items-center ">
      <div className="flex flex-col justify-center items-center w-5/6 h-3/4 gap-2 ">
        <form action="" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}

export default CadastroDeAtendimento;
