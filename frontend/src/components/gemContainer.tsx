import GemCard from "./gemCard";

export default function GemContainer() {
    return (
    <div className="flex justify-center gap-4 flex-wrap">
        <GemCard name="Emerald Gem" description="Increases attack speed by 30%" rarity="Rare" 
        imageLink="gemEmerald.png"/>
        <GemCard name="Azure Gem" description="Increases attack speed by 30%" rarity="Rare" 
        imageLink="gemAzure.png"/>
        <GemCard name="Pyro Gem" description="+100% damage for first 10 seconds of a round" rarity="Rare" 
        imageLink="gemPyro.png"/>
    </div>
    )
}