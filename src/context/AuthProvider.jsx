import React, { createContext, useState, useEffect } from "react";
import { Global } from "../helpers/Global";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    //TODO: REVEER ESTO
    // const user = localStorage.getItem("user");
    // const userObj = JSON.parse(user);
    // if (!user) {
    //   setLoading(false);
    //   return false;
    // } else {
    //   setAuth(userObj);
    //   setLoading(false);
    // }

    // const user = localStorage.getItem("user");
    // if (!user) {
    //   setLoading(false);
    //   return false;
    // }

    // const request = await fetch(Global.url + "getUser", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await request.json();
    // setAuth(data.user);
    // setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
