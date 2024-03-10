import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
const DropdownMenu = ({ isOpen, setIsOpen }) => {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isOpen]);
  return (
    <div
      onClick={() => {
        setIsOpen((prevState) => !prevState);
      }}
      className="z-50 cursor-pointer text-primary-text-color duration-300 md:hidden "
    >
      {!isOpen ? (
        <FaArrowDown className="text-2xl" />
      ) : (
        <FaArrowUp className="text-2xl" />
      )}
    </div>
  );
};
export default DropdownMenu;
