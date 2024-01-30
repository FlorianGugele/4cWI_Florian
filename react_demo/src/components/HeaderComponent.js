import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <div className="bg-stone-200 h-[9vh] flex items-center">
      <div>
        <Link to="/main">
          <img className="h-[7.5vh] w-[7.5vh] ml-4" src="images/logo.jpg" alt="Logo" />
        </Link>
      </div>
      <p className="flex-1 text-center">
        <Link to="/news" className="transition hover:bg-stone-400">
          News
        </Link>
      </p>
      <p className="flex-1 text-center">
        <Link to="/match" className="transition hover:bg-stone-400">
          Spiele
        </Link>
      </p>
      <p className="flex-1 text-center">
        <Link to="/team" className="transition hover:bg-stone-400">
          Teams
        </Link>
      </p>
      <p className="flex-1 text-center">
        <Link to="/group" className="transition hover:bg-stone-400">
          Gruppen
        </Link>
      </p>
    </div>
  );
}
