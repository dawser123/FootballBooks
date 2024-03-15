import NavLinksList from "./NavLinksList";
const NavigationLinks = () => {
  return (
    <ul className="hidden gap-4 text-2xl text-primary-text-color md:flex items-center justify-center">
      <NavLinksList />
    </ul>
  );
};
export default NavigationLinks;
