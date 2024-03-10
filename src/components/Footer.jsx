import Icon from "./Icon";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Newsletter from "./Newsletter";
const Footer = () => {
  const [isNewsletterShown, setIsNewsletterShown] = useState(false);
  const [isSubscriptionSuccess, setIsSubscriptionSuccess] = useState(false);
  return (
    <footer className="mt-auto bg-primary-color py-6">
      <div className="mx-auto flex items-center justify-between lg:max-w-[45%]">
        <Icon className="mx-auto w-28" />
        <ul className="mx-auto flex flex-col gap-4 text-primary-text-color md:flex-row text-lg ">
          <NavLink className='hover:text-primary-color-hover duration-300  ' to="/contact">Contact</NavLink>
          <li
            aria-label="Open Newsletter"
            className="cursor-pointer hover:text-primary-color-hover duration-300  "
            onClick={() => setIsNewsletterShown(true)}
          >
            Newsletter
          </li>
        </ul>
      </div>
      {isNewsletterShown && (
        <Newsletter
          isSubscriptionSuccess={isSubscriptionSuccess}
          setIsSubscriptionSuccess={setIsSubscriptionSuccess}
          isNewsletterShown={isNewsletterShown}
          setIsNewsletterShown={setIsNewsletterShown}
        />
      )}
    </footer>
  );
};
export default Footer;
