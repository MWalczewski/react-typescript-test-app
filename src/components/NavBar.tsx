import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <button>
          <Link to={"/"}>Home</Link>
        </button>
        <button>
          <Link to={"/posts"}>Posts</Link>
        </button>
        <button>
          <Link to={"/todos"}>Todos</Link>
        </button>
        <button>
          <Link to={"/local-todos"}>Local Todos</Link>
        </button>
        <button>
          <Link to={"/local-users"}>Local Users</Link>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
