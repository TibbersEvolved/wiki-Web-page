import { SignedIn } from "@clerk/clerk-react";
import GemAdd from "./gemAdd";
import GemCard from "./gemCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export type gemDTO = {
  name: string;
  description: string;
  imageLink: string;
  rarity: string;
};

type gemData = {
  name: string;
  description: string;
  imageLink: string;
  rarity: string;
  id: number;
};

export default function GemContainer() {
  const { isPending, error, data } = useQuery({
    queryKey: ["perkData"],
    queryFn: async () =>
      fetch("http://localhost:3000/api/gems").then((res) => res.json()),
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {data.map((res: gemData) => {
        return (
          <GemCard
            key={res.id}
            gemId={res.id}
            name={res.name}
            description={res.description}
            imageLink={res.imageLink}
            rarity={res.rarity}
          />
        );
      })}
      <SignedIn>
        <GemAdd />
      </SignedIn>
    </div>
  );
}
