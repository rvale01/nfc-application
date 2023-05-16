import { User } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { auth } from 'shared-functions';

interface defaultAuthContextValueI {
  currentUser: User | null;
  setCurrentUser: ()=> void
}
const defaultAuthContextValue = {} as defaultAuthContextValueI

export const AuthContext = createContext(defaultAuthContextValue);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  return (
    <AuthContext.Provider
      // @ts-ignore
      value={{ currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
