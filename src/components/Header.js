import { useEffect, useState } from "react";
import foodLogo from "../../foo-logo.jpg";

const loggedInUser = () => {
  //some validation done here
  return false;
};

const Title = () => (
  <a href="/">
    <img src={foodLogo} className="logo" alt="Logo" />
  </a>
);

const Header = () => {
  // let title = "Food Villa";
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [title, setTitle] = useState("Food Villa");

  // useEffect(() => {
  //   //re-render again and again
  //   console.log("useEffect render");
  // });

  // useEffect(() => {
  //re render once
  //   console.log("useEffect render");
  // }, []);

  console.log("render()");

  return (
    <div className="header">
      <Title />

      <h1> {title}</h1>

      {/* <button onClick={() => setTitle("New title ")}>Change title</button> */}

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

      {/* {loggedInUser() ? <button>Logout</button> : <button>Log in</button>} */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
    </div>
  );
};

export default Header;
