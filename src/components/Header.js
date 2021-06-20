import React from "react";
import './Header.css'
function Header(props) {
    return (
      <div className="header">
        <header>
            <h1>{props.name}</h1>
        </header>
      </div>
    );
  } 
export default Header;