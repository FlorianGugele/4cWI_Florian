import React from "react";
import LineupFromTeam from "../components/team-components/LineupFromTeam";
import LastGames from "../components/team-components/LastGames";


export default function Team() {
    return (
      <div class="flex items-center h-[82vh] bg-contain w-[100vw] relative" id="Teams">
        <LastGames />
        <LineupFromTeam />
      </div>
    );
  } 