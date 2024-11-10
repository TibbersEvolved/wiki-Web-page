import { useQueryClient } from "@tanstack/react-query";
import { gemDTO } from "../components/gems/gemContainer";
import { userNotification } from "../utility/messages";

export async function postGem(dto: gemDTO, token: string | null) {
  if (token === null) {
    userNotification("Failure to connect with Auth Server", false);
    return;
  }
  console.log("User token = " + token);
  const response = await fetch("http://localhost:3000/api/gems/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(dto),
  });
  if (!response.ok) {
    userNotification(
      "Got a response of " + response.status.toString() + " from server",
      false
    );
    return;
  }
  userNotification("Added Gem!", true);
  return;
}

export async function removeGem(id: number, token: string | null) {
  const response = await fetch("http://localhost:3000/api/gems/admin", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ id: id }),
  });
  if (!response.ok) {
    userNotification(
      "Got a response of " + response.status.toString() + " from server",
      false
    );
    return;
  }
  userNotification("Deleted Gem!", true);
  return;
}
