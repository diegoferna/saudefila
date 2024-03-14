type inputProps = {
    status: string;
    enable: boolean;
    handleSelecaoOpcao: () => void;
}

function InputStatus({status, handleSelecaoOpcao, enable = false}:inputProps) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor="username"
        className=" self-center block text-sm text-white dark:text-gray-300 "
      >
        Status
      </label>
      <select
        value={status}
        onChange={handleSelecaoOpcao}
        className="w-2/6 self-center block  mt-2 placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        disabled={enable}
      >
        <option selected>Selecione...</option>
        <option value="atual">Atual</option>
        <option value="pendente">Pendente</option>
        <option value="finalizado">Finalizado</option>
      </select>
    </div>
  );
}

export default InputStatus;
