import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Us page</h1>
      <h2>This is namaste react course</h2>

      <Outlet />

      {/* <h3>About the author</h3> */}
      {/* <Outlet /> */}

      {/* <Link to="/profile">
        <Profile />
        <button>Profile page </button>
      </Link> */}

      {/* <Profile /> */}

      
    </div>
  );
};

export default About;
