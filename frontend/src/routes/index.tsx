import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import IndexImageGallery from "../components/index/indexImageGallery";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2 text-center">
      <header className="p-3 text-3xl font-bold">Tower Defense Wiki</header>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod vero
        velit placeat. Ipsam error rem aliquam quia sint, eaque optio minus,
        libero impedit quis atque? Debitis deserunt quia quibusdam quidem,
        magnam tempore optio. Omnis sint quidem eaque aliquam hic similique
        accusantium nulla quam temporibus voluptatibus, natus aperiam pariatur
        libero quae minus et! Doloribus sit, itaque explicabo dolores, tenetur
        inventore aliquam veritatis, non praesentium vitae adipisci? Odit fugit
        cumque ipsum tenetur architecto earum dicta laborum. Quibusdam sunt
        laudantium aperiam impedit repellat amet excepturi autem voluptatum
        nulla in possimus repellendus, dicta quidem voluptatibus voluptate. Unde
        sit corrupti nisi tempore culpa eius?
      </div>
      <IndexImageGallery />
    </div>
  );
}
