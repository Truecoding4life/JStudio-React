// UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const useMyContext = () => useContext(UserContext);

const UserProvider = ({ children, doAlert, setAlert }) => {
  return (
    <UserContext.Provider value={{ doAlert, setAlert }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider ;