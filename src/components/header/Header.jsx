import React from "react";
import "./Header.css";
import Multitext from "./Multitext";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Guna Pandithurai</h1>
        <h5 class="text-light"> <Multitext /></h5>

      </div>
    </header>
  );
};

export default Header;
