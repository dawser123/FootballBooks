import { NavLink } from "react-router-dom";

const NavLinksList = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
        isActive ? "text-primary-color-hover cursor-default" : "text-primary-text-color hover:text-opacity-70"
      }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-primary-color-hover cursor-default" : "text-primary-text-color hover:text-opacity-70"
        }
        to="/my-list"
      >
        My list
      </NavLink>
      <NavLink
        className={({ isActive }) =>
        isActive ? "text-primary-color-hover cursor-default" : "text-primary-text-color hover:text-opacity-70"
      }
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );
};

export default NavLinksList;
