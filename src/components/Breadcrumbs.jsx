import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = ({ navigationData, pathName }) => {
  return (
    <div className="my-5 flex items-center justify-start gap-2 px-3 text-xl sm:px-8 ">
      {!pathName ? (
        <>
          {navigationData.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-white">/</span>}
              <Link
                to={`${link.url}`}
                className="text-white duration-300 hover:text-primary-color-hover"
              >
                {link.title}
              </Link>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          {pathName.map((link) => (
            <React.Fragment key={link}>
              <Link
                to={`${link.url}`}
                className="text-white duration-300 hover:text-primary-color-hover"
              >
                Back to {link.title}
              </Link>
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};
export default Breadcrumbs;
