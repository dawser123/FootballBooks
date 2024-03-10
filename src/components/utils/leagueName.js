function leagueHeading(leagueName) {
  switch (true) {
    case leagueName == "premierleague":
      return "Premier League";
    case leagueName == "laliga":
      return "La Liga";
    case leagueName == "seria":
      return "Serie A";
    case leagueName == "bundesliga":
      return "Bundesliga";
    case leagueName == "ligue1":
      return "Ligue 1";
    default:
      return;
  }
}
export default leagueHeading;
