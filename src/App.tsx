import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
    </div>
  );
}

export default App;
