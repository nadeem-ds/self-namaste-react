import React, { useContext } from "react";

import { IMG_CDN } from "../config";
import Usercontext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  const { user } = useContext(Usercontext);
  // console.log("rescard", user.name);
  // const { nameuser, email } = user;

  // console.log(nameuser);
  return (
    // <h4>{nameuser}</h4>

    <div className=" w-56 h-90 p-2 m-5 flex flex-col border-2  flex-wrap shadow-md  bg-pink-100 overflow-hidden">
      <img className="img-card" src={IMG_CDN + cloudinaryImageId} />
      <h2 className="font-bold text-xl mt-4">{name}</h2>
      {/* <h3>{cousinName.join(", ")}</h3> */}
      <h3>{cuisines.join(", ")}</h3>

      <h4>{totalRatingsString} </h4>
      <h3 className="font-bold">{user.name}</h3>
      <h3 className="font-bold">{user.email}</h3>
      {/* <h3>{user.name}</h3> */}
    </div>
  );
};

export default RestrauntCard;
