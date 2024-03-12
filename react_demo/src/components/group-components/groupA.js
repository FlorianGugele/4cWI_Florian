import React from "react";

export default function GroupA({name, data}) {
    return (
        <div class="relative mt-12">
            <div class="m-2 mb-2 bg-stone-200 z-10">
                <p class="font-bold">Gruppe {name}</p>
            </div>

            <div class="w-[15vw] h-[28vh] m-2 bg-stone-200 z-0 flex flex-row  flex-wrap items-center justify-center">
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">1</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-14" src="images/Teamlogos/Bayern.png"></img></a>
                    <p class="mr-16">Bayern</p>
                    <p class="mr-2">12</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">2</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/Kopenhagen.png"></img></a>
                    <p class="mr-10">Kopenhagen</p>
                    <p class="mr-2">4</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">3</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-10" src="images/Teamlogos/Gala.png"></img></a>
                    <p class="mr-16">Galatasaray</p>
                    <p class="mr-2">4</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">4</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-10" src="images/Teamlogos/ManU.png"></img></a>
                    <p class="mr-16">ManUnited</p>
                    <p class="mr-2">3</p>
                </div>
            </div>
        </div>
    )
}