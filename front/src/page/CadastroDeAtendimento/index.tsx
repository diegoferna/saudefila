import { useContext, useEffect, useState } from "react";
import Input from "./components/Input";
import { EventContext } from "../../context/useContext";
import InputStatus from "./components/InputStatus";
import InputData from "./components/InputData";

type statusOptions = "Selecione" | "atual" | "pendente" | "finalizado";

function CadastroDeAtendimento() {
  const { Evento } = useContext(EventContext);
  const { criarEvento } = Evento;
  const [local, setLocal] = useState("");
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState<statusOptions>("Selecione");
  const [load, setLoad] = useState(false);
  const [horaInicio, setHorainicio] = useState("");
  const [horaFim, setHorafim] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      setLoad(true);

      await criarEvento({
        horaInicio: new Date(horaInicio).toString(),
        horaFinal: new Date(horaFim).toString(),
        nome,
        local,
        status,
      });

      setTimeout(() => {
        setLoad(false);
      }, 5000);
    } catch (error) {
      console.log("error");
    }
    setHorainicio(""),
    setHorafim(""),
    setNome(""),
    setLocal("")
  };

  const handleSelecaoOpcao = (event: any) => {
    setStatus(event.target.value);
  };


  return (
    <div className="flex flex-col h-screen w-full  justify-center items-center ">
      <form
        className={`flex flex-col justify-center items-center w-5/6 h-3/4 gap-2 uppercase ${
          load && "opacity-20"
        }`}
        action=""
        onSubmit={handleSubmit}
      >
        <Input
          label="Evento"
          size="w-2/6"
          name={nome}
          chagenValue={setNome}
          enable={load}
        />
        <Input
          label="Local"
          placeholder="Ex: Distrito Itapuã"
          size="w-2/6"
          chagenValue={setLocal}
          enable={load}
          name={local}
        />
        <InputStatus
          status={status}
          handleSelecaoOpcao={() => handleSelecaoOpcao}
          enable={load}
        />

        <div className="flex justify-between w-2/6 gap-20">
          <InputData
            label="Hora Início"
            enable={load}
            value={horaInicio}
            changeHour={setHorainicio}
          />
          <InputData
            label="Hora Fim"
            enable={load}
            value={horaFim}
            changeHour={setHorafim}
          />
        </div>

        <div className="flex flex-col justify-start items-start w-2/6 gap-4 mt-4 ">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded w-full uppercase ">
            Salvar
          </button>

          <button className="btn bg-red-400 hover:bg-red-500 w-full text-white uppercase">
            Cancelar
          </button>
        </div>
      </form>
      {load && (
        <div
          role="status"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 bg-gray-200 p-4 border rounded-lg"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default CadastroDeAtendimento;
