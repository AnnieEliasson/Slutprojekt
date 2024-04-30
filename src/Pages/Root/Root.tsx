import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="Root">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
