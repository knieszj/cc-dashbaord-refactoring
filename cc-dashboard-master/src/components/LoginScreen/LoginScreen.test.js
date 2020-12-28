import { render, screen } from "@testing-library/react";
import LoginScreen from "./LoginScreen";
import { shallow, mount } from "enzyme";
import React from "react";
import { Button } from "react-bootstrap";

describe("Login Screen", () => {
  it("should render an h1 tag", () => {
    const wrapper = shallow(<LoginScreen />);
    expect(wrapper.find(".header-text").exists()).toBeTruthy();
  });

  it("should render login button", () => {
    const wrapper = shallow(<LoginScreen />);
    expect(
      typeof wrapper.find(".login-button").getElement().props.children
    ).toBe("string");
    expect(wrapper.find(".login-button").getElement().props.children).toEqual(
      "Login"
    );
  });

  it("Login button should call mock function when clicked", () => {
    const testClick = jest.fn();
    const wrapper = shallow(<LoginScreen loginButtonClick={testClick} />);
    const loginButton = wrapper.find("button").simulate("click");
    expect(testClick).toHaveBeenCalled();
  });
});

// https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html

// describe('<Foo />', () => {
//   it('allows us to set props', () => {
//     const wrapper = mount(<Foo bar="baz" />);
//     expect(wrapper.props().bar).to.equal('baz');
//     wrapper.setProps({ bar: 'foo' });
//     expect(wrapper.props().bar).to.equal('foo');
//   });

//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = mount((
//       <Foo onButtonClick={onButtonClick} />
//     ));
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });

//   it('calls componentDidMount', () => {
//     sinon.spy(Foo.prototype, 'componentDidMount');
//     const wrapper = mount(<Foo />);
//     expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
//     Foo.prototype.componentDidMount.restore();
//   });
// });

//import React from 'react';
//import { shallow } from 'enzyme';
//import Button from './Button';
//
//describe('Test Button component', () => {
//  it('Test click event', () => {
//    const mockCallBack = jest.fn();
//
//    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//    button.find('button').simulate('click');
//    expect(mockCallBack.mock.calls.length).toEqual(1);
//  });
//});
