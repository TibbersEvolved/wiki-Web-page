import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { gemDTO } from "./gemContainer";
import { postGem } from "../../server/server";
import ImageLinkOptions from "./imageLinkOptions";
import { userNotification } from "../../utility/messages";
import { useAuth } from "@clerk/clerk-react";

const colorBase = "text-cyan-600";
const colorRare = "text-lime-500";
const colorEpic = "text-purple-800";

export default function GemADD() {
  const queryClient = useQueryClient();
  const [side, changeSide] = useState(false);
  const { getToken } = useAuth();

  async function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget;
    const dto: gemDTO = {
      name: (input.elements[0] as HTMLInputElement).value,
      description: (input.elements[1] as HTMLInputElement).value,
      imageLink: (input.elements[3] as HTMLInputElement).value,
      rarity: (input.elements[2] as HTMLInputElement).value,
    };
    if (dto.name.length <= 3) {
      userNotification("Name must be longer than 3 letters!", false);
      return;
    }
    if (dto.description.length <= 6) {
      userNotification("Must have a description over 6 letters!", false);
      return;
    }
    await postGem(dto, await getToken());
    queryClient.invalidateQueries({
      queryKey: ["perkData"],
      refetchType: "all",
    });
    changeSide(false);
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
          <input className="rounded" name="Name" maxLength={22}></input>
          <div>Description</div>
          <input className="rounded" maxLength={90}></input>
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
          <ImageLinkOptions />
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
