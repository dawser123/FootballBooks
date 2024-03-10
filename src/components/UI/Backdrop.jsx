const Backdrop = ({ onClick }) => {
  return (
    <div
      className="fixed left-0 top-0 z-30 h-screen w-full bg-black/15"
      onClick={onClick}
    ></div>
  );
};
export default Backdrop;
