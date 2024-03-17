import { Link } from "react-router-dom";

const FooterLinks = ({ category }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="mb-5 text-2xl font-bold text-primary-text-color">
          {category.title}
        </h2>
        <ul className="flex flex-col items-center justify-center gap-2 text-primary-text-color sm:text-center">
          {category.links.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className="cursor-pointer list-none duration-300 hover:text-primary-color-hover"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
