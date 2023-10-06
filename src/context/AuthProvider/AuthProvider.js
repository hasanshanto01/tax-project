import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   console.log(children);
  const [user, setUser] = useState(null);
  const [isUserVerified, setIsUserVerified] = useState(false);
  // const [accessToken, setAccessToken] = useState("");
  const authInfo = {
    user,
    setUser,
    isUserVerified,
    setIsUserVerified,
    // setAccessToken,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
