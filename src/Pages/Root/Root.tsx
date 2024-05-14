import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="Root">
      <div className="bg"></div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
