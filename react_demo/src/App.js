import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/main';
import './App.css';
import Group from './pages/group';
import Team from './pages/team';
import Match from './pages/match';
import News from './pages/news';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  
    children: [
      {
        path: "group/",
        element: <Group />,
        
      },
      {
        path: "team/",
        element: <Team />,
        
      },
      {
        path: "news/",
        element: <News />,
        
      },
      {
        path: "match/",
        element: <Match />,
        
      },
    ],
  },
]);

export default function App(){
  return (
    <RouterProvider router={router} />
  )
}