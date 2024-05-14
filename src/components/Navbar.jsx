import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";
import NavigationLinks from "./NavigationLinks";
import LogoutConfirmation from "./LogoutConfirmation";
import Backdrop from "../ui/Backdrop";
import AuthContext from "../contexts/AuthContext";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalConfirmatioOpen, setIsModalConfirmationOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useContext(AuthContext);
  const handleModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const confirmLogout = () => {
    navigate("/");
    user.setUser({});
    user.setLoggedIn(false);
    setIsModalOpen(false)
    setIsModalConfirmationOpen(true)
  };
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <>
      <div className=" fixed z-40 flex w-full items-center justify-between bg-primary-color px-3 py-3 sm:px-8 ">
        <div className="flex cursor-pointer items-center">
          <Link className="flex items-center justify-center" to="/">
            <Icon className="cursor-pointer" />
            <h1 className="text-xl text-primary-text-color ">FootballBooks</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 text-xl">
          <NavigationLinks />
          <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
          {user.user.email ? (
            <button
              className="text-2xl text-primary-text-color hover:text-opacity-70"
              onClick={handleModal}
            >
              Logout
            </button>
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
      {isModalOpen ? (
        <Modal
          className="px-2 "
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={"Are you sure you want to log out ?"}
        >
          <div className="flex gap-2 text-lg font-bold">
            <Button onClick={confirmLogout} className="rounded-xl px-3 py-2">
              Logout
            </Button>
            <Button
              onClick={handleCloseModal}
              className="rounded-xl px-3 py-2"
            >
              Cancel
            </Button>
          </div>
        </Modal>
      ) : (
        <LogoutConfirmation
          isOpen={isModalConfirmatioOpen}
          onClose={setIsModalConfirmationOpen}
        />
      )}
    </>
  );
};
export default Navbar;
