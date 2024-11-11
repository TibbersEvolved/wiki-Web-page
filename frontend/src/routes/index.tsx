import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import IndexImageGallery from "../components/index/indexImageGallery";
import * as data from "../components/index/indexText";
import IndexTopic from "../components/index/indexTopic";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2 text-center flex flex-col items-center gap-5">
      <header className="p-3 text-3xl font-bold">Tower Defense Wiki</header>
      <div>
        Welcome to the Tower Defense Wiki! This is a place to find information
        about the up and coming rougelike tower defense game develeoped by Erik
        Olin. It's a strategy game where you must carefully manage resources,
        build clever defenses and play around random factors each game. The game
        is set to release in 2025. All pictures and data shown in this wiki is
        work in progress and subject to change!
      </div>
      <header className="text-3xl font-bold">Core Mechanics:</header>
      <IndexTopic
        title={data.defense_title}
        text={data.defense_text}
        imageLeft={true}
        image="/src/assets/screenshots/defense.png"
      />
      <IndexTopic
        title={data.science_title}
        text={data.science_text}
        imageLeft={false}
        image="/src/assets/screenshots/science.png"
      />
      <IndexTopic
        title={data.upgrade_title}
        text={data.upgrade_text}
        imageLeft={true}
        image="/src/assets/screenshots/upgrade.png"
      />
    </div>
  );
}
