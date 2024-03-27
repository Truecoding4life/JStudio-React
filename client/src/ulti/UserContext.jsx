// UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const useMyContext = () => useContext(UserContext);

const UserProvider = ({ children, doAlert, setAlert, setDangerAlert }) => {
  return (
    <UserContext.Provider value={{ doAlert, SuccessAlert: setAlert, FailAlert: setDangerAlert }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider ;