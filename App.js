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

// const heading1 = React.createElement(
//   "h1",
//   { id: "heading1 ", key: "head1" },
//   "heading 1 from dev"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "heading2", key: "head2" },
//   "Heading 2 from dev"
// );
// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
