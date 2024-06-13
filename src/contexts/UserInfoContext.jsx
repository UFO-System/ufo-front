import React, { createContext, useState, useContext } from "react";

export const UserInfoContext = createContext(null);
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    id: "testid",
    group: "연암공과대학교 스마트소프트웨어학과",
    userName: "userName",
    account: "6127703304958",
  });

  const value = {
    ...userInfo,
    setUserInfo: (newInfo) => setUserInfo({ ...userInfo, ...newInfo }),
  };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};
