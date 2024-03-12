import React, { useEffect, useState } from "react";
import UpComingMatches from '../components/main-components/UpComingMatches'

export default function Main() {

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
      <div>
        <UpComingMatches data={data[96]}/>
      </div>
    );
  }}