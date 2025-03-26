import React, { useEffect } from "react";
import ReactDOM from "react-dom";
const Modal = ({ children, isOpen, onClose, title,className,id }) => {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  const Backdrop = () => {
    return (
      <div
        className="fixed left-0 top-0 z-50 h-screen w-full bg-black/90"
        onClick={onClose}
      ></div>
    );
  };
  const ModalOverlay = () => {
    return (
      <>
        <div
          className={`${className} fixed left-1/2 top-[30%] z-50 h-64 w-[90%]  -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-secondary-color md:top-[50%] md:max-w-[60%] `}
        >
          <div className="flex h-full flex-col items-center justify-center text-white">
            <p id={id} className="py-5 text-lg font-bold text-center">{title}</p>
            {children}
          </div>
        </div>
      </>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};
export default Modal;
