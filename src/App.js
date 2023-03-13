import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
// import RestrauntMenu from "./components/RestrauntMenu";
import RestrauntMenu from "./components/RestrauntMenu";
import NewRestrauntMenu from "./components/NewRestrauntMenu";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";

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

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* for nested route we need one compnent outlet componet */}
      <Outlet />
      {/* <About />
      <Body />
      <Contact />
      <Card /> */}
      <Footer />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    //start workin on nested route
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            //it is equivalent to localhost:1234/about/profile
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/restraunt/:id",
        element: <NewRestrauntMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRoute} />);
