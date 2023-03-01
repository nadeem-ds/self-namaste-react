import React from "react";
import ReactDOM from "react-dom/client";

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
      <Title />
      <h1>This is react functional component</h1>
      <h2>This is second header</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
