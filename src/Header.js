import React from "react";
import "./styles.css";
import Headercss from "./Header.module.css";
const Header = () => {
  return (
    <header className="card">
      <h1>Main Title</h1>
      <button className={Headercss.btn}>Show Here</button>
    </header>
  );
};

export default Header;
