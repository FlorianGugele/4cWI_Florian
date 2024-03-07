import React from 'react'

export default function groupF() {
  return (
    <div class="relative mb-10">
                <div class="m-2 mb-2 bg-stone-200 z-10">
                    <p class="font-bold">Gruppe F</p>
                </div>
            
                <div class="w-[15vw] h-[28vh] m-2 bg-stone-200 z-0 flex flex-col items-center justify-center">
                    <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                        <p class="ml-2 mr-6">1</p>
                        <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/bvb.png"></img></a>
                        <p class="mr-16">Dortmund</p>
                        <p class="mr-4">7</p>
                    </div>
                    <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                        <p class="ml-2 mr-1">2</p>
                        <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/psg.png"></img></a>
                        <p class="mr-16">PSG</p>
                        <p class="mr-2">6</p>
                    </div>
                    <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                        <p class="ml-2 mr-1">3</p>
                        <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/milan.png"></img></a>
                        <p class="mr-16">Milan</p>
                        <p class="mr-2">5</p>
                    </div>
                    <div class="flex items-center justify-between bg-blue-500 m-2 h-12 mt-2 mb-0.5 w-[95%]">
                        <p class="ml-2 mr-5">4</p>
                        <a href="http://localhost:3000/team"><img class="w-[3vh] h-[3vh] mx-2 mr-12" src="images/Teamlogos/newcastle.png"></img></a>
                        <p class="mr-16">Newcastle</p>
                        <p class="mr-2">4</p>
                    </div>
                </div>
            </div>
  )
}
