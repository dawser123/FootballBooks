import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
const NavLinksList = () => {
  return (
    <>
      <NavItem to={"/"}>Home</NavItem>
      <NavLink to={"/search"} className="cursor-pointer text-2xl">
        Search
      </NavLink>
      <NavItem to="/my-list">My list</NavItem>
      <NavItem to={"/contact"}>Contact</NavItem>
    </>
  );
};
export default NavLinksList;
