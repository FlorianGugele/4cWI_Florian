/*function checkGroups() {

    fetch('https://api.openligadb.de/getcurrentgroup/champion1').then((response) =>
        response.json().then((result) => {
            fillGroups(result);
        })
    );
}
function fillGroups(data) {
    console.log("data",data);
        const element = document.getElementById("Gruppe");

        let html = "";
        data.forEach((Gruppe,index) => {
            let postition = index + 1;
            html += '<div class="relative mt-12 w-[15vw] m-4"><div class="m-2 mb-2 bg-stone-200 z-10 w-[15vw]"><p class="font-bold">Gruppe A</p></div><div class="w-[15vw] h-[26vh] m-2 bg-stone-200 z-0 flex flex-col items-center justify-center"><div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]"><p class="ml-2 mr-4">1</p>'
            + 1 +
            '</p><a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-14" src="'
            + Gruppe.teamIconUrl +
            '"></a><p class="mr-16">'
            + Gruppe.teamName +
            '</p><p class="mr-2">'
            + Gruppe.points +
            '</p></div>'


            //zweiter platz

            + '<div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]"><p class="ml-2 mr-4">1</p>'
            + 2 +
            '</p><a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-14" src="'
            + Gruppe.teamIconUrl +
            '</a><p class="mr-16">'
            + Gruppe.teamName +
            '</p><p class="mr-2">'
            + Gruppe.points +
            '</p></div>'


            // dritter platz

            +'<div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]"><p class="ml-2 mr-4">1</p>'
            + 3 +
            '</p><a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-14" src="'
            + Gruppe.teamIconUrl +
            '</a><p class="mr-16">'
            + Gruppe.teamName +
            '</p><p class="mr-2">'
            + Gruppe.points +
            '</p></div>'

            // vierter platz

            +'<div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]"><p class="ml-2 mr-4">1</p>'
            + 4 +
            '</p><a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-14" src="'
            + Gruppe.teamIconUrl +
            '</a><p class="mr-16">'
            + Gruppe.teamName +
            '</p><p class="mr-2">'
            + Gruppe.points +
            '</p></div></div></div>'
    

        });
        document.getElementById("Gruppe").innerHTML = html;;

    } 


checkGroups();

/*
<div class="relative mt-12">
            <div class="m-2 mb-2 bg-stone-200 z-10">
                <p class="font-bold">Gruppe A</p>
            </div>
        
            <div class="w-[15vw] h-[28vh] m-2 bg-stone-200 z-0 flex flex-col items-center justify-center">
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">1</p>
                    <a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-14" src="images/Teamlogos/Bayern.png"></a>
                    <p class="mr-16">Bayern</p>
                    <p class="mr-2">12</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">2</p>
                    <a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/Kopenhagen.png"></a>
                    <p class="mr-10">Kopenhagen</p>
                    <p class="mr-2">4</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">3</p>
                    <a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-10" src="images/Teamlogos/Gala.png"></a>
                    <p class="mr-16">Galatasaray</p>
                    <p class="mr-2">4</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">4</p>
                    <a href="Teams.html"><img class="w-[3vh] h-[3vh] mx-2 mr-10" src="images/Teamlogos/ManU.png"></a>
                    <p class="mr-16">ManUnited</p>
                    <p class="mr-2">3</p>
                </div>
            </div>
        </div>
*/
