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
    This is react element
  </h1>
);
const Title = () => {
  return (
    <div>
      <h1>This is second title component</h1>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div>
      {/* use react element inside component */}
      {heading1}

      {/* use react component inside component 2 way to do this */}
      {/* {Title()} */}
      <Title />
      <h1>This is react functional component</h1>
      <h2>This is second header</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// for react element
// root.render(heading1);

//for react component
root.render(<HeaderComponent />);

// this will also work
// root.render(HeaderComponent());
