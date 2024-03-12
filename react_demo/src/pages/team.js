import React, { useEffect, useState } from "react";
import LineupFromTeam from "../components/team-components/LineupFromTeam";
import LastGames from "../components/team-components/LastGames";


export default function Team() {

    var [data, setData] = useState([]);

    useEffect(()=>{
      fetch('https://api.openligadb.de/getlastmatchbyleagueteam/4673/1201').then((response) =>
        response.json().then((result) => {
          console.log(result);
            setData(result);
        })
    );

    },[])

    console.log("datairgendwas", data)
    if(data.team1 == undefined){
      console.log("huan");
      return(<>huan</>)
    } else{
      return (
        <div class="flex items-center h-[82vh] bg-contain w-[100vw] relative" id="Teams">
          <LastGames data={data}/>
          <LineupFromTeam />
        </div>
      );
    }
    
  } 