import React from "react";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <nav
      className="navbar is-fixed-top is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-start">
          <a className=" navbar-item" href="/">
           
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
