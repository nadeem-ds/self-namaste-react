import React from "react";
import foodLogo from "../../foo-logo.jpg";

export const Title = () => (
  <a href="/">
    <img
      // src="./foo-logo.jpg"
      src={foodLogo}
      className="logo"
      // src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      alt="Logo"
    />
  </a>
  // <h1 id="heading1" key="head1">
  //   Food Villa
  // </h1>
);

export const Header = () => {
  return (
    <div className="header">
      <Title />

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

// export default Header;
