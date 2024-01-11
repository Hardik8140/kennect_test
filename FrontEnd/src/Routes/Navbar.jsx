import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "12px",
        borderRadius: "18px",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/addPost">Post</Link>
    </div>
  );
};

export default Navbar;
