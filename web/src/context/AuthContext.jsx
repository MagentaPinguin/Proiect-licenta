import React, { createContext, useState, useEffect } from "react";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    return storedAuthState ? JSON.parse(storedAuthState) : false;
  });
  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem("profile");
    return storedProfile ? JSON.parse(storedProfile) : {};
  });

  const login = (profile) => {
    setIsAuthenticated(true);
    setProfile(profile);
  };

  const logout = async () => {
    setIsAuthenticated(false);
    localStorage.removeItem("profile");
    window.location.reload();
  };

  async function update(newProfile) {
    setProfile(newProfile);
  }

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [isAuthenticated, profile]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, profile, login, logout, update }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();
