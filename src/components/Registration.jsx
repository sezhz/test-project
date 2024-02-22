import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = ({ onRegistration }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    onRegistration({ username, password });
    navigate("/login");
  };

  const handleGoToAuthorization = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-orange-200 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-8">
          Створення облікового запису
        </h2>
        <label className="mb-2 flex items-center justify-between">
          username:
          <input
            className="border border-black-100 px-2"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label className="mb-2 flex items-center justify-between">
          password:
          <input
            className="border border-black-100 px-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <div className="flex m-0 p-0">
          <button
            className="bg-gray-300 text-black px-2 py-1 rounded border border-black mt-4"
            onClick={handleRegistration}
          >
            Зареєструватися
          </button>
          <button
            className="text-blue px-4 py-1 text-center mt-4"
            onClick={handleGoToAuthorization}
          >
            В мене вже є акаунт
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
