import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainPage from "./views/MainPage";
import MyList from "./views/MyList";
import Contact from "./views/Contact";
import Login from "./views/Login";
import LeagueCard from "./components/LeagueCard";
import BookDetails from "./components/BookDetails";
import ScrollTo from "./components/utils/scrollTo"
import { FavoriteContextProvider } from "./components/contexts/FavoriteContext";
import { AuthContextProvider } from "./components/contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <FavoriteContextProvider>
      <AuthContextProvider>
        <ScrollTo />
        <Navbar />
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
            <Route path="/:league" element={<LeagueCard />}>
              <Route path=":bookId/:title" element={<BookDetails />} />
            </Route>
            <Route path="/:bookId/:title" element={<BookDetails />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </AuthContextProvider>
    </FavoriteContextProvider>
  );
}
export default App;
