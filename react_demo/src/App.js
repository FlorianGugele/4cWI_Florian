import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Group from './pages/group';
import Team from './pages/team';
import Match from './pages/match';
import News from './pages/news';
import Verteiler from './pages/verteiler';
import Main from './pages/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Verteiler />,
  
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
      {
        path: "main/",
        element: <Main />,
        
      },
    ],
  },
]);

export default function App(){
  return (
    <RouterProvider router={router} />
  )
}