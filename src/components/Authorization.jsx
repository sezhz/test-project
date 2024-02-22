import React, { useState } from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Authorization = ({ onLogin, users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onLogin({ username, password });
      navigate("/dashboard", { state: { username } });
      setError("");
    } else {
      setError("Не вірний логін або пароль");
    }
  };

  const handleGoToRegistration = () => {
    navigate("/registration");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-orange-200 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-8">Вхід в акаунт</h2>
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
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          className="bg-gray-300 text-black px-4 py-1 rounded border border-black mt-4"
          onClick={handleLogin}
        >
          Увійти
        </button>
        <button
          className="px-10 py-1 text-center"
          onClick={handleGoToRegistration}
        >
          Зареєструватися
        </button>
        <button
          className="text-xl px-2 py-1 text-center justify-center border border-black absolute bottom-20 right-20 sm:right-60"
          onClick={handleShowModal}
        >
          підказка
        </button>
        <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default Authorization;
