import React from "react";
import './Footer.css';
function Footer(props) {
    return (
      <div className="footer">
        <footer>
          <h1>{props.name}</h1>

        </footer>
      </div>
    );
  } 
export default Footer;