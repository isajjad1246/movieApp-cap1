import React from "react";
import './Footer.css';
function Footer(props) {
    return (
      <div className="footer">
        <footer>
          <small>{props.name}</small> 

        </footer>
      </div>
    );
  } 
export default Footer;