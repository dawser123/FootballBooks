import PremiereLeague from "../assets/Premier-League.webp";
import LaLiga from "../assets/LaLiga.webp";
import SerieA from "../assets/SerieA.webp";
import Bundesliga from "../assets/Bundesliga.webp";
import Ligue1 from "../assets/Ligue1.webp";
import LeagueIcon from "./LeagueIcon";
import { Link } from "react-router-dom";
const TopFiveLeagues = () => {
  return (
    <div
      id="topfiveleagues"
      className="mx-auto flex w-72 flex-wrap items-center justify-center gap-5 md:w-full "
    >
      <Link to="/premierleague" state={{ category: "Top Five Leagues" }}>
        <LeagueIcon league="premierleague" url={PremiereLeague} />
      </Link>
      <Link to="/laliga  " state={{ category: "Top Five Leagues" }}>
        <LeagueIcon league="spain" url={LaLiga} />
      </Link>
      <Link to="/seria" state={{ category: "Top Five Leagues" }}>
        <LeagueIcon league="seria" url={SerieA} />
      </Link>
      <Link to="/bundesliga" state={{ category: "Top Five Leagues" }}>
        <LeagueIcon league="bundesliga" url={Bundesliga} />
      </Link>
      <Link to="/ligue1" state={{ category: "Top Five Leagues" }}>
        <LeagueIcon league="ligue1" url={Ligue1} />
      </Link>
    </div>
  );
};
export default TopFiveLeagues;
