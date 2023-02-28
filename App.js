import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "title" },

//   "Namaste React by react"
// );

console.log(heading);

// JSX

const heading1 = (
  <h1 id="heading1" key="head1">
    Heading 1
  </h1>
);

const HeaderComponent = () => {
  return <h1>This is main header</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
