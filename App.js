import React from "react";
import ReactDOM from "react-dom/client";
import foodLogo from "./foo-logo.jpg";
/**
    Header
      -logo
      -Navbar(list item)
      -cart
      -
    body
        serchbar
        Restraunt list
          Restraunt bar
            Restraunt card
              Image
              NAme  
              RAting
              Star
              cusines

    footer
     -links
     -copyright

  */

const Title = () => (
  <img
    // src="./foo-logo.jpg"
    src={foodLogo}
    className="logo"
    // src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    alt="Logo"
  />
  // <h1 id="heading1" key="head1">
  //   Food Villa
  // </h1>
);
const Title1 = () => {
  return (
    <div>
      <h1>This is second title component</h1>
    </div>
  );
};

const HeaderComponent = () => {
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

const AppLayout = () => {
  return {};
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
