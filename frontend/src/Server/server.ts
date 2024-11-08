import { gemDTO } from "../components/gemContainer";

export function postGem(dto: gemDTO) {
  fetch("http://localhost:8080/api/perks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(dto),
  }).then((res) => res.json());
}
