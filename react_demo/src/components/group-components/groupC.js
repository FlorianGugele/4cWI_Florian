import React from "react";

export default function GroupC() {
    return (
        <div class="relative  mt-12">
        <div class="m-2 mb-2 bg-stone-200 z-10">
            <p class="font-bold">Gruppe C</p>
        </div>
    
        <div class="w-[15vw] h-[28vh] m-2 bg-stone-200 z-0 flex flex-col items-center justify-center">
            <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                <p class="ml-2 mr-6">1</p>
                <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/real.png"></img></a>
                <p class="mr-16">Real Madrid</p>
                <p class="mr-2">12</p>
            </div>
            <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                <p class="ml-2 mr-3">2</p>
                <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/napoli.png"></img></a>
                <p class="mr-16">Neapel</p>
                <p class="mr-2">7</p>
            </div>
            <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                <p class="ml-2 mr-2">3</p>
                <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/braga.png"></img></a>
                <p class="mr-16">Braga</p>
                <p class="mr-2">3</p>
            </div>
            <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                <p class="ml-2 mr-5">4</p>
                <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-16" src="images/Teamlogos/union.png"></img></a>
                <p class="mr-16">Union Berlin</p>
                <p class="mr-2">1</p>
            </div>
        </div>
    </div>
    )
}