import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      | <NavLink to="sobre">Sobre</NavLink>
    </nav>
  );
}

export default Header;
