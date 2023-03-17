import React from "react";
import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    //this is the place we initilize the state

    // this.state = {
    //   count: 0,
    //   count2: 0,
    // };

    this.state = {
      name: "github user",
      userPic: "demo pic",
    };

    console.log(" child-constructor");
  }

  // componentDidMount() {
  // it will render after render
  // 1. constructor
  // 2.render
  // 3. componentDidMount

  //THis is the place for api call

  //   console.log("  child- component did mount");
  // }

  async componentDidMount() {
    // best palce for api call

    const url = "https://api.github.com/users/chetannada";
    const data = await fetch(url);
    const responce = await data.json();
    this.setState({ name: responce.name, userPic: responce.avatar_url });
    console.log(responce);
    console.log(responce.name);

    console.log(" parent- component did mount");

    console.log(this.state.name);
    console.log(this.state.userPic);
  }

  componentDidUpdate() {
    console.log("componet did update");
  }

  componentWillUnmount() {
    console.log("component destroy");
  }

  render() {
    console.log(" child- render");

    return (
      <div>
        <h1>This is class component</h1>
        {/* <h2>Name :{this.props.name}</h2> */}
        {/* use the state variabl */}
        {/* <h3>Count : {this.state.count}</h3>
        <h3>Count : {this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 1,
            });
          }}
        >
          CountInc
        </button> */}

        <h1>About Us page</h1>
        <h1>Name:{this.state.name}</h1>
        <img src={this.state.userPic} alt="demo pic" />
      </div>
    );
  }
}

export default ProfileClass;
