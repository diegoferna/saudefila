import { Eventos } from "../Eventos";

export function Home() {
  return (
    <div className="w-10/12 h-screen flex flex-col ">
      <div>
        <div className="basis-1/12 p-4">
          <h1>Teste</h1>
        </div>
        <div className="basis-10/12 ">
          <Eventos />
        </div>
      </div>
   
    </div>
  );
}
