import React, { Component } from "react";

const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar hello{" "}
        <span className="badge badge-secondary badge-pill">{totalCount}</span>
      </a>
    </nav>
  );
};
export default Navbar;
