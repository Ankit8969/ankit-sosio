import React from "react";
import "../styles/navbar.css";

const Navbar = ({ show, setShow, currItem, setCurrItem }) => {
  return (
    <nav>
      <div onClick={() => setCurrItem("toStart")}>TO START</div>
      <div onClick={() => setCurrItem("toProgress")}>IN PROGRESS</div>
      <div onClick={() => setCurrItem("toFinish")}>TO FINISHED</div>
      <div className="nav-btn" onClick={() => setShow(!show)}>
        CREATE A TASK
      </div>
    </nav>
  );
};

export default Navbar;
