import React from "react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div>
      Ви не додали жодного аккаунту.
      <Link to="/settings" className="font-bold ml-2">
        Додати
      </Link>
    </div>
  );
};

export default EmptyState;
