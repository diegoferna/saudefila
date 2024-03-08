type titleProps = {
    title:string;
    bgColor: string;
}

function TitleEventoAtual({title, bgColor}:titleProps) {
    return ( 
        <div className={`w-full flex justify-end items-center basis-1/6 ${bgColor} px-2 text-lg font-bold`}>
          <p>{title}</p>
        </div>
     );
}

export default TitleEventoAtual;