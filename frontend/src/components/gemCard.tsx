


export default function GemCard(props : gemProp) {
    const img_path : string = "/src/assets/gems/" + props.imageLink;
    console.log(img_path);
    return (<>
    <section className="flex flex-col bg-primary size-60 text-center items-center rounded">
        <img src={img_path} className="size-20"></img>
        <div className="font-extrabold">{props.name}</div>
        <div className="font-bold bg-lime-500">{props.rarity}</div>
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