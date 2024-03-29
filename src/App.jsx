import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainPage from "./views/MainPage";
import MyList from "./views/MyList";
import Contact from "./views/Contact";
import Login from "./views/Login";
import LeagueCard from "./components/LeagueCard";
import BookDetails from "./components/BookDetails";
import { FavoriteContextProvider } from "./components/contexts/FavoriteContext";
import ScrollTo from './components/utils/scrollTo'
import { AuthContextProvider } from "./components/contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedLeagueCard from "./components/ProtectedLeagueCard";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <FavoriteContextProvider>
      <AuthContextProvider>
        <ScrollTo />
        <Navbar/>
        <div className="mt-[5rem] h-full">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/my-list" element={<MyList />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
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
        <Footer />
      </AuthContextProvider>
    </FavoriteContextProvider>
  );
}
export default App;
