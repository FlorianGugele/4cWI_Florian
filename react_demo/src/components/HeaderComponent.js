import React from 'react'

export default function Header() {
  return (
    <div class="bg-stone-200 h-[9vh] flex items-center">
        <div><a href="Index.html"><img class="h-[7.5vh] w-[7.5vh] ml-4" src="images/logo.jpg" alt="Logo"></img></a></div>
        <p class="flex-1 text-center"><a href="News.html" class="transition hover:bg-stone-400">News</a></p>
        <p class="flex-1 text-center"><a href="Matches.html" class="transition hover:bg-stone-400">Spiele</a></p>
        <p class="flex-1 text-center"><a href="Teams.html" class="transition hover:bg-stone-400">Teams</a></p>
        <p class="flex-1 text-center"><a href="Gruppen.html" class="transition hover:bg-stone-400">Gruppen</a></p>
    </div>
  )
}
