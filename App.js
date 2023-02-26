const heading = React.createElement(
    "h1",
    { id: "title" },
    // { id: "title", className: "titleClass" },
    // { id: "title", style: { color: "red" } },
    "Namaste React by react"
  );
  const heading1 = React.createElement(
    "h1",
    { id: "heading1" },
    "heading 1"
  );
  const heading2 = React.createElement(
    "h2",
    { id: "heading2" },
    "Heading 2"
  );
  const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //   console.log("roor", root);
  root.render(container);

  