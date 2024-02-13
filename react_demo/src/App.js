import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import './App.css';
import Group from './pages/group';
import Team from './pages/team';
import Match from './pages/match';
import News from './pages/news';
import Verteiler from './pages/verteiler';
import Main from './pages/main';

function MyComponent() {
  const navigate = useNavigate();

  // Prüfe, ob die Funktion aufgerufen wurde und die aktuelle URL nicht "/main" ist
  useEffect(() => {
    navigate('/main', { replace: true });  // Nutze replace: true, um die aktuelle URL zu ersetzen
  }, [navigate]);

  return (
    <div>
      {/* Hier kannst du weitere Inhalte deiner App hinzufügen */}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Verteiler />,
    children: [
      {
        path: 'group/',
        element: <Group />,
      },
      {
        path: 'team/',
        element: <Team />,
      },
      {
        path: 'news/',
        element: <News />,
      },
      {
        path: 'match/',
        element: <Match />,
      },
      {
        path: 'main/',
        element: <Main />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <MyComponent />
    </RouterProvider>
  );
}


