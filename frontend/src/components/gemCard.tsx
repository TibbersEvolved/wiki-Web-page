
const colorBase = "text-cyan-600";
const colorRare = "text-lime-500";
const colorEpic = "text-purple-800";


export default function GemCard(props : gemProp) {
    const img_path : string = "/src/assets/gems/" + props.imageLink;
    const rarityColor = getColor(props.rarity);
       
    return (<>
    <section className="flex flex-col bg-primary size-60 text-center items-center rounded hover:bg-secondary
    transition-colors pt-2">
        <img src={img_path} className="size-20"></img>
        <div className="font-extrabold ">{props.name}</div>
        <div className={"font-bold " + rarityColor}>{props.rarity}</div>
        <div>{props.description}</div>
    </section>
    
    </>)
}

type gemProp = {
    name : string,
    description : string,
    imageLink : string,
    rarity : string,
}

function getColor(rarity : string ) {
    if(rarity === "Rare"){
        return colorRare;
    }
    if(rarity === "Epic"){
        return colorEpic;
    }
    return colorBase;
}