import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import React from "react";
import { shallow } from "enzyme";
import LoginScreen from "./components/LoginScreen/LoginScreen";

describe("The Commander's Dashbaord is displayed after the user logs in", () => {
  it("should change this.state.isLoggedIn from the default of 'false' to 'true'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isLoggedIn).toEqual(false);

    wrapper.instance().handleLogin();
    expect(wrapper.state().isLoggedIn).toEqual(true);
  });

  it("conditionally render Commander's Dashboard when this.state.isLoggedIn it 'true'", () => {
    // here, isLoggedIn = false, so we expect the LoginScreen component to render
    const appWrapper = shallow(<App />);
    expect(appWrapper.containsMatchingElement(<LoginScreen />)).toEqual(true);

    // change the isLoggedIn state from 'false' to 'true'
    appWrapper.instance().handleLogin();

    // expect LoginScreen compnent to no longer be rendered, and
    // dashboard component to render
    expect(appWrapper.containsMatchingElement(<LoginScreen />)).toEqual(false);
    expect(appWrapper.containsMatchingElement(<Dashboard />)).toEqual(true);
  });
});
//   https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setState.html
// https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/state.html
