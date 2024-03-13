type inputProps = {
    name: string;
    label?: string;
    placeholder?: string;
    size?: string;
    enable: boolean;
    chagenValue: (name: string) => void
}

function Input({ name, label = "Evento", placeholder = 'Ex: Curso de Informática.' , size= 'w-full', enable = false, chagenValue }:inputProps) {
  return (
    <div className="flex flex-col w-full ">
      <label
        htmlFor="username"
        className=" self-center block text-sm text-white dark:text-gray-300"
      >
        {label}
      </label>

      <input
        value={name}
        disabled={enable}
        type="text"
        placeholder={`${placeholder}`}
        className={`${size} self-center block  mt-2 placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
        onChange={e => chagenValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
