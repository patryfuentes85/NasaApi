import React from "react";
import { shallow } from "enzyme";
import LDetails from "./LDetails";

describe("LDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
