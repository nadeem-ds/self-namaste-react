import { useEffect, useState } from "react";
import foodLogo from "../../foo-logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [title, setTitle] = useState("Food Villa");

  const online = useOnline();

  // useEffect(() => {
  //   //re-render again and again
  //   console.log("useEffect render");
  // });

  // useEffect(() => {
  //re render once
  //   console.log("useEffect render");
  // }, []);

  // console.log("render()");

  return (
    <div className="header">
      <Title />

      {online ? "✅" : "🔴"}

      {/* <h1> {title}</h1> */}

      {/* <button onClick={() => setTitle("New title ")}>Change title</button> */}

      <div className="nav-items">
        <ul className="nav-links">
          <Link to="/">
            <li className="nav-link-item">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-link-item">About</li>
          </Link>
          {/* <a href="/about">
            <li>About</li>
          </a> */}
          <Link to="/contact">
            <li className="nav-link-item">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="nav-link-item">Cart</li>
          </Link>
          <Link to="/instamart">
            <li className="nav-link-item">Instamart</li>
          </Link>
        </ul>
      </div>

      {/* {loggedInUser() ? <button>Logout</button> : <button>Log in</button>} */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <Link to="/login">
          <button onClick={() => setIsLoggedIn(true)}>Log in</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
