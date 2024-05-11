import React, { createContext, useState, useContext } from "react";

export const UserInfoContext = createContext(null);
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    id: "testid",
    pw: "testpw",
    pwCheck: "testpwCheck",
    userName: "testuserName",
    account: "testaccount",
    phoneNumber: "testphoneNumber",
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
