function checknextGames() {

    fetch('https://api.openligadb.de/getmatchdata/champion1/2023').then((response) =>
        response.json().then((result) => {
            fillnextGames(result);
        })
    );
}
function fillnextGames(data) {
    console.log("data",data);
        const element = document.getElementById("nextGames");

        let html = "";
        data.forEach((nextGames,index) => {
        
        html += '<div class="flex flex-col items-center bg-blue-500 m-2 h-[35%] mt-2 w-[80%]"><div class="mb-2"><p class="text-white text-center text-lg font-bold text-xs">' +
            nextGames.matchDateTime +
            '</p></div><div></div><div class="flex items-center justify-between w-full"><div class="h-[5vh] w-[5vw] ml-[15%] mb-4">' +
            nextGames.team1.teamIconUrl +
            '</div><div class="text-2xl mt-2"><p class="text-white font-bold">:</p></div><div class="h-[4vh] w-[4vw] mr-[15%] mb-9">' +
            nextGames.team2.teamIconUrl +
            '</div></div><div class="flex items-center justify-between w-full mt-2"><div class="text-center ml-[21.5%]"><p class="text-white align-text-bottom">' +
            nextGames.team1.teamName +
            



            
        
        });
        document.getElementById("nextGames").innerHTML = html;
        console.log(html);

    } 


checknextGames();

/*
<div class="flex flex-col items-center bg-blue-500 m-2 h-[35%] mt-2 w-[80%]">
                    <div class="mb-2">
                        <p class="text-white text-center text-lg font-bold text-xs">
                            24. November, 18:45
                        </p>
                    </div>
                    <div>
                        <p class="text-white text-center font-bold text-xs">
                            Gruppe E
                        </p>
                    </div>

                    <div class="flex items-center justify-between w-full">
                        <div class="h-[5vh] w-[5vw] ml-[15%] mb-4">
                            <img src="images/Teamlogos/lazio.png" alt="Lazio">
                        </div>
                        <div class="text-2xl mt-2">
                            <p class="text-white font-bold">
                                :
                            </p>
                        </div>
                        <div class="h-[4vh] w-[4vw] mr-[15%] mb-9">
                            <img src="images/Teamlogos/celtic.png" alt="Celtic">
                        </div>
                    </div>

                    <div class="flex items-center justify-between w-full mt-2">
                        <div class="text-center ml-[21.5%]">
                            <p class="text-white align-text-bottom">
                                Lazio
                            </p>
                        </div>
                        <div class="text-center mr-[18.5%]">
                            <p class="text-white align-text-bottom">
                                Celtic
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Zweite Spielpaarung -->
                <div class="flex flex-col items-center bg-blue-500 m-2 h-[35%] mt-2 w-[80%]">
                    <div class="mb-2">
                        <p class="text-white text-center text-lg font-bold text-xs">
                            24. November, 18:45
                        </p>
                    </div>
                    <div>
                        <p class="text-white text-center font-bold text-xs">
                            Gruppe H
                        </p>
                    </div>

                    <div class="flex items-center justify-between w-full">
                        <div class="h-[3vh] w-[3vw] ml-[19%] mb-14">
                            <img src="images/Teamlogos/donezk.png" alt="Donezk">
                        </div>
                        <div class="text-2xl mt-2">
                            <p class="text-white font-bold">
                                :
                            </p>
                        </div>
                        <div class="h-[3vh] w-[3vw] mr-[19%] mb-14">
                            <img src="images/Teamlogos/antwerp.png" alt="Antwerp">
                        </div>
                    </div>

                    <div class="flex items-center justify-between w-full mt-2">
                        <div class="text-center ml-[20%]">
                            <p class="text-white align-text-bottom">
                                Donezk
                            </p>
                        </div>
                        <div class="text-center mr-[18.5%]">
                            <p class="text-white align-text-bottom">
                                Antwerp
                            </p>
                        </div>
                    </div>
                </div>
    */