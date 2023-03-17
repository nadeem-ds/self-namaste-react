import React, { useEffect, useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    //it will work like componentwillunmount

    console.log("useEffect");

    // return () => {
    //   setInterval(() => {
    //     console.log("useeffect set interval");
    //   }, 1000);
    // };
    const timer = setInterval(() => {
      console.log("useeffect set interval");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useeffect return");
    };
  }, []);

  console.log("render");

  return (
    <div>
      <h1>Profile page about the author</h1>
      <h2>Count:{count}</h2>
      <h2>Count2:{count2}</h2>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount2((count) => count + 1);
        }}
      >
        INC Count
      </button>
    </div>
  );
};

export default Profile;
