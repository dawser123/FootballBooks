const Input = ({ className, id, placeholder, type }) => {
  return (
    <input
      autoComplete="off"
      id={id}
      className={`${className} w-full bg-transparent py-5 text-primary-text-color outline-none placeholder:text-lg placeholder:text-primary-text-color focus:outline-none`}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
