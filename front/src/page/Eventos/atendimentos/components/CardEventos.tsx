import CardItem from "./CardItem";

function CardEventos() {
    return (  
        <ul className="w-ful flex flex-col gap-2 ">
                <CardItem pingStatus="bg-teal-400" bgStatus="bg-teal-500" />
                <CardItem pingStatus="bg-teal-400" bgStatus="bg-teal-500" />
                <CardItem pingStatus="bg-amber-400" bgStatus="bg-amber-500" />
                <CardItem pingStatus="bg-amber-400" bgStatus="bg-amber-500" />
                
        </ul>
    );
}

export default CardEventos;

