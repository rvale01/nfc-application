import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase';
import { auth } from 'shared-functions';

const defaultAuthContextValue = {
  currentUser: null
};

export const AuthContext = createContext(defaultAuthContextValue);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
