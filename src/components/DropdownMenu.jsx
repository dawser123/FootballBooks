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
      className="z-50 cursor-pointer flex justify-center items-center  text-primary-text-color duration-300 md:hidden "
    >
      {!isOpen ? (
        <button>
          <FaArrowDown className="text-2xl" />
        </button>
      ) : (
        <button>
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};
export default DropdownMenu;
