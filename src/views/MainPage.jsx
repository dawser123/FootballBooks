import Hero from "../components/Hero";
import TopFiveLeagues from "../components/TopFiveLeagues";
import BookRow from "../components/BookRow";
import requests from "../Requests";
const MainPage = () => {
  return (
    <main>
      <Hero />
      <h2 className="my-12 text-center text-2xl font-bold text-primary-text-color">
        Top Five Leagues
      </h2>
      <TopFiveLeagues />
      <div id="bookrow">
        <BookRow
          rowID="1"title="Popular books" fetchURL={requests.requestPopular}
        />
        <BookRow rowID="2" title="Newest" fetchURL={requests.requestNewest} />
      </div>
    </main>
  );
};
export default MainPage;
