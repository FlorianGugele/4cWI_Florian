import React from 'react'

export default function Game1({data}) {

    return (

        <div class="flex flex-col items-center bg-blue-500 m-2 h-[80%] w-[20%] mb-10 mr-10">
            <div>
                <p class="text-white text-center font-bold text-xs">
                    {data.matchDateTime}
                </p>
            </div>
            <div>
                <p class="text-white text-center font-bold text-xs">
                     {data.group.groupName}
                </p>
            </div>


            <div class="flex items-center justify-between w-full">
                <div class="h-[3vh] w-[3vw] ml-[17%]"><a href="Teams.html">
                    <img src={data.team1.teamIconUrl}></img></a>
                </div>
                <div class="text-4xl">
                    <p class="text-white font-bold">
                        :
                    </p>
                </div>
                <div class="h-[3vh] w-[3vw] mr-[17%] mb-8"><a href="Teams.html">
                    <img src={data.team2.teamIconUrl}></img></a>
                </div>
            </div >
            
            <div class="flex items-center justify-between w-full">
                <div class="text-center ml-[7%]">
                    <p class="text-white align-text-bottom">
                        {data.team1.teamName}
                    </p>
                </div>
                <div class="text-center mr-[7%]">
                    <p class="text-white align-text-bottom">
                        {data.team2.teamName}
                    </p>
                </div>
            </div>
        </div>
    )
}
