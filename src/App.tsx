import { Route, Routes } from "react-router-dom";
import "./App.css";
import LocalTodos from "./components/LocalTodos";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Home from "./components/Home";
import LocalUsers from "./components/LocalUsers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      {/* <Posts /> */}
      {/* <Todos /> */}
      {/* <LocalTodos /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/local-todos" element={<LocalTodos />} />
        <Route path="/local-users" element={<LocalUsers />} />
      </Routes>
    </div>
  );
}

export default App;
