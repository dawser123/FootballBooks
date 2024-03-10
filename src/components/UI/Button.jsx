const Button = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`w-full bg-primary-color font-bold text-primary-text-color  duration-300 hover:bg-primary-color-hover ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
