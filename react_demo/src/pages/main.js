import React from "react";
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import { Outlet } from "react-router-dom";


export default function Main() {
    return (
      
      <header className="Main-header">
        <HeaderComponent/>
  
        <body class="h-[82vh]">
        <Outlet/>
        
        </body>
  
        <FooterComponent/>
        
      </header>
    );
  }