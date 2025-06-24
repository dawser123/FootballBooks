import Icon from "./Icon";
import { useState } from "react";
import Newsletter from "./Newsletter";
import FooterLinks from "./FooterLinks";
import { categories } from "../utils/LinksCategory";
const Footer = () => {
  const [isNewsletterShown, setIsNewsletterShown] = useState(false);
  const [isSubscriptionSuccess, setIsSubscriptionSuccess] = useState(false);
  return (
    <footer className="mt-auto bg-primary-color py-10">
      <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start sm:px-3">
        <Icon className="hidden w-28 sm:block" />
        <div className="text-center">
          <h2 className="mb-5 text-2xl font-bold text-primary-text-color">
            Newsletter
          </h2>
          <ul>
            <li
              className="cursor-pointer list-none text-primary-text-color duration-300 hover:text-primary-color-hover"
              onClick={() => setIsNewsletterShown(true)}
            >
              <button>Subscribe to Newsletter</button>
            </li>
          </ul>
        </div>
        {categories.map((category, index) => (
          <FooterLinks key={index} category={category} />
        ))}
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
