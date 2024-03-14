type titleProps = {
    title:string;
    bgColor: string;
}

function TitleEventoAtual({title, bgColor}:titleProps) {
    return ( 
        <div className={`w-full flex justify-start px-2 text-white items-center basis-1/6 ${bgColor} p-0 text-2xl font-bold  border-b-2`}>
          <p>{title}</p>
        </div>
     );
}

export default TitleEventoAtual;