import React from "react";

const Shimmer = () => {
  return (
    <div className=" flex flex-wrap">
      <div className="w-full h-20 border border-white bg-pink-50 p-2 m-3 rounded-md"></div>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="h-40 w-40 border border-white m-3 p-2 bg-pink-100 shodow-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
