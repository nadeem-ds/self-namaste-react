import React, { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
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
