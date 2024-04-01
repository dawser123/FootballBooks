import Hero from "../components/Hero";
import TopFiveLeagues from "../components/TopFiveLeagues";
import BookRow from "../components/BookRow";
import requests from "../components/utils/requests";
const MainPage = () => {
  return (
    <main>
      <Hero />
      <h2 className="my-12 text-center text-2xl font-bold text-primary-text-color">
        Top Five Leagues
      </h2>
      <TopFiveLeagues />
      <BookRow
        rowID="popularBooks"
        title="Popular books"
        fetchURL={requests.requestPopular}
      />
      <BookRow
        rowID="newest"
        title="Newest"
        fetchURL={requests.requestNewest}
      />
    </main>
  );
};
export default MainPage;
