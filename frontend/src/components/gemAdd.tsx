import { useState } from "react";

export default function () {
  const [side, changeSide] = useState(false);
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
        <form className="flex flex-col gap-1">
          <div>Name</div>
          <input className="rounded"></input>
          <div>Description</div>
          <input className="rounded"></input>
          <select name="Rarity" className="rounded">
            <option value="Common">Common</option>
            <option value="Rare">Rare</option>
            <option value="Epic">Epic</option>
          </select>
          <select name="Image" className="rounded">
            <option value="Ruby">Ruby</option>
            <option value="Azure">Azure</option>
            <option value="Asmethyst">Asmethyst</option>
          </select>
        </form>
        <footer className="flex mt-1 gap-2">
          <button className="btn btn-success">Create</button>
          <button className="btn" onClick={() => changeSide(false)}>
            Cancel
          </button>
        </footer>
      </section>
    </>
  );
}
