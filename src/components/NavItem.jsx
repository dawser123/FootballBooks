import { NavLink } from "react-router-dom";
const NavItem = ({ to, children}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `text-2xl ${isActive ? "cursor-default text-primary-color-hover" : "text-primary-text-color hover:text-opacity-70"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
export default NavItem;
