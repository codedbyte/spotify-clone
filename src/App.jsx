import React from "react";
import SideBar from "./components/SideBar.jsx";
import Player from "./components/Player.jsx";
import Display from "./components/Display.jsx";

const App = () => {
  return(
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
    </div>
  );
}

export default App;