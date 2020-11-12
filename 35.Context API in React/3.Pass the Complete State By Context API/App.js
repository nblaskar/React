import React, { Component } from "react";
import User from "./User";
export const MyContext = React.createContext();
export default class App extends Component {
  state = {
    name: "NBLASKAR",
    value: 25,
  };
  render() {
    return (
      <div>
        <MyContext.Provider value={this.state}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
