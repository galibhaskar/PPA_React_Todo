import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to={"/todo"}>{`todo`}</Link>
      <Link to={"/normal"}>{`user entry`}</Link>
      <Outlet />
    </>
  );
};

export default NavBar;
