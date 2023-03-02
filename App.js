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

const restrauntData = {
  img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  name: "Burger King",
  cousinName: ["Cousins", "American"],
  rating: "4.3",
};

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={restrauntData.img} />
      <h2>{restrauntData.name}</h2>
      <h3>{restrauntData.cousinName.join(", ")}</h3>
      <h4>{restrauntData.rating} star</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restrauntlist">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
