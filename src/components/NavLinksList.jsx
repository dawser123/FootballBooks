import NavItem from "./NavItem";
const NavLinksList = () => {
  return (
    <>
      <NavItem to={"/"}>Home</NavItem>
      <NavItem to={"/search"}>Search</NavItem>
      <NavItem to={"/my-list"}>My list</NavItem>
      <NavItem to={"/contact"}>Contact</NavItem>
    </>
  );
};
export default NavLinksList;
