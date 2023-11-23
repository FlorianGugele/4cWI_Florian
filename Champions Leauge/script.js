async function checkTeamGames(teamid) {
    try {
        //const response = await fetch("https://api.openligadb.de/getmatchesbyteamid/"+teamid+"/1/12");
        const response = await fetch("https://api.openligadb.de/getavailableleagues");
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const data = await response.json();

            data.forEach((element, index) => {
                //var div = document.getElementById('gamesplay');
                //div.innerHTML += element.leagueName + "("+element.matchDateTime+") "+ element.team1.teamName + " vs. "+element.team2.teamName +"<br>";
                console.log(element.teamName)
            });

        // process your data further
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    checkTeamGames("")
})