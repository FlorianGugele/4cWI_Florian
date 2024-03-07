import React from 'react'

export default function groupD() {
  return (
    <div class="relative  mt-12">
            <div class="m-2 mb-2 bg-stone-200 z-10">
                <p class="font-bold">Gruppe D</p>
            </div>
        
            <div class="w-[15vw] h-[28vh] m-2 bg-stone-200 z-0 flex flex-col items-center justify-center">
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-5">1</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/sociedad.png"></img></a>
                    <p class="mr-16">Real Sociedad</p>
                    <p class="mr-2">10</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-2">2</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/inter.png"></img></a>
                    <p class="mr-16">Inter</p>
                    <p class="mr-2">10</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-5">3</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/salzburg.png"></img></a>
                    <p class="mr-16">FC Salzburg</p>
                    <p class="mr-2">3</p>
                </div>
                <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                    <p class="ml-2 mr-3">4</p>
                    <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/benfica.png"></img></a>
                    <p class="mr-16">Benfica</p>
                    <p class="mr-2">0</p>
                </div>
            </div>
        </div>
  )
}
