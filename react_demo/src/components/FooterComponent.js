import React from 'react'

export default function FooterComponent() {
  return (
    <div class="h-[9vh]">
        <div class="bg-stone-200 h-[9vh] flex flex-col items-center justify-center">
          <div class="w-screen text-center">
            <p class="text-blue-600">Offizielle weltweite Sponsoren</p>
          </div>
          <div class="flex justify-center gap-2">
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/Heinecken.jpg" alt="Heinecken"></img>
            </div>
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/ps5.jpg" alt="PS5"></img>
            </div>
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/lays.jpg" alt="Lays"></img>
            </div>
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/fedex.jpg" alt="FedEx"></img>
            </div>
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/maestro.jpg" alt="Maestro"></img>
            </div>
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/lieferando.jpg" alt="Lieferando"></img>
            </div>
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/oppo.jpg" alt="Oppo"></img>
            </div>
            <div class="rounded-md overflow-hidden">
              <img class="w-[6vw] h-[5vh]" src="images/Sponsoren/turkishairlines.jpg" alt="Turkish Airlines"></img>
            </div>
          </div>
        </div>
    </div>
  )
}
