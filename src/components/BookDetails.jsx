import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import BookDescription from "./BookDescription";
import BookActionButton from "./BookActionButton";
import BookDetailListItem from "./BookDetailListItem";
import { leagueHeading } from "../utils/leagueName";
import Breadcrumbs from "./Breadcrumbs";
const BookDetails = () => {
  const location = useLocation();
  const { league } = useParams();
  const [errorMsg, setErrorMsg] = useState(false);
  const navigationData = league
    ? [
        { url: "/#topfiveleagues", title: "Top five leagues" },
        { url: `/${league}`, title: leagueHeading(league) },
      ]
    : [
        {
          url: `/#${location.state.categoryId}`,
          title: `Back to ${location.state.category}`,
        },
      ];
  const handleModal = () => {
    setErrorMsg(false);
  };
  return (
    <>
      <Breadcrumbs
        navigationData={navigationData}
        pathName={location.state.pathName}
      />
      ;
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
