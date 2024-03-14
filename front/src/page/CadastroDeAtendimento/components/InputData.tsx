type InputData = {
    label: string;
    enable: boolean;
    value: string;
    changeHour: (value: string) => void
};

function InputData({ label, value, enable = false, changeHour }: InputData) {
  return (
    <div className="flex flex-col w-2/4 mt-4">
      <label
        htmlFor="username"
        className=" self-center block text-sm text-white dark:text-gray-300 "
      >
        {label}
      </label>
      <input
        value={value}
        onChange={e => changeHour(e.target.value)}
        type="datetime-local"
        className="w-full self-center block  mt-4 placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        disabled={enable}
      />
    </div>
  );
}

export default InputData;
