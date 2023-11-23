async function checkLeauge(teamid) {
    try {
        const response = await fetch("https://api.openligadb.de/getavailableleagues");
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const data = await response.json();
        console.log(data);
        data.forEach((element, index) => {
            console.log(element.leagueShortcut)
        });

        // process your data further
    } catch (error) {
        console.error("Error:", error);
    }
}

async function checkGames(teamid) {
    try {
        const response = await fetch("https://api.openligadb.de/getmatchdata/{champion1}/{2023}");
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const data = await response.json();
        console.log(data);
        data.forEach((element, index) => {
            //var div = document.getElementById('gamesplay');
            //div.innerHTML += element.leagueName + "("+element.matchDateTime+") "+ element.team1.teamName + " vs. "+element.team2.teamName +"<br>";
            console.log(element.leagueShortcut)
        });

        // process your data further
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    checkGames("")
})

/*
  {
    "leagueId": 4673,
    "leagueName": "UEFA Champions League 2023/2024",
    "leagueShortcut": "champion1",
    "leagueSeason": "2023",
    "sport": null
  },
*/