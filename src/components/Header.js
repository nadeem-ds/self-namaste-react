import { useEffect, useState, useContext } from "react";
import foodLogo from "../../foo-logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Usercontext from "../utils/UserContext";

const loggedInUser = () => {
  //some validation done here
  return false;
};

const Title = () => (
  <a href="/">
    <img src={foodLogo} className="h-40 px-4" alt="Logo" />
  </a>
);

const Header = () => {
  // let title = "Food Villa";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [title, setTitle] = useState("Food Villa");

  const online = useOnline();

  const { user } = useContext(Usercontext);
  // console.log("user context--", user);
  // console.log("user context name--", user.name);
  // console.log("user context email--", user.email);

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
    <div className="flex justify-between bg-pink-50 shadow-md sm:bg-blue-300 md:bg-yellow-200">
      <Title />

      {/* {online ? "✅" : "🔴"} */}

      {/* <h1> {title}</h1> */}

      {/* <button onClick={() => setTitle("New title ")}>Change title</button> */}

      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li class="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li class="px-2">About</li>
          </Link>
          {/* <a href="/about">
            <li>About</li>
          </a> */}
          <Link to="/contact">
            <li class="px-2">Contact</li>
          </Link>
          <Link to="/cart">
            <li class="px-2">Cart</li>
          </Link>
          <Link to="/instamart">
            <li class="px-2">Instamart</li>
          </Link>
        </ul>
      </div>

      {/* {loggedInUser() ? <button>Logout</button> : <button>Log in</button>} */}
      {isLoggedIn ? (
        <div>
          <span className="p-10 font-bold text-2xl"> {user.name}</span>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <Link to="/login">
          <button onClick={() => setIsLoggedIn(true)}>Log in</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
