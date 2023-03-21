// import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

const About1 = () => {
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

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // name: "github user",
      // userPic: "demo pic",
    };

    // console.log(" parent- constructor");
  }

  componentDidMount() {
    // best palce for api call
    // const url = "https://api.github.com/users/nadeem-ds";
    // const data = await fetch(url);
    // const responce = await data.json();
    // this.setState({ name: responce.name, userPic: responce.avatar_url });
    // console.log(responce);
    // console.log(responce.name);
    // console.log(" parent- component did mount");
  }

  render() {
    // console.log(" parent- render");

    return (
      <div>
        <h1>About Us page</h1>
        {/* <h1>Name:{this.state.name}</h1>
        <img src={this.state.userPic} alt="demo pic" /> */}

        {/* function component */}

        {/* <Outlet />

      <Link to="profile">
        <button>Auhor page </button>
      </Link> */}

        <Profile />
        {/* <ProfileClass name={"Nadeem "} /> */}
      </div>
    );
  }
}

export default About;
