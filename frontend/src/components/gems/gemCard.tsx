import { useQueryClient } from "@tanstack/react-query";
import { removeGem } from "../../server/server";
import { SignedIn, useAuth } from "@clerk/clerk-react";

const colorBase = "text-cyan-600";
const colorRare = "text-lime-500";
const colorEpic = "text-purple-800";

export default function GemCard(props: gemProp) {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();
  const img_path: string = "/src/assets/gems/" + props.imageLink;
  const rarityColor = getColor(props.rarity);

  async function handleDelete(id: number) {
    await removeGem(id, await getToken());
    queryClient.invalidateQueries({
      queryKey: ["perkData"],
      refetchType: "all",
    });
  }

  return (
    <>
      <section
        className="flex flex-col bg-primary size-60 text-center items-center rounded hover:bg-secondary
    transition-colors pt-2"
      >
        <img src={img_path} draggable="false" className="size-20"></img>
        <div className="font-extrabold ">{props.name}</div>
        <div className={"font-bold " + rarityColor}>{props.rarity}</div>
        <div>{props.description}</div>
        <SignedIn>
          <button
            className="btn btn-warning btn-xs"
            onClick={() => handleDelete(props.gemId)}
          >
            Remove
          </button>
        </SignedIn>
      </section>
    </>
  );
}

type gemProp = {
  name: string;
  description: string;
  imageLink: string;
  rarity: string;
  gemId: number;
};

function getColor(rarity: string) {
  if (rarity === "Rare") {
    return colorRare;
  }
  if (rarity === "Epic") {
    return colorEpic;
  }
  return colorBase;
}
