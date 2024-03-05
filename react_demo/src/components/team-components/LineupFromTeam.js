import React from 'react'

export default function LineupFromTeam() {
  return (
    <div class="text-black bg-stone-200 ml-auto mr-[5%]">
            <p class="ml-[45%]">Aufstellung</p>
            <div class="relative">
                <img src="images/Spielplatz.jpg" class="w-[30vw]" alt="Spielplatz"></img>
                <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center mt-1">
                    <div class="flex mb-5">
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded mr-10">
                            19. Konate
                        </div>
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded">
                            23. Simic
                        </div>
                    </div>
                    <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded mb-5">
                        30. Gloukh
                    </div>
                    <div class="flex mb-5">
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded mr-10">
                            14. Kjaergaard
                        </div>
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded">
                            18. Bidstrup
                        </div>
                    </div>
                    <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded mb-5">
                        27. Gourna-Douath
                    </div>
                    <div class="flex mb-5">
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded mr-10">
                            3. Terzic
                        </div>
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded mr-10">
                            31. Pavlovic
                        </div>
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded mr-10">
                            22. Solet
                        </div>
                        <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded">
                            70. Dedic
                        </div>
                    </div>
                    <div class="bg-black bg-opacity-50 text-white p-2 m-2 rounded">
                        24. Schlager
                    </div>
                </div>
            </div>
        </div>
  )
}
