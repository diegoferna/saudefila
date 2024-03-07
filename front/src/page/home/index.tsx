import { Eventos } from "../Eventos";

export function Home ()  {
    return (
        <div className='w-full 96 h-screen flex flex-col p-6'>
            <div className="basis-1/12">
                <h1>Teste</h1>
            </div>
            <div className="basis-11/12 ">
                <Eventos />
            </div>
        </div>
    )
}