import React from 'react'

export default function LastGames({data}) {
    console.log("datateam", data.matchResults[0].pointsTeam1);

  return (
    <div class="relative">
            <div class="text-white ml-[25.5vw] mb-5 font-bold">
                {data.team1.teamName}
            </div>
            <img class="w-[25vh] h-[25vh] mx-2 ml-[22vw]" src={data.team1.teamIconUrl}></img>

            <div class="ml-[23vw] w-[28%] bg-stone-200 h-[20vh] flex flex-col items-start mt-10">
                <div class="flex">
                    <p class="ml-10 mt-1">Letztes Spiel</p>
                </div>
                <div class="flex mt-1">
            

                    <div class="flex flex-col items-center bg-blue-500 m-2 h-[100%] mr-3 ml-5"  id="games">
                        <div class="flex items-center justify-between w-full mt-2">
                            <div class="h-[3vh] w-[3vw] m-2">
                                <img src={data.team1.teamIconUrl}></img>
                            </div>
                            <div class="text-xl">
                                <p class="text-white font-bold">
                                    :
                                </p>
                            </div>
                            <div class="h-[2.5vh] w-[2.5vw] m-2">
                                <img src={data.team2.teamIconUrl}></img>
                            </div>
                        </div>
                        <div class="flex items-center justify-between w-full mt-10">
                            <div class="text-center ml-[20%]">
                                <p class="text-white align-text-bottom">
                                    {data.matchResults[1].pointsTeam1}
                                </p>
                            </div>
                            <div class="text-center mr-[20%]">
                                <p class="text-white align-text-bottom">
                                    {data.matchResults[1].pointsTeam2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
