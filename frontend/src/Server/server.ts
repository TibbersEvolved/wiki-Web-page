import { useQueryClient } from "@tanstack/react-query";
import { gemDTO } from "../components/gems/gemContainer";
import { userNotification } from "../utility/messages";

export async function postGem(dto: gemDTO) {
  const response = await fetch("http://localhost:3000/api/gems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(dto),
  });
  if (!response.ok) {
    userNotification(await response.json(), false);
    return;
  }
  userNotification("Added Gem!", true);
  return;
}

export async function removeGem(id: number) {
  const response = await fetch("http://localhost:3000/api/gems/" + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    userNotification(await response.json(), false);
    return;
  }
  userNotification("Deleted Gem!", true);
  return;
}
