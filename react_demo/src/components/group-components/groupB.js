import React from "react";

export default function GroupB() {
    return (
        <div class="relative  mt-12">
            <div class="m-2 mb-2 bg-stone-200 z-10">
                <p class="font-bold">Gruppe B</p>
            </div>
        
            <div class="w-[15vw] h-[28vh] m-2 bg-stone-200 z-0 flex flex-col items-center justify-center">
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-4">1</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/arsenal.png"></img></a>
                    <p class="mr-16">Arsenal</p>
                    <p class="mr-2">9</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-6">2</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-10" src="images/Teamlogos/psv.png"></img></a>
                    <p class="mr-16">PSV Eindhoven</p>
                    <p class="mr-2">5</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-3">3</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/lens.png"></img></a>
                    <p class="mr-16">Lens</p>
                    <p class="mr-2">5</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-5">4</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/sevilla.png"></img></a>
                    <p class="mr-16">Sevilla</p>
                    <p class="mr-2">2</p>
                </div>
            </div>
        </div>
    )
}