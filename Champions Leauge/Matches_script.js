function checkGames(teamid) {
    try {
        const response = () => {
            fetch("https://api.openligadb.de/getmatchdata/champion1/2023").then((result) => {
              result.json().then((data) => {
                fillTable(data);
              });
            });
          };
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const data = await response.json();
        console.log(data);
        let html = "";
        data.forEach((match, index) => {
        '<div class="flex flex-col items-center bg-blue-500 m-2 h-[80%] w-[20%] mb-10 mr-10"><div><p class="text-white text-center font-bold text-xs">'
        + match.matchDateTime + 
        '</div><div><p class="text-white text-center font-bold text-xs">Gruppe ' 
        + match.group.groupOrderID +
        '</p></div><div class="flex items-center justify-between w-full"><div class="h-[3vh] w-[3vw] ml-[17%]"><a href="Teams.html"><img src="'
        + match.team1.teamIconUrl +
        '"></a></div><div class="text-4xl"><p class="text-white font-bold">:</p></div><div class="h-[3vh] w-[3vw] mr-[17%] mb-8"><a href="Teams.html"><img src="' 
        + match.team2.teamIconUrl +
        '"></a></div></div><div class="flex items-center justify-between w-full"><div class="text-center ml-[20%]"><p class="text-white align-text-bottom">'
        + match.team1.teamName +
        '</p></div><div class="text-center mr-[20%]"><p class="text-white align-text-bottom">'
        + match.team2.teamName +
        '</p></div></div></div>'

            console.log(match.team1.teamName)
        });
        document.getElementById("match").innerHTML = html;
        console.log(html);

        // process your data further
    } catch (error) {
        console.error("Error:", error);
    }

    
}

checkGames();


/*
  {
    "leagueId": 4673,
    "leagueName": "UEFA Champions League 2023/2024",
    "leagueShortcut": "champion1",
    "leagueSeason": "2023",
    "sport": null
  },
*/

/*
<div class="flex flex-col items-center bg-blue-500 m-2 h-[80%] w-[20%] mb-10 mr-10">
                <div>
                    <p class="text-white text-center font-bold text-xs">
                        24. November, 18:45
                    </p>
                </div>
                <div>
                    <p class="text-white text-center font-bold text-xs">
                        Gruppe E
                    </p>
                </div>


                <div class="flex items-center justify-between w-full">
                    <div class="h-[3vh] w-[3vw] ml-[17%]"><a href="Teams.html">
                        <img src="images/Teamlogos/lazio.png" alt="Lazio"></a>
                    </div>
                    <div class="text-4xl">
                        <p class="text-white font-bold">
                            :
                        </p>
                    </div>
                    <div class="h-[3vh] w-[3vw] mr-[17%] mb-8"><a href="Teams.html">
                        <img src="images/Teamlogos/celtic.png" alt="Celtic"></a>
                    </div>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="text-center ml-[20%]">
                        <p class="text-white align-text-bottom">
                            Lazio
                        </p>
                    </div>
                    <div class="text-center mr-[20%]">
                        <p class="text-white align-text-bottom">
                            Celtic
                        </p>
                    </div>
                </div>
            </div>

*/