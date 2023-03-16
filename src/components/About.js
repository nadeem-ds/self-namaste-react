// import { Outlet, Link } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About Us page</h1>

      {/* function component */}

      {/* <Outlet />

      <Link to="profile">
        <button>Auhor page </button>
      </Link> */}

      <Profile />
      <ProfileClass name={"Nadeem "} />
    </div>
  );
};

export default About;
