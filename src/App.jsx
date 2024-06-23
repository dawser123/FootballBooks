import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainPage from "./views/MainPage";
import MyList from "./views/MyList";
import Contact from "./views/Contact";
import Login from "./views/Login";
import LeagueCard from "./components/LeagueCard";
import BookDetails from "./components/BookDetails";
import ScrollTo from "./utils/scrollTo";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedLeagueCard from "./components/ProtectedLeagueCard";
import ErrorPage from "./components/ErrorPage";
import { FavoriteContextProvider } from "./contexts/FavoriteContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import Aboutus from "./views/Aboutus";
import Search from "./views/Search";
function App() {
  return (
    <FavoriteContextProvider>
      <AuthContextProvider>
          <ScrollTo />
          <Navbar />
          <div className="mt-[88px] h-full">
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/my-list" element={<MyList />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/aboutus" element={<Aboutus />}></Route>
              <Route path="/search" element={<Search />}>
                <Route path=":bookId/:title" element={<BookDetails />} />
              </Route>
              <Route
                path="/login"
                element={
                  <ProtectedRoute>
                    <Login />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/:league"
                element={
                  <ProtectedLeagueCard>
                    <LeagueCard />
                  </ProtectedLeagueCard>
                }
              >
                <Route path=":bookId/:title" element={<BookDetails />} />
              </Route>
              <Route path="/:bookId/:title" element={<BookDetails />}></Route>
              <Route path="/*" element={<ErrorPage />}></Route>
            </Routes>
          </div>
          <Footer/>
      </AuthContextProvider>
    </FavoriteContextProvider>
  );
}
export default App;
