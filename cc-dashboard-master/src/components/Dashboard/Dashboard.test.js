import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import CategoryCard from './Category-Card/CategoryCard'
import Card from 'react-bootstrap';
import { shallow, mount } from "enzyme";
import React from "react";
import { Button } from "react-bootstrap";

describe("When the Dashboard component is displayed", () => {
  
    it("should render logout button", () => {
    const wrapper = shallow(<Dashboard />);
    expect(
      typeof wrapper.find(".logout-button").getElement().props.children
    ).toBe("string");
    expect(wrapper.find(".logout-button").getElement().props.children).toEqual(
      "Logout"
    );
  });

  it("Logout button should call mock function when clicked", () => {
    const testClick = jest.fn();
    const wrapper = shallow(<Dashboard logoutButtonClick={testClick} />);
    const logoutButton = wrapper.find("button").simulate("click");
    expect(testClick).toHaveBeenCalled();
  });

  describe("When the Card Component is displayed", () => {
    it("Should display a title", () => {
      /* attempt 1 */
        // const cardWrapper = shallow(<Dashboard/>);
        // const categoryCard = shallow(<CategoryCard category={'Fitness'}/>)
        // expect(cardWrapper.containsMatchingElement('.card-title h5')).toHaveProperty()
        // expect(cardWrapper.containsMatchingElement(<CategoryCard category={'Fitness'}/>)).toEqual(true);
        // expect(cardWrapper.find('.card-title').text()).toEqual(categoryCard.find({category: 'Fitness'}));
        // expect(cardWrapper.containsMatchingElement('card-title h5')).toEqual(true);

        /* attempt 2 */
        // const dashWrapper = shallow(<Dashboard/>);
        // const catCardWrapper = dashWrapper.find(CategoryCard);
        // expect(dashWrapper.find('div').exists()).toEqual(true)

        /* attempt 3 */
      // mount(<Card>Card</Card>).assertSingle('div');   

      
 
  //      https://enzymejs.github.io/enzyme/docs/api/selector.html
  
    });

    
 

})

  // it("should contain four category components", () => {
  //   const dashWrapper = shallow(<Dashboard />);    
  //   expect(dashWrapper.find('.category-card')).toHaveLength(4);
  // });

  // it("should contain the titles Physical Fitness, Evaluations, ADLS, Medical")
  // const dashWrapper = shallow(<Dashboard />);
  // expect(dashWrapper.find("Card.Title"))
  
});
