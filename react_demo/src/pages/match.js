import React, { useEffect, useState } from "react";
import Game1 from "../components/match-components/Game1";

export default function Match() {

  var [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.openligadb.de/getmatchdata/champion1/2023').then((response) =>
        response.json().then((result) => {
            setData(result);
        })
    );
  },[])

    if (data.length == 0)
    {
      return(
        <div className="text-white">Loading banner</div>
      )
    } else {
      return (
        <div class="h-[82vh] bg-contain w-[100vw] grid grid-cols-2 md:grid-cols-4 gap-4 p-8" id="match">
           
              <Game1 data={data[96]}/>
              <Game1 data={data[97]}/>
              <Game1 data={data[98]}/>
              <Game1 data={data[99]}/>
           
              <Game1 data={data[100]}/>
              <Game1 data={data[101]}/>
              <Game1 data={data[102]}/>
              <Game1 data={data[103]}/>
           
              <Game1 data={data[104]}/>
              <Game1 data={data[105]}/>
              <Game1 data={data[106]}/>
              <Game1 data={data[107]}/>
           
              <Game1 data={data[108]}/>
              <Game1 data={data[109]}/>
              <Game1 data={data[110]}/>
              <Game1 data={data[111]}/>
           
          </div>
      );
    }

    
  }