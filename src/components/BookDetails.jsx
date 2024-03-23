import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./UI/Button";
import Modal from "../components/UI/Modal";
import BookDescription from "./BookDescription";
import BookActionButton from "./BookActionButton";
import BookDetailListItem from "./BookDetailListItem";
const BookDetails = () => {
  const location = useLocation();
  const [errorMsg, setErrorMsg] = useState(false);
  const handleModal = () => {
    setErrorMsg(false);
  };
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center">
        <BookActionButton setErrorMsg={setErrorMsg} />
        <BookDescription bookDetails={location.state} />
        <BookDetailListItem bookDetails={location.state} />
      </div>
      {errorMsg && (
        <Modal
          onClose={handleModal}
          title="Log in to add to my list."
          isOpen={errorMsg}
        >
          <div className="flex items-center justify-center gap-3 px-5">
            <Link to="/login">
              <Button
                onClick={handleModal}
                className="w-48 rounded-2xl px-10 py-3 sm:max-w-32"
              >
                Login
              </Button>
            </Link>
            <Button
              onClick={handleModal}
              className="w-48 rounded-2xl px-10 py-3 sm:max-w-32"
            >   
              Close
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default BookDetails;
