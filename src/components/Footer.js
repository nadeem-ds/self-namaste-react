import React, { useContext } from "react";
import Usercontext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(Usercontext);
  return (
    <div className="p-3 m-3 bg-pink-600 rounded-lg">
      <h1 className="font-bold text-2xl text-white">
        This site is developed by {user.name} - {user.email}
      </h1>
    </div>
  );
};

export default Footer;
