import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();

  return (
    <nav id="navbar">
      <img
        src="https://i.imgur.com/xxlw1er.png"
        alt="Jurassic Logo"
        id="logo"
        onClick={() => navigate("/")}
      />
      <h4>Jurassic Park</h4>
      <div>
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn" to="/attractions">
          Attractions
        </Link>
        <Link className="btn" to="/aboutus">
          Our Staff
        </Link>
        <Link className="btn" to="/restaurants">
          Restaurants
        </Link>
        <Link className="btn" to="/tickets">
          Tickets
        </Link>
        <Link className="btn" to="/joinform">
          Join
        </Link>
        <a className="btn" onClick={() => navigate(-1)}>
          Back
        </a>
      </div>
    </nav>
  );
};

export default Nav;
