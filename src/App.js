import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// implementing this on the lazy loading
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
// import RestrauntMenu from "./components/RestrauntMenu";
import RestrauntMenu from "./components/RestrauntMenu";
import NewRestrauntMenu from "./components/NewRestrauntMenu";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

//we are taking this on the lazy loading
// import Instamart from "./components/Instamart";

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

//we are going to use lazy loading
//instamart lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

//about page lazy loading
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Nad",
    email: "nad@gmail.com",
  });

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
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
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
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
