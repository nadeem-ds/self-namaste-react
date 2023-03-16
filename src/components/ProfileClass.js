import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //this is the place we initilize the state

    this.state = {
      count: 0,
      count2: 0,
    };

    console.log("constructor");
  }

  componentDidMount() {
    // it will render after render
    // 1. constructor
    // 2.render
    // 3. componentDidMount


    //THis is the place for api call

    

    console.log("component did mount");
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>This is class component</h1>
        <h2>Name :{this.props.name}</h2>
        {/* use the state variabl */}
        <h3>Count : {this.state.count}</h3>
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
        </button>
      </div>
    );
  }
}

export default ProfileClass;
