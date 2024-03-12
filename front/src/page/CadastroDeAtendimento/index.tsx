import { useContext, useState } from "react";
import Input from "./components/Input";
import { EventContext } from "../../context/useContext";
import InputStatus from "./components/InputStatus";
import InputData from "./components/InputData";

type statusOptions = "atual" | "pendente" | "finalizado";

function CadastroDeAtendimento() {
  const { Evento } = useContext(EventContext);
  const { criarEvento } = Evento;
  const [local, setLocal] = useState("");
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState<statusOptions>("pendente");

  const handleSubmit = async (event: any) => {
    console.log("no handle");
    event.preventDefault();
    try {
      await criarEvento({
        data: Date.now().toString(),
        local,
        nome,
        status,
      });
    } catch (error) {
      console.log("error");
    }
    console.log("evento criado com sucesso");
  };

  const handleSelecaoOpcao = (event: any) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-full  justify-center items-center ">
      <form
        className="flex flex-col justify-center items-center w-5/6 h-3/4 gap-2 "
        action=""
        onSubmit={handleSubmit}
      >
        <Input label="Evento" size="w-2/6" handleSubmit={setNome} />
        <Input
          label="Local"
          placeholder="Ex: Distrito Itapuã"
          size="w-2/6"
          handleSubmit={setLocal}
        />
        <InputStatus status={status} handleSelecaoOpcao={() => handleSelecaoOpcao}/>

        <div className="flex justify-between w-2/6 gap-20">
          <InputData label="Hora Início"/>
          <InputData label="Hora Fim"/>
        </div>

        <div className="flex flex-col justify-start items-start w-2/6 gap-4 mt-4 ">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded w-full">
            Salvar
          </button>

          <button className="btn bg-red-400 hover:bg-red-500 w-full">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroDeAtendimento;
