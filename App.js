import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "title" },

//   "Namaste React by react"
// );

// console.log(heading);

// JSX

const heading1 = (
  <h1 id="heading1" key="head1">
    Heading 1
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <h1>This is main header</h1>
      <h2>This is second header</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// for react element
// root.render(heading1);

//for react component
root.render(<HeaderComponent />);
