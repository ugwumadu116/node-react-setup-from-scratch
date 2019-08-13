import React from "react";
import { shallow } from "enzyme";
import Header from "./headerComponent";

describe("Header Component", () => {
  it("It should render without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".group");
    // console.log(wrapper);
    expect(wrapper.length).toBe(3);
  });
});
