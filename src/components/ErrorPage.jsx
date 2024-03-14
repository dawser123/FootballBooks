import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="my-10 text-center text-2xl text-white">
      <h2 className="my-5"> Page not found</h2>
      <Link
        className="rounded-xl bg-primary-color px-5 py-2 duration-300 hover:bg-primary-color-hover"
        to="/"
      >
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
