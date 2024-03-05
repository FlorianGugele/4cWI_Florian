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

  useEffect(() => {
    navigate('/main', { replace: true });
  }, [navigate]);

  return (
    <div>
      {}
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


