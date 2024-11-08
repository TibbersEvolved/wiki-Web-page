import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { gemDTO } from "./gemContainer";
import { postGem } from "../Server/server";

const colorBase = "text-cyan-600";
const colorRare = "text-lime-500";
const colorEpic = "text-purple-800";

export default function GemADD() {
  const queryClient = useQueryClient();
  const [side, changeSide] = useState(false);
  function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget;
    const dto: gemDTO = {
      name: (input.elements[0] as HTMLInputElement).value,
      description: (input.elements[1] as HTMLInputElement).value,
      imageLink: (input.elements[3] as HTMLInputElement).value,
      rarity: (input.elements[2] as HTMLInputElement).value,
    };
    postGem(dto);
    queryClient.invalidateQueries({
      queryKey: ["perkData"],
      refetchType: "all",
    });
  }

  if (!side)
    return (
      <>
        <section
          onClick={() => changeSide(true)}
          className="flex flex-col bg-primary size-60 justify-center text-center items-center rounded hover:bg-secondary
    transition-colors pt-2"
        >
          <div className="font-extrabold text-6xl">+</div>
          <div>Add New</div>
        </section>
      </>
    );
  return (
    <>
      <section
        className="flex flex-col bg-primary size-60 justify-center text-center items-center rounded 
    transition-colors pt-2"
      >
        <form className="flex flex-col gap-1" onSubmit={(e) => handlePost(e)}>
          <div>Name</div>
          <input className="rounded" name="Name"></input>
          <div>Description</div>
          <input className="rounded"></input>
          <select name="rarity" className="rounded">
            <option value="Common" className={colorBase}>
              Common
            </option>
            <option value="Rare" className={colorRare}>
              Rare
            </option>
            <option value="Epic" className={colorEpic}>
              Epic
            </option>
          </select>
          <select name="imageLink" className="rounded">
            <option value="gemRuby.png">Ruby</option>
            <option value="gemAzure.png">Azure</option>
            <option value="gemPurple.png">Purple</option>
          </select>
          <footer className="flex mt-1 gap-2">
            <button className="btn btn-success" type="submit">
              Create
            </button>
            <button className="btn" onClick={() => changeSide(false)}>
              Cancel
            </button>
          </footer>
        </form>
      </section>
    </>
  );
}
