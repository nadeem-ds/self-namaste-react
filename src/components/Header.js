import { useState } from "react";
import foodLogo from "../../foo-logo.jpg";

const Title = () => (
  <a href="/">
    <img src={foodLogo} className="logo" alt="Logo" />
  </a>
);

const Header = () => {
  // let title = "Food Villa";

  const [title, setTitle] = useState("Food Villa");

  console.log("render()");

  return (
    <div className="header">
      <Title />

      <h1> {title}</h1>

      <button onClick={() => setTitle("New title ")}>Change title</button>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
