import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Posts />
      <Todos />
    </div>
  );
}

export default App;
