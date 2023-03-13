// import { Outlet, Link } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Us page</h1>

      <Outlet />

      <Link to="profile">
        <button>Auhor page </button>
      </Link>
    </div>
  );
};

export default About;
