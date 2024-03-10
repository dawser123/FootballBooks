import NavLinksList from "./NavLinksList";
const MobileMenu = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed right-2 top-[5rem] z-40 h-44 max-h-[450px] max-w-[250px] rounded-xl bg-primary-color px-8 py-10 sm:right-6 md:hidden">
          <ul className="flex h-full flex-col items-center gap-5 font-bold uppercase text-primary-text-color transition-all duration-500 ease-in-out ">
            <NavLinksList />
          </ul>
        </div>
      )}
    </>
  );
};
export default MobileMenu;
