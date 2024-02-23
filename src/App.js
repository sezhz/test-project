import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Registration from "./components/Registration";
import Authorization from "./components/Authorization";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileSettings from "./components/profile-settings/ProfileSettings";
import AdminProcessing from "./components/AdminProcessing";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [filledStatus, setFilledStatus] = useState({
    telegram: false,
    viber: false,
    whatsapp: false,
  });
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleProfileUpdate = (field, value) => {
    setFilledStatus((prev) => ({ ...prev, [field]: Boolean(value) }));
  };

  const location = useLocation();

  const handleRegistration = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    setIsLoggedIn(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const isLoginPage = location.pathname === "/login";
  const isRegistrationPage = location.pathname === "/registration";

  return (
    <div>
      <AdminProcessing users={users} setUsers={setUsers} />
      {!isLoginPage && !isRegistrationPage && <Header />}
      <Routes>
        <Route
          path="/registration"
          element={<Registration onRegistration={handleRegistration} />}
        />
        <Route
          path="/login"
          element={<Authorization onLogin={handleLogin} users={users} />}
        />

        {isLoggedIn ? (
          <>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  onProfileUpdate={handleProfileUpdate}
                  filledStatus={filledStatus}
                />
              }
            />
            <Route path="/settings" element={<ProfileSettings />} />
          </>
        ) : (
          <Route path="/*)" element={<Navigate to="/login" />} />
        )}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      {!isLoginPage && !isRegistrationPage && <Footer />}
    </div>
  );
}

export default App;
