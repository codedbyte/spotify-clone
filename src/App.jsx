import React from "react";
import SideBar from "./components/SideBar.jsx";
import Player from "./components/Player.jsx";

const App = () => {
  return(
    <div className="h-screen bg-black">
      <div className="h-[90%]">
        <SideBar />
      </div>
      <Player />
    </div>
  );
}

export default App;