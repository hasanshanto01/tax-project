import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   console.log(children);
  const [user, setUser] = useState(null);
  const [isUserVerified, setIsUserVerified] = useState(false);
  // const [accessToken, setAccessToken] = useState("");

  // const baseURL = `http://127.0.0.1:8000/api/v1`;
  const baseURL = `http://62.171.179.61:8000/api/v1`;

  const authInfo = {
    user,
    setUser,
    isUserVerified,
    setIsUserVerified,
    // setAccessToken,
    baseURL,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
