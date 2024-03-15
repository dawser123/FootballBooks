import { useContext, useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";
import NavigationLinks from "./NavigationLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Backdrop from "./UI/Backdrop";
import AuthContext from "./contexts/AuthContext";
import LogoutConfirmation from "./LogoutConfirmation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const location = useLocation();
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };
  const confirmLogout = () => {
    navigate("/");
    user.setUser({});
    user.setLoggedIn(false);
    setShowLogoutConfirmation(false);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <>
      <div className=" fixed z-40 flex w-full items-center justify-between bg-primary-color px-3 py-3 sm:px-8 ">
        <div className="flex cursor-pointer items-center">
          <Link className="flex items-center justify-center" to="/">
            <Icon className=" cursor-pointer" />
            <h1 className="text-xl text-primary-text-color ">FootballBooks</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 text-xl">
          <NavigationLinks />
          <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
          {user.user.email ? (
            <Link
              className="text-2xl text-primary-text-color hover:text-opacity-70"
              to="/"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <Link
              className="text-2xl text-primary-text-color hover:text-opacity-70  "
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
      {showLogoutConfirmation && (
        <LogoutConfirmation
          isOpen={showLogoutConfirmation}
          onClose={() => setShowLogoutConfirmation(false)}
          onConfirm={confirmLogout}
        />
      )}
    </>
  );
};
export default Navbar;
