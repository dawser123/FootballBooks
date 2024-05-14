export function leagueHeading(leagueName) {
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
export function leagueToNationality(leagueName) {
  switch (true) {
    case leagueName == "premierleague":
      return "england";
    case leagueName == "laliga":
      return "spain";
    case leagueName == "seria":
      return "italy";
    case leagueName == "bundesliga":
      return "germany";
    case leagueName == "ligue1":
      return "france";
    default:
      return;
  }
}

export const leagues = [
  "premierleague",
  "laliga",
  "seria",
  "bundesliga",
  "ligue1",
];
