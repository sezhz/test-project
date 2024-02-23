import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-2 sm:py-4 mt-4 sm:mt-0 text-white flex flex-col items-center">
      <p className="mb-2">&copy; 2024 react-app</p>
      <a
        href="https://github.com/sezhz/test-project"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        GitHub
        <FontAwesomeIcon icon={faGithub} size="2x" className="ml-2" />
      </a>
    </footer>
  );
};

export default Footer;
