import { gemDTO } from "../components/gemContainer";

export function postGem(dto: gemDTO) {
  fetch("http://localhost:3000/api/gems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(dto),
  });
}

export function removeGem(id: number) {
  fetch("http://localhost:3000/api/gems/" + id, {
    method: "DELETE",
  });
}
