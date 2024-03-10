import { NavLink } from "react-router-dom";

const NavLinksList = () => {
  return (
    <>
      <NavLink className="duration-300 hover:text-primary-color-hover" to="/">
        Home
      </NavLink>
      <NavLink
        className="duration-300 hover:text-primary-color-hover"
        to="/my-list"
      >
        My list
      </NavLink>
      <NavLink
        className="duration-300 hover:text-primary-color-hover"
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );
};

export default NavLinksList;
