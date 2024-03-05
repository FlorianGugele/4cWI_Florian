import React from 'react'

export default function NewsContent() {
    return (
        <div className='overflow-y-none'>
            <div class="text-center font-bold text-xl mt-5 text-white">
                UEFA Chanpions League, Achtelfinale, Auslosung: Wer,
                wo, wann?
            </div>
            <div class="flex items-center mt-10">
                <div class="ml-[5%]">
                    <img src="images/Achtelfinals.png"></img>
                </div>
                <div class="bg-stone-200 ml-[8%]">
                    <p class="text-lg font-bold m-3">
                        Welche Teams sind bei der Achtelfinal-Auslosung dabei?
                    </p>
                    <p class="mt-2 ml-3">
                        An der Auslosung nehmen die 16 Teams teil, die aus der Gruppenphase der UEFA Champions
                        League
                        weiterkommen. Bereits qualifiziert:
                    </p>
                    <div class="ml-5">
                        <p class="mt-3">Arsenal (ENG)*</p>
                        <p>Atlético de Madrid (ESP)</p>
                        <p>Barcelona (ESP)</p>
                        <p>Bayern (GER)*</p>
                        <p>Dortmund (GER)</p>
                        <p>Inter (ITA)</p>
                        <p>Lazio (ITA)</p>
                        <p>Leipzig (GER)**</p>
                        <p>Manchester City (ENG)*</p>
                        <p>PSV Eindhoven (NED)**</p>
                        <p>Real Madrid (ESP)*</p>
                        <p>Real Sociedad (ESP)</p>
                    </div>
                    <div class="ml-3">
                        <p class="mt-3">*Bestätigt als Gruppensieger</p>
                        <p>**Bestätigt als Gruppenzweiter</p>
                    </div>
                    <p class="mt-7 text-lg font-bold ml-3">Wann finden die Spiele im Achtelfinale statt?</p>
                    <p class="mt-2 ml-3">Das Achtelfinale wird über vier Wochen ausgetragen:</p>
                    <div class="ml-3 mb-3">
                        <div class="flex mt-2">
                            <p class="text-l font-bold">Hinspiele: </p>
                            <p class="ml-1">13./14./20./21. Februar 2024</p>
                        </div>
                        <div class="flex mt-2">
                            <p class="text-l font-bold">Rückspiele: </p>
                            <p class="ml-1">5./6./12./13. März 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
