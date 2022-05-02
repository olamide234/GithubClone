import React, { useEffect } from "react";
import "./Home.css";
import { MainApp, NavBar, SideBar } from "./containers";

export default function Home() {
    useEffect(() => {
        const code = localStorage.getItem('code')
    }, []);
  return (
    <div className="App">
      <div className="App__navbar">
        <NavBar />
      </div>
      <div className="App__mainSession section__padding section__margin">
        <div className="App__mainSession-content blueprint">
          <SideBar />
          <MainApp />
        </div>
      </div>
    </div>
  );
}
