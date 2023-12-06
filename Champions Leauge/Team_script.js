function checkTeam() {

    fetch('https://api.openligadb.de/getlastmatchbyleagueteam/4673/1201').then((response) =>
        response.json().then((result) => {
            fillTeam(result);
        })
    );

}
function fillTeam(data) {
    console.log("data", data);
    let html1 = '<div class="flex mt-1"><div class="flex flex-col items-center bg-blue-500 m-2 h-[100%] mr-3 ml-5" id="games"><div class="flex items-center justify-between w-full mt-2"><div class="h-[3vh] w-[3vw] m-2">'+
        '<img src="'+ data.team1.teamIconUrl +'" alt="'+ data.team1.teamName +'">'+'</div><div class="text-xl"><p class="text-white font-bold">:</p></div><div class="h-[2.5vh] w-[2.5vw] m-2">'+ 
        '<img src="'+ data.team2.teamIconUrl +'" alt="'+ data.team2.teamName +'">'+'</div></div><div class="flex items-center justify-between w-full mt-10"><div class="text-center ml-[20%]"><p class="text-white align-text-bottom">'+
        data.matchResults[1].pointsTeam1 + '</p></div><div class="text-center mr-[20%]"><p class="text-white align-text-bottom">'+
        data.matchResults[1].pointsTeam2 + '</p></div></div></div>';

    document.getElementById("games").innerHTML = html1;
    
    console.log(html1);
}
 

function checkOpponent(){

fetch('https://api.openligadb.de/getnextmatchbyleagueteam/4673/1201').then((response) =>
    response.json().then((result) => {
        fillOpponent(result);
    })
);
}
function fillOpponent(data) {
    console.log("data", data);
    const element = document.getElementById("Teams");
    let html2 = '<div class="flex flex-col items-center bg-blue-500 m-2 h-[100%] mr-3 ml-5" id="Teams"><div class="flex items-center justify-between w-full mt-2"><div class="h-[3vh] w-[3vw] m-2">'
        + '<img src="'+ data.team1.teamIconUrl +'" alt="'+ data.team1.teamName +'">' + '</div><div class="text-xl"><p class="text-white font-bold">:</p></div><div class="h-[2.5vh] w-[2.5vw] m-2">'
        + '<img src="'+ data.team2.teamIconUrl +'" alt="'+ data.team2.teamName +'"></div></div></div></div>'

    document.getElementById("Teams").innerHTML = html2;
    console.log(html2);
}


checkTeam();
checkOpponent();



/*<div class="flex mt-1">
                    <!-- Spiel 1-->
                    <div class="flex flex-col items-center bg-blue-500 m-2 h-[100%] mr-3 ml-5">
                        <div class="flex items-center justify-between w-full mt-2">
                            <div class="h-[3vh] w-[3vw] m-2">
                                <img src="images/Teamlogos/lazio.png" alt="Lazio">
                            </div>
                            <div class="text-xl">
                                <p class="text-white font-bold">
                                    :
                                </p>
                            </div>
                            <div class="h-[2.5vh] w-[2.5vw] m-2">
                                <img src="images/Teamlogos/celtic.png" alt="Celtic">
                            </div>
                        </div>
                        <div class="flex items-center justify-between w-full mt-10">
                            <div class="text-center ml-[20%]">
                                <p class="text-white align-text-bottom">
                                    0
                                </p>
                            </div>
                            <div class="text-center mr-[20%]">
                                <p class="text-white align-text-bottom">
                                    2
                                </p>
                            </div>
                        </div>
                    </div>
                     */