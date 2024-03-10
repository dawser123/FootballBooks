import Button from "./UI/Button";
import Modal from "./UI/Modal";

const LogoutConfirmation = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      className="px-2 "
      title="Are you sure you want to log out ?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex gap-2 text-lg font-bold">
        <Button className="rounded-xl px-3 py-2" onClick={onConfirm}>
          Yes
        </Button>
        <Button className="rounded-xl px-3 py-2" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default LogoutConfirmation;
