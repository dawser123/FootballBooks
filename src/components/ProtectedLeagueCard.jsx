import { useParams } from "react-router-dom";
import { leagues } from "../utils/leagueName";
import ErrorPage from "./ErrorPage";
const ProtectedLeagueCard = ({ children }) => {
  const { league } = useParams();
  if (leagues.includes(league)) {
    return children;
  } else {
    return <ErrorPage />;
  }
};

export default ProtectedLeagueCard;
