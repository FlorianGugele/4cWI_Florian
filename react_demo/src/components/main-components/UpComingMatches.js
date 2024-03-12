import React from 'react'

export default function UpCommingMatches() {
    return (
        <div class="bg-contain w-[100vw] flex flex-col" id="nextGames">
            <div class="flex justify-end items-center h-screen w-full">
                <div class=" flex mr-[20%] border-2 transition-transform transform hover:scale-105"><a href="news.js"><img src="images/Achtelfinals.png"></img></a></div>
                <div class="flex flex-col items-center justify-center bg-stone-200 h-[60%] w-[30%] mr-10">
                    <p class="text-black">
                        kommende Spiele
                    </p>

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
                                <img src="images/Teamlogos/lazio.png" alt="Lazio"></img>
                            </div>
                            <div class="text-2xl mt-2">
                                <p class="text-white font-bold">
                                    :
                                </p>
                            </div>
                            <div class="h-[4vh] w-[4vw] mr-[15%] mb-9">
                                <img src="images/Teamlogos/celtic.png" alt="Celtic"></img>
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
                                <img src="images/Teamlogos/donezk.png" alt="Donezk"></img>
                            </div>
                            <div class="text-2xl mt-2">
                                <p class="text-white font-bold">
                                    :
                                </p>
                            </div>
                            <div class="h-[3vh] w-[3vw] mr-[19%] mb-14">
                                <img src="images/Teamlogos/antwerp.png" alt="Antwerp"></img>
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
                    <a href="match.js"
                        class="hover:bg-gray-300 hover:shadow-md p-4 rounded-md transition duration-300 ease-in-out">
                        <p>
                            mehr Anzeigen...
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}
