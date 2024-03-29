import icon from "../assets/icon.svg";
const Icon = ({ onclick, className }) => {
  return (
    <img
      onClick={onclick}
      className={`w-16   ${className}`}
      src={icon}
      alt="Logo of Football Books"
    />
  );
};
export default Icon;
