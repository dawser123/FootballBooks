import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
const LogoutConfirmation = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleCloseLogoutConfirmation = () => {
    navigate("/");
    onClose(false);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        className="px-2 "
        title="You have been logged out successfully."
      >
        <div className="flex gap-2 text-lg font-bold">
          <Button
            onClick={handleCloseLogoutConfirmation}
            className="rounded-xl px-3 py-2"
          >
            Go home
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default LogoutConfirmation;
