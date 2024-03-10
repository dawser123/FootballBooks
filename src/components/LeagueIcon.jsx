const LeagueIcon = ({ url,league }) => {
  return (
    <img
      className="h-24 w-24 cursor-pointer rounded-full border-4 transition-all duration-200 hover:scale-110
      text-primary-text-color text-center
      hover:border-primary-color-hover object-cover "
      src={url}
      alt={`${league} logo`}
    />
  );
};
export default LeagueIcon;
