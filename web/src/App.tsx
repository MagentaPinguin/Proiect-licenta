import React, { useContext } from "react";
import LoginPage from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Navigate to="/login" />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={!isAuthenticated ? <Navigate to="/login" /> : <Home />}
        />
        <Route
          path="/*"
          element={
            !isAuthenticated ? (
              <Navigate to="/login" />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
