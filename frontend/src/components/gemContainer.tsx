import GemCard from "./gemCard";
import { useQuery } from "@tanstack/react-query";

type gemDTO = {
  name: string;
  description: string;
  imageLink: string;
  rarity: string;
};

export default function GemContainer() {
  const { isPending, error, data } = useQuery({
    queryKey: ["perkData"],
    queryFn: async () =>
      fetch("http://localhost:8080/api/perks").then((res) => res.json()),
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {data.map((res) => {
        return (
          <GemCard
            name={res.name}
            description={res.description}
            imageLink={res.imageLink}
            rarity={res.rarity}
          />
        );
      })}
    </div>
  );
}
