import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-300 py-2 sm:py-8 px-4 sm:px-60 flex flex-row items-center justify-between">
      <div className="flex flex-row">
        <Link
          to="/dashboard"
          className="mr-14 text-xl text-gray-800 hover:text-gray-500 transition transition-colors duration-400 ease-in-out"
        >
          Дешборд
        </Link>
        <Link
          to="/settings"
          className="text-xl text-gray-800 hover:text-gray-500 transition transition-colors duration-400 ease-in-out"
        >
          Профіль
        </Link>
      </div>
      <Link
        to="/login"
        className="text-xl text-gray-800 hover:text-gray-500 transition transition-colors duration-400 ease-in-out"
      >
        Вийти
      </Link>
    </div>
  );
};

export default Header;
