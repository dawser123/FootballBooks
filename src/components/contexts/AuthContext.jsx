import { createContext, useEffect, useState } from "react";
const AuthContext = createContext({
  user: [],
  logIn: () => {},
  logOut: () => {},
});
const userFromLocalStorege = JSON.parse(localStorage.getItem("user") || "{}");
export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(userFromLocalStorege);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
